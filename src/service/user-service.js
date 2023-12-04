import { loginUserValidation, registerUserValidation} from "../validation/user-validation.js";
import { validation} from "../validation/validation.js";
import {prismaClient} from "../application/database.js";
import bcrypt from "bcrypt"
import {ResponseError} from "../error/response-error.js";
import {v4 as uuid} from "uuid";

const register = async (req) => {
    const user =  validation (registerUserValidation, req);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Username already exists");
    }
    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: user
    });
}

const login = async (req)=>{
    const loginRequest = validation(loginUserValidation,req)

    const user = await prismaClient.user.findUnique({
        where :{
            username : loginRequest.username
        }

    })
    if (!user) {
        throw new ResponseError(401, "Username or password wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, "Username or password wrong");
    }

    const token = uuid().toString()
    return prismaClient.user.update({
        data: {
            token: token
        },
        where: {
            username: user.username
        },
        select: {
            token: true
        }
    });
}

export default {
    register,
    login
}
import {getValidation, registerUserValidation} from "../validation/user-validation.js";
import { validation} from "../validation/validation.js";
import {prismaClient} from "../application/database.js";
import bcrypt from "bcrypt"
import {ResponseError} from "../error/response-error.js";
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

const get = async (username)=>{
    const User = validation(getValidation, username)

    await prismaClient.user.findUnique({
        whare :{
            username : User.username
        },
        select:{
            username :true,
            password: true,
            name : true
        }
    })
}

export default {
    register,
    get
}
import supertest from "supertest";
import {web} from "../src/application/web.js";
import {prismaClient} from "../src/application/database.js";
import {logger} from "../src/application/logging.js";
import {createTestUser, removeTestUser} from "./test-util.js";

describe('POST /api/users', ()=>{

    afterEach(async ()=>{
        await removeTestUser()
    })

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'test',
                password: 'rahasia',
                name: 'test'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
        expect(result.body.data.password).toBeDefined()
    });

    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: '',
                password: '',
                name: ''
            });

        logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined()
    });

    it('should ', async () => {
        const result = await supertest(web)
            .delete('/api/users')
            .send({
                where :{
                    username : 'test'
                }
            })
    });
    
})

describe("test login", ()=>{
    beforeEach(async ()=>{
        await createTestUser();
    })

    afterEach(async ()=>{
        await removeTestUser()
    })

    it('should can login', async () => {
        const result = await supertest(web)
            .post('api/users/login')
            .send({
                username :"test",
                password :"rahasia"
            })
        logger.info(result.body)
        expect(result.status).toBe(200)
        expect(result.body.token).toBeDefined()
        expect(result.body.token).not.toBe("test")
    });
})
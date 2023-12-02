import supertest from "supertest";
import {web} from "../src/application/web.js";
import {prismaClient} from "../src/application/database.js";
import {logger} from "../src/application/logging.js";

describe('POST /api/users', ()=>{

    afterEach(async ()=>{
        await prismaClient.user.deleteMany({
            where:{
                username :'chairul'
            }
        })
    })

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'chairul',
                password: 'rahasia',
                name: 'yusuf'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("chairul");
        expect(result.body.data.name).toBe("yusuf");
        expect(result.body.data.password).toBe("rahasia")
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
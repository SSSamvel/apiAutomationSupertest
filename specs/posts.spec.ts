import * as supertest from "supertest"

const request = supertest('https://jsonplaceholder.typicode.com')

describe('POSTS', () => {
    it('get request', async () => {
        const res = await request.get('/posts')
        //console.log(res.body[0])
        expect(res.statusCode).toEqual(200)
        expect(res.body[0].id).toBe(1)
    });
    it('post request', async () => {
        const data = {
            title: "my first post request",
            body: "first one",
            userId: 111
        }
        const res = await request.post("/posts").send(data)
        //console.log(res.body)
        expect(res.statusCode).toEqual(201)
        expect(res.body.id).toBe(101)
    });
});
// users-3 : assertion using chai 
import { expect } from "chai";
import { describe } from "mocha";
import supertest from "supertest";
const request = supertest("https://gorest.co.in/public/v2/")
const token =
	'6b681f233f65a658de66be112e3fb6f3fa9e110c38d1cffcc88ca302ab185d94';
	
describe('Users', () => {
	it('GET /users', () => {
		request.get(`users?access-token=${token}`).end((err, res) => {
			expect(res.body.data).to.not.be.empty;
		})
	})
})
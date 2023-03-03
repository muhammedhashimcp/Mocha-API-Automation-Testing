

import { expect } from 'chai';
import { describe } from 'mocha';
import supertest from 'supertest';

// const request = supertest('https://gorest.co.in/public/v2/');
const request = supertest('https://gorest.co.in/public-api/');

const token =
	'6b681f233f65a658de66be112e3fb6f3fa9e110c38d1cffcc88ca302ab185d94';


describe('Users', () => {
	// return 
	it('GET /users/:id', () => {
		return request.get(`users/1?access-token=${token}`).then(res => {
			console.log(res.body);
			expect(res.body).to.not.be.empty;
			expect(res.body.data.id).to.be.eq(1);

		});
	});
});

// tests/api.spec.ts
import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';
test.describe('User management API for empty users', () => {

    test('all users: should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

});
test.describe('User management API for existing users', () => {

    test.skip('find user: should return a user by ID', async ({ request }) => {

        const response = await request.get(`${baseURL}`+ "/74");
        expect(response.status()).toBe(200);
        const responseBody = await response.json()
        expect(responseBody.id).toBe(74)
    });

    test.skip('find user: should return 404 if user not found', async ({ request }) => {

        const response = await request.get(`${baseURL}`+ "/7");
        expect(response.status()).toBe(404);

    });

    test('create user: should add a new user', async ({ request }) => {


        const response = await request.post(`${baseURL}`);
        expect(response.status()).toBe(201);
        const responseBody = await response.json()
        expect(responseBody.id).toBeDefined()
    });

    test('delete user: should delete a user by ID', async ({ request }) => {

        //creating new user
        const responseUserCreation = await request.post(`${baseURL}` );
        expect(responseUserCreation.status()).toBe(201);
        const responseBodyUserCreation = await responseUserCreation.json()
        expect(responseBodyUserCreation.id).toBeDefined()
        const userId = responseBodyUserCreation.id
        //deleting the user
        const response = await request.delete(`${baseURL}` + "/" + userId);
        expect(response.status()).toBe(200);


    });

    test('delete user: should return 404 if user not found', async ({ request }) => {

        //creating new user
        const responseUserCreation = await request.post(`${baseURL}` );
        expect(responseUserCreation.status()).toBe(201);
        const responseBodyUserCreation = await responseUserCreation.json()
        expect(responseBodyUserCreation.id).toBeDefined()
        const userId = responseBodyUserCreation.id
        //deleting the user
        const responseDeletionOne = await request.delete(`${baseURL}` + "/" + userId);
        expect(responseDeletionOne.status()).toBe(200);
        //deleting the user again after deletion
        const responseDeletionTwo = await request.delete(`${baseURL}` + "/" + userId);
        expect(responseDeletionTwo.status()).toBe(404);

    });


});

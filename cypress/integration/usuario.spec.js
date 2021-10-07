/// <reference types="cypress" />
var faker = require('faker');

describe('Cadastrar uusário', () => {

    it('Deve cadastrar usuário com sucesso', () => {
        cy.request({
            method: 'POST',
            url: '/v1/users',
            body: {
                "fullName": faker.name.findName(),
                "password": "123456",
                "email": faker.internet.email(),
                "loginType": "email"
            }
        }).should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body.token).to.exist
    })
});
});
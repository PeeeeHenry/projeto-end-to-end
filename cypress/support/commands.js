import { faker } from '@faker-js/faker'

Cypress.Commands.add('Cadastro', (nome, email, fone, senha) => {
    cy.visit('register.html')
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type(fone)
    cy.get('#password').type(senha)
    cy.get('#confirm-password').type(senha)
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()
});

Cypress.Commands.add('Login', (email, senha) => {
    cy.visit('login.html')
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#login-btn').click()
})
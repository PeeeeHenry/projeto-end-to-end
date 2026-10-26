/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro de Novo usuário e Login', () => {

  it('Deve cadastrar novo usuário e realizar login com sucesso', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    let phone = faker.phone.number('###########')
    let password = faker.internet.password()

    cy.visit('register.html')
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type(phone)
    cy.get('#password').type(password)
    cy.get('#confirm-password').type(password)
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()
    cy.get('#alert-container').should('contain', 'Conta criada com sucesso!')
  })
})
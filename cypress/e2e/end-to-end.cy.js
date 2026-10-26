/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro de Novo usuário e Login', () => {

  it('Deve cadastrar novo usuário e realizar login com sucesso', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    let fone = faker.phone.number('###########')
    let senha = faker.internet.password()
    cy.Cadastro(nome, email, fone, senha)
    cy.get('#alert-container').should('contain', 'Conta criada com sucesso!')
    cy.Login(email, senha)
    cy.url().should('include', 'dashboard.html')
  })
})
describe('Formulário cadastro', () => {
    beforeEach(()=> {
    cy.visit('http://localhost:3000')
    })
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click() 
    cy.getByData('nome-input').type('leticia')
    cy.getByData('email-input').type('leticia@gemail.com10')
    cy.getByData('senha-input').type('01234567')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')})

    it('Não deve permitir o campo nome em branco', () => {
            cy.getByData('botao-cadastro').click()
            cy.getByData('email-input').type('leticia@gemail.com10')
            cy.getByData('senha-input').type('3456789')
            cy.getByData('botao-enviar').click()
            cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
        })
    
        it('Não deve permitir o campo email em branco', () => {
            cy.visit('http://localhost:3000')
            cy.getByData('botao-cadastro').click()
            cy.getByData('senha-input').type('3456789')
            cy.getByData('botao-enviar').click()
            cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
        })
    
        it('Não deve permitir o campo senha em branco', () => {
            cy.visit('http://localhost:3000')
            cy.getByData('botao-cadastro').click()
            cy.getByData('email-input').type('leticia@gemail.com10')
            cy.getByData('botao-enviar').click()
            cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatório')
        })

//         it('Não deve permitir um e-mail inválido!', () => {
//             cy.getByData('botao-cadastro').click()
//             cy.getByData('email-input').type('maykonlindo@a')
//             cy.getByData('senha-input').type('3456789')
//             cy.getByData('botao-enviar').click()
//             cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
//         })

})
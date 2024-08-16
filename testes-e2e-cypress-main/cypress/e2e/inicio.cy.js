describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle de sua vida financeira. Crie sua conta com a gente!')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('anuncio').contains('Conta e cartão gratuitos!')
  })
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('seguro').contains('Seguro de onde estiver!')
  })
})
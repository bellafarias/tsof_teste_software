describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  }) 

  describe('Página Principal', () => {
    it('Deve renderizar h1 com o texto correto!', () => {
      cy.visit('http://localhost:3000')
      cy.get('h1').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    })
  })
  describe('Testes de texto', () => {
  it('Deve renderizar h2-vantagem com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('vantagem').contains('Vantagens do nosso banco:')
  })
  it('Deve renderizar h3-anuncio com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('anuncio').contains('Conta e cartão gratuitos!')
  })
  it('Deve renderizar paragrafo com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('texto').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
  it('Deve renderizar h3-saque com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('saque').contains('Saques sem custo')
  })
  it('Deve renderizar paragrafo 02 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('texto2').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
  it('Deve renderizar h3-pontos com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('pontos').contains('Programa de pontos')
  })
  it('Deve renderizar paragrafo 03 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('texto3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
  it('Deve renderizar h3-seguro com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('seguro').contains('Seguro de onde estiver!')
  })
  it('Deve renderizar paragrafo 04 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('texto4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})
    describe('Testes das Imagens', () => {
    it('Deve renderizar Todas as Imagens corretamente!', () => {
      cy.visit('http://localhost:3000')
      cy.getByData('imagens').should("be.visible")
  })
})
})
describe('Testing Codebreaker', () =>{
    it('Gets type element and check email', () =>{
        cy.visit('/') //arange
        
        cy.get('#numberForm').find('#number')
        .type('1698')
        .should('have.value','1698')
        cy.get('[type="submit"]').click()
        .get('#message').should('contain','x')
        
    })
});
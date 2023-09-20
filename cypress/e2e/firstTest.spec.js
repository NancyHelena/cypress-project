/// <reference types="cypress" />

describe('First test suite', ()=>{

    it('First test',()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by tab names
        cy.get('input')

        // by Id
        cy.get('#inputEmail1')

        //by class value
        cy.get('.input-full-width')

        // by attribute name
        cy.get('[fullwidth]')

        // by attribute and value
        cy.get('[placeholder="Email"]')   

        // by entire class value 
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by two attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // by tag, attribute id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //by cypress test ID
        cy.get('[data-cy="imputEmail1"]')
    })
})
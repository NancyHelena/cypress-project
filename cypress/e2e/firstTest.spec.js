/// <reference types="cypress" />

describe('First test suite', ()=>{

    it('First test',()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by tag names
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

    it('second test',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //Theory
        // get() - find elements on the page locator globally 
        // find() - find child elements by locator 
        // contains() - find html text and by text and locator
        
        cy.contains('[status="warning"]','Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')

        //cypres chains and DOM 
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain','Sign in')
            .parents('form ')
            .find('nb-checkbox')
            .click()
    })
    it('save subject of the command',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain','Password')

       // 1 Cypress Alias
       cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
       cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain','Email')
       cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain','Password')

       // 2 cypress then() methods
       cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm=>{
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain','Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain','Password') 
        //  wrap is used to convert Jquery object to cypress
       })
    })

    it('save subject of the command',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        // 2
        cy.get('[for="exampleInputEmail1"]').then( label =>{
            const labelText = label.text()
            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('contain', 'Email address')
        })

        //3 
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text=>{
            expect(text).to.equal('Email address')
        } )
        cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain','Email address')

        //5 invoke property 
        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop','value').then(property =>{
            expect(property).to.equal('test@test.com')
        })

        })

        it('Radio button',()=>{
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()

            cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons =>{ // aqui se tiene los radio para poder interactuar con ellos 
                cy.wrap(radioButtons).eq(0).check({force:true}).should('be.checked')
                cy.wrap(radioButtons).eq(1).check({force:true})
                cy.wrap(radioButtons).eq(0).should('not.be.checked')
                cy.wrap(radioButtons).eq(2).should('be.disabled')
            })
        })

        it.only('Checkboxes',()=>{
            cy.visit('/')
            cy.contains('Modal & Overlays').click()
            cy.contains('Toastr').click()

            cy.get('[type="checkbox"]').eq(0).click({force:true})
            cy.get('[type="checkbox"]').eq(1).click({force:true})
        })
})
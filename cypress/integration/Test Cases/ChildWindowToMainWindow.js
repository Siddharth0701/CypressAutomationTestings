/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('a#opentab').invoke('removeAttr','target').click()
cy.url().should('include','rahulshettyacademy.com/')
 
cy.go('back')

 
    
})
 
 
})
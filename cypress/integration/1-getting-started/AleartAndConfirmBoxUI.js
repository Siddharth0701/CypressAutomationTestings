/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('input#alertbtn').click()
cy.get('input#confirmbtn').click()
cy.on('window:alert',(str)=>
{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')

})
cy.on('window:confirm',(str)=>
{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')

})
 
    
})
 
 
})
 
 

 
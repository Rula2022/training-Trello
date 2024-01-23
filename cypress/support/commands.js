Cypress.Commands.add("trelloLogin",(EMAIL,PASSWORD)=>{
  cy.visit("/login")
  cy.wait(5000)
  cy.get("#user").type(EMAIL)
  cy.get("#login").click()
  const myPassword=PASSWORD
  cy.origin("https://id.atlassian.com",{args:{myPassword}},({myPassword})=>{
    cy.get("#password").type(myPassword,{force:true})
    cy.get("#login-submit").click()
    cy.wait(10000)
  })
})
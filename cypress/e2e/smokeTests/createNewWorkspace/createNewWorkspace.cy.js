/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
const email = "rulaammar13@gmail.com";
const password = "Rulaammar2@";

Given("Log in to Trello",()=>{
cy.trelloLogin(email,password)
})

When("Click on the create button",()=>{
cy.get("[data-testid='header-create-menu-button']").click()
})

When("Click on the create workspace button",()=>{
cy.get("[data-testid='header-create-team-button']").click()
})

When("Enter workspace name in input field",()=>{
  cy.get("[data-testid='header-create-team-name-input']").type("RulaQATraining") 
})

When("Select workspace type",()=>{
    cy.get("[data-testid='header-create-team-type-input']").click()
    cy.contains("Other").click()
})

When("Click on the continue button",()=>{
   cy.get("[data-testid='header-create-team-submit-button']").click()
})

When("Click on the I'll do this later link",()=>{
  cy.get("[data-testid='show-later-button']").click() 
})

Then("The workspace should be created successfully",()=>{

})
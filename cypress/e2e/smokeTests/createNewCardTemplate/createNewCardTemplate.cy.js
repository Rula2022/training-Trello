/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import { EMAIL,PASSWORD } from "../../../support/constant";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
const sharedDataUtil = new sharedDataUtils()
const sharedAction=new sharedActions()
let boardId,boardUrl;
const templateName="cypresstemplate"
const boardName="cypressBoard"
const cardTitle="cypressTitle" 
Before(() => {
    cy.trelloLogin(EMAIL,PASSWORD)
    sharedDataUtil.createNewBoard(boardName).then((response)=>{
        boardUrl=response.body.url
        boardId=response.body.id
       })
   })

Given("The user navigate to the board",()=>{
   sharedAction.openBoard(boardUrl)
})

When("Click on the template card button",()=>{
cy.get("[data-testid='list']")
cy.get("[data-testid='card-template-list-button']").click()
})

When("Click on the create a new template",()=>{
cy.get("[data-testid='create-new-template-card-button']").click()
})

When("Enter template title",()=>{
cy.get("[data-testid='create-template-card-composer']").type(templateName)
})

When("Click on the add button",()=>{
cy.get("[data-testid='new-template-card-submit-button']").click()
})

Then("The template should be visible on the list",()=>{
cy.get("[data-testid='quick-card-editor-card-front']").then((element)=>{
expect(element).to.be.visible
})
})

Then("The template should have default settings",()=>{
cy.get(".window-wrapper ").then((element)=>{
expect(element).to.be.visible
})
})
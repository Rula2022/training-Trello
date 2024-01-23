/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
const listTitle="cypressListTitle" 
import { EMAIL,PASSWORD } from "../../../support/constant";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
const sharedDataUtil = new sharedDataUtils()
const sharedAction=new sharedActions()
let boardId,boardUrl;
const boardName="cypressBoard"
const cardTitle="cypressTitle" 
Before(() => {
    cy.trelloLogin(EMAIL,PASSWORD)
    sharedDataUtil.createNewBoard(boardName).then((response)=>{
        boardUrl=response.body.url
        boardId=response.body.id
       })
   })

Given("The user navigate to the board where the list will be created",()=>{
   sharedAction.openBoard(boardUrl)
})

When("Click on the add a list button", () => {
  cy.get("[data-testid='list-composer-button']").click();
});

When("Enter list title in textarea", () => {
  cy.get("[data-testid='list-name-textarea']").eq(3).type(listTitle);
});
When("Click on the Add list button", () => {
  cy.get("[data-testid='list-composer-add-list-button']").click();
});

Then("The list should be added successfully in a board", () => {
    cy.get("[data-testid='list']").eq(3).should("be.visible")
    cy.get("[data-testid='list-name-textarea']").eq(3).should("have.text",listTitle)
});
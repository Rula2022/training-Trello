/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import { EMAIL,PASSWORD } from "../../../support/constant";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";

const sharedDataUtil = new sharedDataUtils()
const sharedAction=new sharedActions()

const boardName="cypressBoard"


let boardId,boardUrl;

//create board
Before(() => {
  cy.trelloLogin(EMAIL,PASSWORD)
 sharedDataUtil.createNewBoard(boardName).then((response)=>{
  boardUrl=response.body.url
  boardId=response.body.id
 })
  })

  Given("The user navigated to the board page",()=>{
    sharedAction.openBoard(boardUrl)
  })

  When("Click on the list name area",()=>{
cy.get("[data-testid='list-name-textarea']").first().click({force:true})
  })

  When("Update the list name",()=>{
cy.get("[data-testid='list-name-textarea']").first().clear().type("updateListName")
  })

  Then("The list name should be updated successfully",()=>{
cy.get("[data-testid='list-name-textarea']").first().should("contain","updateListName")
  })

  After(()=>{
    sharedDataUtil.deleteBoard(boardId)
  })
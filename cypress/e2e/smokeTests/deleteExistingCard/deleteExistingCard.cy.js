/// <reference types="cypress" />
import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import { EMAIL,PASSWORD } from "../../../support/constant";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";

const sharedDataUtil = new sharedDataUtils()
const sharedAction=new sharedActions()

const boardName="cypressBoard"
const cardTitle="cypressTitle" 

let boardId,boardUrl,listId;

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
    cy.wait(10000)
    sharedDataUtil.getListsOnABoard(boardId).then((response)=>{
       listId=response.body[0].id
    })
  })
  
  Given("There is an existing card on the board",()=>{
    sharedDataUtil.createANewCard(listId,cardTitle)
  })

//   When("Click on the card",()=>{
// cy.get("[data-testid='quick-card-editor-card-title']").click().find(".button-link js-archive-card").click()
//   })

//   When("Click on the archive button on the menu",()=>{})
  
//   Then("The card should be successfully deleted",()=>{})
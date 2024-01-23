class createNewCardAssertions {
  checkCardIsExist() {
    
      };
  

  checkCardIsContain(cardTitle) {
    cy.get("form [data-testid='quick-card-editor-card-front']").should("contains",cardTitle) 
  }
}
export default createNewCardAssertions;

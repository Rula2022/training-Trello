Feature: Create a new workspace functionality

    The user should be abel to create new workspace

    Scenario: Verify that the user can create workspace in a trello
      Given Log in to Trello
      When Click on the create button 
      And Click on the create workspace button
      And Enter workspace name in input field
      And Select workspace type
      And Click on the continue button
      And Click on the I'll do this later link
      Then The workspace should be created successfully

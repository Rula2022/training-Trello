Feature: Feature name

    Feature Description
    Scenario:  Verify that the user can create your board in a workspace
      Given The user navigated to trello website
      And Log in to Trello
      And Open the workspace on which we want to create the board
      When Click on the Create your first board button
      And Enter board title in input field
      And Click on the create button
      Then The board should be created successfully in a workspace

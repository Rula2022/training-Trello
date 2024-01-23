Feature: Create a new list functionality

  The user should be abel to create new list


  Scenario:  Verify that the user can add a list in a board
    Given The user navigate to the board where the list will be created
    When Click on the add a list button
    And Enter list title in textarea
    And Click on the Add list button
    Then The list should be added successfully in a board

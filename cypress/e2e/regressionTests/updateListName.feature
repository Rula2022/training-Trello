Feature:  Update the list name functionality
    The user should be abel to Update the names of the default lists on a board

    Scenario: Verify that the user can update the list name
    Given The user navigated to the board page
    When Click on the list name area
    And Update the list name
    Then The list name should be updated successfully 
    
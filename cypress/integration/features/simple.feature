Feature: Practice cypress
Background: User should visit to paget
    Given User visits to the application
    
    Scenario: User should able to see the page title
    When User sees the title of the page "Automation Practice"

    Scenario: User should able to select dropdown option
    When User clicks on dropdown option
    Then User selects selenium option

    Scenario: User should able to select radio option
    When User clicks on "Radio1"
    Then User sees selected option "Radio1"

    Scenario: User should able to select checkbox option
    When User clicks on "option1" checkbox
    Then User sees selected checkbox "option1"

    Scenario: User search India from dynamic input
    When User search "American Samoa" from dropdown
    Then User verifies searched value "American Samoa"

    Scenario: User over the mouse to see list
    Then User overs the mouse on button to see list
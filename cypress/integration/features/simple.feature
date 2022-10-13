Feature: Practice cypress
Background: User should visit to paget
    Given User visits to the application
    
    Scenario:[0] User should able to see the page title
    When User sees the title of the page "Automation Practice"

    Scenario:[1] User should able to select dropdown option
    When User clicks on dropdown option
    Then User selects selenium option

    Scenario:[2] User should able to select radio option
    When User clicks on "Radio1"
    Then User sees selected option "Radio1"

    Scenario:[3] User should able to select checkbox option
    When User clicks on "option1" checkbox
    Then User sees selected checkbox "option1"

    Scenario:[4] User search India from dynamic input
    When User search "American Samoa" from dropdown
    Then User verifies searched value "American Samoa"

    Scenario:[5] User over the mouse to see list
    Then User overs the mouse on button to see list

    Scenario:[6] File upload
    Then User visit file upload URL
    Then User upload file

    Scenario:[6] File download
    Then User download file
@focus
    Scenario:[7] Read files
    Then Read the file by using fixture
    Then Read th file by using readfile

    Scenario:[8] Write files
    Then Write the file
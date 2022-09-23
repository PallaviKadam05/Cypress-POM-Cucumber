Feature: User login successfully
@focus
    Scenario: User should able to login
    Given User visits the page
    Then User enters username 'pk' and password '@Pk@1234567890@'
    #Then User sees logged in dashboard
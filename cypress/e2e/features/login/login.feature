Feature: User Auth- Login
As a user I want to login into system

Background:
    Given I am on the login page

@smoke @critical @auth
Scenario: Successful login with standard_user
    When I login as "standard_user" with password "secret_sauce"
    And I click on the login button
    Then I should be redirected to the inventory page

@smoke
@negative
Scenario: Failed login with locked_out_user
    When I login as "locked_out_user" with password "secret_sauce"
     And I click on the login button
     Then I should see error message "Epic sadface: Sorry, this user has been locked out."
     And I should remain on the login page

@negative @regression
Scenario: Failed login with invalid_user
    When I login as "invalid_user" with password "wrong"
     And I click on the login button
     Then I should see error message "Epic sadface: Username and password do not match any user in this service"
     And I should remain on the login page

@regression @Validation
Scenario Outline: Login Form Validation
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on the login button
    Then I should see error message "<error_message>"

    Examples:
    |username|password|error_message|
    | | secret_sauce | Epic sadface: Username is required|
    |standard_user| | Epic sadface: Password is required|
    | | | Epic sadface: Username is required|


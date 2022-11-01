Feature: Place an order for 7 iPhones applying coupon

Background: Home page is opened
    Given I open the site

Scenario: Verify discount is applied and order is placed
    When I perform login
    And I return to home page
    And I click iPhone item
    And I add to Cart 7 phones 
    And I open cart 
    And I open toggle Use Coupon Code 
    And I apply coupon LuckyUser
    Then 15% discount is applied
    And message "Success: Your coupon discount has been applied!" is displayed
    When I click Checkout button
    And I select an option "I want to use a new address", fill the form and click Continue
    And I select option "I want to use an existing address" in delivery details and click Continue
    And I fill comment and click Continue
    And I select Cash&Delivery method, click Terms&conditions checkbox and click Continue
    And I click Confirm order button
    Then message "Your order has been placed!" is displayed
    And order exists in order history
    And page is closed
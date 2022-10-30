Feature: Purchase "Apple Cinema 30" item, verifying VAT calculation

Background: Home page is opened
    Given I open the site

Scenario: Verify selected values are applied and VAT is calculated correctly 
    When I click on Apple cinema 30" item
    When I select Medium in radio option
    When I select checkbox 2, 4 in Checkbox option
    When I paste short quote in Text option
    When I select Green option in Select dropdown
    When I paste long quote in TextArea option
    When I add quantity 3 to cart
    When I open cart
    Then selected values are applied
    Then VAT 20% is calculated correctly
    Then page is closed

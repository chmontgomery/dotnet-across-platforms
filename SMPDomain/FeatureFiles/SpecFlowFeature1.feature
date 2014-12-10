Feature: User name

@mytag
Scenario: Get the user's name
  Given the user's first name
  And the user's last name
  When I get their full name
  Then the result should be their names combines with a space

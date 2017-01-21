$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createNewRegister.feature");
formatter.feature({
  "line": 1,
  "name": "Create new computer register",
  "description": "\r\nAs order to create a new computer register\r\nI want to fill in the fields",
  "id": "create-new-computer-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Create new computer register",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click Add a new computer button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in computer name field with \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill in introduced date field with \"\u003cIntroducedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I fill in discontinued date field with \"\u003cDiscontinuedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"\u003ccompany\u003e\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click create this computer button",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register;",
  "rows": [
    {
      "cells": [
        "Name",
        "IntroducedDate",
        "DiscontinuedDate",
        "company"
      ],
      "line": 17,
      "id": "create-new-computer-register;create-new-computer-register;;1"
    },
    {
      "cells": [
        "Nokia v1",
        "1999-08-03",
        "2099-08-03",
        "Nokia"
      ],
      "line": 18,
      "id": "create-new-computer-register;create-new-computer-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Create new computer register",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click Add a new computer button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in computer name field with \"Nokia v1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill in introduced date field with \"1999-08-03\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I fill in discontinued date field with \"2099-08-03\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"Nokia\" option",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click create this computer button",
  "keyword": "Then "
});
formatter.match({
  "location": "createNewRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9542258633,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.add()"
});
formatter.result({
  "duration": 949681626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia v1",
      "offset": 36
    }
  ],
  "location": "createNewRegister.computerName(String)"
});
formatter.result({
  "duration": 97169730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999-08-03",
      "offset": 38
    }
  ],
  "location": "createNewRegister.introducedDate(String)"
});
formatter.result({
  "duration": 755281816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2099-08-03",
      "offset": 40
    }
  ],
  "location": "createNewRegister.discontinuedDate(String)"
});
formatter.result({
  "duration": 84435568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia",
      "offset": 10
    }
  ],
  "location": "createNewRegister.selectCompany(String)"
});
formatter.result({
  "duration": 243385567,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.createThisComputer()"
});
formatter.result({
  "duration": 497922252,
  "status": "passed"
});
});
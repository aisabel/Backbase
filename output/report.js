$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BACKBASE-001.feature");
formatter.feature({
  "line": 1,
  "name": "Validate element exist in computer database layout",
  "description": "\r\nAs order to perform actions with the page elements\r\nwe need to verify if all those elements are displayed.",
  "id": "validate-element-exist-in-computer-database-layout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Validate element exist in computer database layout",
  "description": "",
  "id": "validate-element-exist-in-computer-database-layout;validate-element-exist-in-computer-database-layout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-001"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user open computers page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I validate masthead is displayed with title text",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I validate masthead title is clickable",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I validate title exist and display available resources",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I validate search box exist",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I validate filter by name button exist",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I validate table exist",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate pagination buttons exist",
  "keyword": "Then "
});
formatter.match({
  "location": "validateComputersOverlay.userHP()"
});
formatter.result({
  "duration": 9454168839,
  "status": "passed"
});
formatter.match({
  "location": "validateComputersOverlay.mastheadDisplayed()"
});
formatter.result({
  "duration": 107449267,
  "status": "passed"
});
formatter.match({
  "location": "validateComputersOverlay.mastheadClickable()"
});
formatter.result({
  "duration": 100618685,
  "status": "passed"
});
formatter.match({
  "location": "validateComputersOverlay.titleAvailable()"
});
formatter.result({
  "duration": 60139748,
  "status": "passed"
});
formatter.match({
  "location": "validateComputersOverlay.searchboxExist()"
});
formatter.result({
  "duration": 44153280,
  "status": "passed"
});
formatter.match({
  "location": "validateComputersOverlay.filterButtonExist()"
});
formatter.result({
  "duration": 459798999,
  "status": "passed"
});
formatter.match({
  "location": "validateComputersOverlay.tableExist()"
});
formatter.result({
  "duration": 21328839,
  "status": "passed"
});
formatter.match({
  "location": "validateComputersOverlay.paginationExist()"
});
formatter.result({
  "duration": 3131043883,
  "status": "passed"
});
formatter.uri("BACKBASE-002.feature");
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
      "name": "@BACKBASE-002"
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
formatter.step({
  "line": 15,
  "name": "I verify success message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
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
      "line": 18,
      "id": "create-new-computer-register;create-new-computer-register;;1"
    },
    {
      "cells": [
        "Nokia v1",
        "1999-08-03",
        "2099-08-03",
        "Nokia"
      ],
      "line": 19,
      "id": "create-new-computer-register;create-new-computer-register;;2"
    },
    {
      "cells": [
        "1234567890123",
        "1999-08-03",
        "2099-08-03",
        "Canon"
      ],
      "line": 20,
      "id": "create-new-computer-register;create-new-computer-register;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Create new computer register",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-002"
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
formatter.step({
  "line": 15,
  "name": "I verify success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "createNewRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6668454026,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.add()"
});
formatter.result({
  "duration": 800736100,
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
  "duration": 68784922,
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
  "duration": 79992693,
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
  "duration": 1100263978,
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
  "duration": 224468247,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.createThisComputer()"
});
formatter.result({
  "duration": 703994154,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.verifySuccessMessage()"
});
formatter.result({
  "duration": 757073828,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Create new computer register",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-002"
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
  "name": "I fill in computer name field with \"1234567890123\"",
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
  "name": "I select \"Canon\" option",
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
formatter.step({
  "line": 15,
  "name": "I verify success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "createNewRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6765199256,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.add()"
});
formatter.result({
  "duration": 535616078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890123",
      "offset": 36
    }
  ],
  "location": "createNewRegister.computerName(String)"
});
formatter.result({
  "duration": 87783119,
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
  "duration": 78039338,
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
  "duration": 72920302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon",
      "offset": 10
    }
  ],
  "location": "createNewRegister.selectCompany(String)"
});
formatter.result({
  "duration": 1274542759,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.createThisComputer()"
});
formatter.result({
  "duration": 591191842,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.verifySuccessMessage()"
});
formatter.result({
  "duration": 627300569,
  "status": "passed"
});
formatter.uri("BACKBASE-004.feature");
formatter.feature({
  "line": 1,
  "name": "Update existing computer register",
  "description": "\r\nAs order to update a computer register\r\nI want to populate the fields with new data info",
  "id": "update-existing-computer-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "update computer register",
  "description": "",
  "id": "update-existing-computer-register;update-computer-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-004"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in filter field with \"\u003cNameSearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter by name button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"\u003cName\u003e\" link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I update computer name field with \"\u003cNameUpdate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I update introduced date field with \"\u003cIntroducedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I update discontinued date field with \"\u003cDiscontinuedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I update \"\u003ccompany\u003e\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click save this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify update message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "update-existing-computer-register;update-computer-register;",
  "rows": [
    {
      "cells": [
        "NameSearch",
        "Name",
        "IntroducedDate",
        "DiscontinuedDate",
        "company",
        "NameUpdate"
      ],
      "line": 20,
      "id": "update-existing-computer-register;update-computer-register;;1"
    },
    {
      "cells": [
        "Nokia v1",
        "Nokia v1",
        "1579-01-31",
        "3579-01-31",
        "RCA",
        "Erikson v2"
      ],
      "line": 21,
      "id": "update-existing-computer-register;update-computer-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "update computer register",
  "description": "",
  "id": "update-existing-computer-register;update-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-004"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in filter field with \"Nokia v1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter by name button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"Nokia v1\" link",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I update computer name field with \"Erikson v2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I update introduced date field with \"1579-01-31\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I update discontinued date field with \"3579-01-31\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I update \"RCA\" option",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click save this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify update message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "updateRegister.userInHome_Page()"
});
formatter.result({
  "duration": 6997158235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia v1",
      "offset": 29
    }
  ],
  "location": "updateRegister.filterField(String)"
});
formatter.result({
  "duration": 105127247,
  "status": "passed"
});
formatter.match({
  "location": "updateRegister.filterButton()"
});
formatter.result({
  "duration": 1167150558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia v1",
      "offset": 9
    }
  ],
  "location": "updateRegister.clickLinkFound(String)"
});
formatter.result({
  "duration": 499209298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Erikson v2",
      "offset": 35
    }
  ],
  "location": "updateRegister.updateName(String)"
});
formatter.result({
  "duration": 110052097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1579-01-31",
      "offset": 37
    }
  ],
  "location": "updateRegister.updateIntroducedDate(String)"
});
formatter.result({
  "duration": 108675553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3579-01-31",
      "offset": 39
    }
  ],
  "location": "updateRegister.updateDiscontinuedDate(String)"
});
formatter.result({
  "duration": 107044064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RCA",
      "offset": 10
    }
  ],
  "location": "updateRegister.updateSelectCompany(String)"
});
formatter.result({
  "duration": 193415743,
  "status": "passed"
});
formatter.match({
  "location": "updateRegister.saveThisComputer()"
});
formatter.result({
  "duration": 836552934,
  "status": "passed"
});
formatter.match({
  "location": "updateRegister.verifyUpdateMessage()"
});
formatter.result({
  "duration": 540230149,
  "status": "passed"
});
formatter.uri("BACKBASE-005.feature");
formatter.feature({
  "line": 1,
  "name": "Delete existing computer register",
  "description": "\r\nAs order to delete a computer register\r\nI want to click delete button",
  "id": "delete-existing-computer-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "delete computer register",
  "description": "",
  "id": "delete-existing-computer-register;delete-computer-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-005"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in search field with \"\u003cNameSearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"\u003cName\u003e\" link to delete",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click delete this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify delete message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "delete-existing-computer-register;delete-computer-register;",
  "rows": [
    {
      "cells": [
        "NameSearch",
        "Name"
      ],
      "line": 16,
      "id": "delete-existing-computer-register;delete-computer-register;;1"
    },
    {
      "cells": [
        "Erikson v2",
        "Erikson v2"
      ],
      "line": 17,
      "id": "delete-existing-computer-register;delete-computer-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "delete computer register",
  "description": "",
  "id": "delete-existing-computer-register;delete-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-005"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in search field with \"Erikson v2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"Erikson v2\" link to delete",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click delete this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify delete message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "deleteRegister.userInHomePage()"
});
formatter.result({
  "duration": 7287300734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Erikson v2",
      "offset": 29
    }
  ],
  "location": "deleteRegister.searchFieldr(String)"
});
formatter.result({
  "duration": 115089436,
  "status": "passed"
});
formatter.match({
  "location": "deleteRegister.filterButtonr()"
});
formatter.result({
  "duration": 1028087987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Erikson v2",
      "offset": 9
    }
  ],
  "location": "deleteRegister.clickDelLink(String)"
});
formatter.result({
  "duration": 512486606,
  "status": "passed"
});
formatter.match({
  "location": "deleteRegister.deleteThisComputer()"
});
formatter.result({
  "duration": 654226315,
  "status": "passed"
});
formatter.match({
  "location": "deleteRegister.verifyDeleteMessage()"
});
formatter.result({
  "duration": 519173088,
  "status": "passed"
});
});
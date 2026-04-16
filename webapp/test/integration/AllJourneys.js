sap.ui.define([
  "sap/ui/test/Opa5",
  "./pages/Main"
], function (Opa5) {
  "use strict";

  Opa5.extendConfig({
    autoWait: true,
    viewNamespace: "northcode.fioriyapsterdemo.view.",
    arrangements: new Opa5({
      iStartMyApp: function () {
        this.iStartMyUIComponent({
          componentConfig: {
            name: "northcode.fioriyapsterdemo"
          }
        });
      }
    }),
    testLibs: {
      opa: {
        actions: true,
        assertions: true
      }
    }
  });

  QUnit.module("Feed Journey");

  opaTest("Should load the read-only feed", function (Given, When, Then) {
    Given.iStartMyApp();
    Then.onTheMainPage.iShouldSeeTheReadOnlyBanner();
    Then.onTheMainPage.iShouldSeePostsInTheFeed();
    Then.iTeardownMyApp();
  });

  opaTest("Should filter engineering posts", function (Given, When, Then) {
    Given.iStartMyApp();
    When.onTheMainPage.iSelectCategory("Engineering");
    Then.onTheMainPage.iShouldSeeOnlyCategory("Engineering");
    Then.iTeardownMyApp();
  });
});

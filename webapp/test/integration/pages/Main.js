sap.ui.define([
  "sap/ui/test/Opa5",
  "sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, PropertyStrictEquals) {
  "use strict";

  var sViewName = "Main";

  Opa5.createPageObjects({
    onTheMainPage: {
      actions: {
        iSelectCategory: function (sKey) {
          return this.waitFor({
            viewName: sViewName,
            controlType: "sap.m.SegmentedButton",
            success: function (aButtons) {
              aButtons[0].setSelectedKey(sKey);
              aButtons[0].fireSelectionChange({
                item: aButtons[0].getItems().find(function (oItem) {
                  return oItem.getKey() === sKey;
                })
              });
            }
          });
        }
      },
      assertions: {
        iShouldSeeTheReadOnlyBanner: function () {
          return this.waitFor({
            viewName: sViewName,
            controlType: "sap.m.MessageStrip",
            success: function (aControls) {
              Opa5.assert.ok(aControls.length > 0, "The read-only banner is visible");
            }
          });
        },

        iShouldSeePostsInTheFeed: function () {
          return this.waitFor({
            viewName: sViewName,
            id: "feedList",
            success: function (oList) {
              Opa5.assert.ok(oList.getItems().length > 0, "The feed loaded posts from mock OData");
            }
          });
        },

        iShouldSeeOnlyCategory: function (sCategory) {
          return this.waitFor({
            viewName: sViewName,
            id: "feedList",
            success: function (oList) {
              var bOnlySelected = oList.getItems().every(function (oItem) {
                var oStatus = oItem.getContent()[0].getItems()[0].getItems()[1];
                return oStatus.getText() === sCategory;
              });
              Opa5.assert.ok(bOnlySelected, "Only posts from category '" + sCategory + "' are shown");
            }
          });
        }
      }
    }
  });
});

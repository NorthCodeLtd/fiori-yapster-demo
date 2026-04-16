sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/odata/v4/ODataModel",
  "sap/ui/model/json/JSONModel"
], function (UIComponent, ODataModel, JSONModel) {
  "use strict";

  return UIComponent.extend("northcode.fioriyapsterdemo.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      this.setModel(new ODataModel({
        serviceUrl: "/odata/v4/yapster/",
        synchronizationMode: "None",
        operationMode: "Server",
        autoExpandSelect: true,
        earlyRequests: true
      }));

      this.setModel(new JSONModel({
        selectedCategory: "All"
      }), "view");
    }
  });
});

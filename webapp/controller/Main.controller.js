sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("northcode.fioriyapsterdemo.controller.Main", {
    onInit: function () {
      this._applyCategoryFilter("All");
    },

    onCategoryChange: function (oEvent) {
      var sKey = oEvent.getParameter("item").getKey();
      this.getView().getModel("view").setProperty("/selectedCategory", sKey);
      this._applyCategoryFilter(sKey);
    },

    _applyCategoryFilter: function (sKey) {
      var oList = this.byId("feedList");
      var oBinding = oList.getBinding("items");
      if (!oBinding) {
        return;
      }

      if (sKey === "All") {
        oBinding.filter([]);
        return;
      }

      oBinding.filter([
        new Filter("Category", FilterOperator.EQ, sKey)
      ]);
    },

    formatDateTime: function (sDateTime) {
      if (!sDateTime) {
        return "";
      }
      var oDate = new Date(sDateTime);
      return new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(oDate);
    },

    formatPriorityState: function (sPriority) {
      switch (sPriority) {
        case "High":
          return "Error";
        case "Medium":
          return "Warning";
        default:
          return "Success";
      }
    }
  });
});

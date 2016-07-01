import "klondike/klondike.js";
import angular from "angular";
import ngDraggable from "ngDraggable"

angular.module("solitaire", ["klondike" ]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["solitaire", "ngDraggable"]);
});

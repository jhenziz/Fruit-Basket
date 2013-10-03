function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menuMain = Ti.UI.createView({
        backgroundImage: "/images/menuBackground.png",
        id: "menuMain"
    });
    $.__views.index.add($.__views.menuMain);
    $.__views.mainMenuHeader = Ti.UI.createView({
        top: 0,
        height: "30%",
        width: Ti.UI.SIZE,
        id: "mainMenuHeader"
    });
    $.__views.menuMain.add($.__views.mainMenuHeader);
    $.__views.doleHeader = Ti.UI.createImageView({
        id: "doleHeader",
        image: "/images/doleHeader.png"
    });
    $.__views.mainMenuHeader.add($.__views.doleHeader);
    $.__views.btnContainer = Ti.UI.createView({
        top: "25%",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "btnContainer"
    });
    $.__views.menuMain.add($.__views.btnContainer);
    $.__views.btnFruitBasket = Ti.UI.createImageView({
        top: "10%",
        left: "6%",
        height: "41%",
        width: "40%",
        id: "btnFruitBasket",
        image: "/images/btnFruitBasket.png"
    });
    $.__views.btnContainer.add($.__views.btnFruitBasket);
    $.__views.btnStoreLocator = Ti.UI.createImageView({
        top: "6%",
        left: "51%",
        height: "43%",
        width: "42%",
        id: "btnStoreLocator",
        image: "/images/btnStores.png"
    });
    $.__views.btnContainer.add($.__views.btnStoreLocator);
    $.__views.btnStamps = Ti.UI.createImageView({
        top: "53%",
        left: "6%",
        height: "40%",
        width: "40%",
        id: "btnStamps",
        image: "/images/btnStamps.png"
    });
    $.__views.btnContainer.add($.__views.btnStamps);
    $.__views.btnNotification = Ti.UI.createImageView({
        top: "50%",
        left: "51%",
        height: "40%",
        width: "44%",
        id: "btnNotification",
        image: "/images/btnNotification.png"
    });
    $.__views.btnContainer.add($.__views.btnNotification);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.btnFruitBasket.addEventListener("click", function() {
        var pickFruitsPage = Alloy.createController("makeFruits");
        pickFruitsPage.getView().open();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "makeFruits";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.makeFruits = Ti.UI.createWindow({
        id: "makeFruits"
    });
    $.__views.makeFruits && $.addTopLevelView($.__views.makeFruits);
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.makeFruits.add($.__views.__alloyId1);
    $.__views.headerMenu = Ti.UI.createView({
        backgroundImage: "/images/fbHeaderBG.png",
        top: 0,
        height: "15%",
        width: Ti.UI.FILL,
        id: "headerMenu"
    });
    $.__views.__alloyId1.add($.__views.headerMenu);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        top: "16%",
        height: "63%",
        width: "38%",
        image: "/images/doleLogo.png",
        id: "__alloyId2"
    });
    $.__views.headerMenu.add($.__views.__alloyId2);
    $.__views.btnHome = Ti.UI.createImageView({
        top: "10%",
        right: "3%",
        height: "77%",
        width: "15%",
        id: "btnHome",
        image: "/images/btnHome.png"
    });
    $.__views.headerMenu.add($.__views.btnHome);
    $.__views.titleHeader = Ti.UI.createView({
        top: "15%",
        backgroundColor: "#00a5e5",
        height: "10%",
        width: Ti.UI.FILL,
        id: "titleHeader"
    });
    $.__views.__alloyId1.add($.__views.titleHeader);
    $.__views.pageTitle = Ti.UI.createLabel({
        color: "white",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 30,
            fontFamily: "Arial"
        },
        text: "FRUIT BASKET",
        id: "pageTitle"
    });
    $.__views.titleHeader.add($.__views.pageTitle);
    $.__views.fbStepsHeader = Ti.UI.createView({
        backgroundColor: "white",
        top: "25%",
        height: "10%",
        width: Ti.UI.FILL,
        id: "fbStepsHeader"
    });
    $.__views.__alloyId1.add($.__views.fbStepsHeader);
    $.__views.btnPickBasket = Ti.UI.createImageView({
        top: "15%",
        left: "5%",
        id: "btnPickBasket"
    });
    $.__views.fbStepsHeader.add($.__views.btnPickBasket);
    $.__views.btnPickFruits = Ti.UI.createImageView({
        top: "15%",
        left: "23.2%",
        id: "btnPickFruits"
    });
    $.__views.fbStepsHeader.add($.__views.btnPickFruits);
    $.__views.btnPickAccessories = Ti.UI.createImageView({
        top: "15%",
        left: "41.2%",
        id: "btnPickAccessories"
    });
    $.__views.fbStepsHeader.add($.__views.btnPickAccessories);
    $.__views.btnWriteMessage = Ti.UI.createImageView({
        top: "15%",
        left: "59.2%",
        id: "btnWriteMessage"
    });
    $.__views.fbStepsHeader.add($.__views.btnWriteMessage);
    $.__views.btnPickCashOut = Ti.UI.createImageView({
        top: "15%",
        left: "77%",
        id: "btnPickCashOut"
    });
    $.__views.fbStepsHeader.add($.__views.btnPickCashOut);
    $.__views.basketBody = Ti.UI.createView({
        top: "35%",
        backgroundImage: "/images/woodenBackground.png",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "basketBody"
    });
    $.__views.__alloyId1.add($.__views.basketBody);
    $.__views.basketSelection = Ti.UI.createView({
        backgroundImage: "/images/bgTransparent.png",
        top: 0,
        height: "13%",
        width: Ti.UI.FILL,
        id: "basketSelection"
    });
    $.__views.basketBody.add($.__views.basketSelection);
    $.__views.btnPremade = Ti.UI.createButton({
        backgroundColor: "#e11837",
        top: "20%",
        left: "3%",
        borderRadius: 4,
        height: "60%",
        width: "45%",
        color: "white",
        opacity: "1",
        font: {
            fontSize: 20,
            fontFamily: "Arial"
        },
        title: "Baskets",
        id: "btnPremade"
    });
    $.__views.basketSelection.add($.__views.btnPremade);
    $.__views.btnCustomize = Ti.UI.createButton({
        backgroundColor: "#0054a6",
        top: "20%",
        right: "3%",
        borderRadius: 4,
        height: "60%",
        width: "45%",
        color: "white",
        opacity: "1",
        font: {
            fontSize: 20,
            fontFamily: "Arial"
        },
        title: "Creates",
        id: "btnCustomize"
    });
    $.__views.basketSelection.add($.__views.btnCustomize);
    $.__views.basketView = Ti.UI.createView({
        top: "50%",
        id: "basketView"
    });
    $.__views.basketBody.add($.__views.basketView);
    $.__views.basket = Ti.UI.createImageView({
        id: "basket"
    });
    $.__views.basketView.add($.__views.basket);
    $.__views.selectBasket = Ti.UI.createView({
        top: "20%",
        left: "10%",
        right: "10%",
        bottom: "10%",
        borderRadius: 10,
        backgroundColor: "red",
        id: "selectBasket"
    });
    $.__views.basketBody.add($.__views.selectBasket);
    var __alloyId3 = [];
    $.__views.__alloyId4 = Ti.UI.createView({
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.regularBasket1 = Ti.UI.createImageView({
        id: "regularBasket1",
        image: "/images/regularBasketSmall.png"
    });
    $.__views.__alloyId4.add($.__views.regularBasket1);
    $.__views.__alloyId5 = Ti.UI.createView({
        id: "__alloyId5"
    });
    __alloyId3.push($.__views.__alloyId5);
    $.__views.regularBasket2 = Ti.UI.createImageView({
        id: "regularBasket2",
        image: "/images/regularBasketMedium.png"
    });
    $.__views.__alloyId5.add($.__views.regularBasket2);
    $.__views.__alloyId6 = Ti.UI.createView({
        id: "__alloyId6"
    });
    __alloyId3.push($.__views.__alloyId6);
    $.__views.regularBasket3 = Ti.UI.createImageView({
        id: "regularBasket3",
        image: "/images/regularBasketLarge.png"
    });
    $.__views.__alloyId6.add($.__views.regularBasket3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId3,
        id: "scrollableView",
        showPagingControl: "true"
    });
    $.__views.selectBasket.add($.__views.scrollableView);
    $.__views.fruitsBody = Ti.UI.createView({
        top: "35%",
        backgroundImage: "/images/selectFruitsBackground.png",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "fruitsBody"
    });
    $.__views.__alloyId1.add($.__views.fruitsBody);
    $.__views.fruitSelection = Ti.UI.createView({
        backgroundImage: "/images/bgTransparent.png",
        top: 0,
        height: "13%",
        width: Ti.UI.FILL,
        id: "fruitSelection"
    });
    $.__views.fruitsBody.add($.__views.fruitSelection);
    var __alloyId7 = [];
    $.__views.__alloyId8 = Ti.UI.createView({
        id: "__alloyId8"
    });
    __alloyId7.push($.__views.__alloyId8);
    $.__views.apple = Ti.UI.createImageView({
        left: "3%",
        id: "apple",
        image: "/images/apple.png"
    });
    $.__views.__alloyId8.add($.__views.apple);
    $.__views.banana = Ti.UI.createImageView({
        left: "23%",
        id: "banana",
        image: "/images/banana.png"
    });
    $.__views.__alloyId8.add($.__views.banana);
    $.__views.orange = Ti.UI.createImageView({
        left: "43%",
        id: "orange",
        image: "/images/orange.png"
    });
    $.__views.__alloyId8.add($.__views.orange);
    $.__views.grapes = Ti.UI.createImageView({
        left: "63%",
        id: "grapes",
        image: "/images/grapes.png"
    });
    $.__views.__alloyId8.add($.__views.grapes);
    $.__views.pinya = Ti.UI.createImageView({
        left: "83%",
        id: "pinya",
        image: "/images/pinya.png"
    });
    $.__views.__alloyId8.add($.__views.pinya);
    $.__views.__alloyId9 = Ti.UI.createView({
        id: "__alloyId9"
    });
    __alloyId7.push($.__views.__alloyId9);
    $.__views.apple = Ti.UI.createImageView({
        left: "3%",
        id: "apple",
        image: "/images/apple.png"
    });
    $.__views.__alloyId9.add($.__views.apple);
    $.__views.banana = Ti.UI.createImageView({
        left: "23%",
        id: "banana",
        image: "/images/banana.png"
    });
    $.__views.__alloyId9.add($.__views.banana);
    $.__views.orange = Ti.UI.createImageView({
        left: "43%",
        id: "orange",
        image: "/images/orange.png"
    });
    $.__views.__alloyId9.add($.__views.orange);
    $.__views.grapes = Ti.UI.createImageView({
        left: "63%",
        id: "grapes",
        image: "/images/grapes.png"
    });
    $.__views.__alloyId9.add($.__views.grapes);
    $.__views.pinya = Ti.UI.createImageView({
        left: "83%",
        id: "pinya",
        image: "/images/pinya.png"
    });
    $.__views.__alloyId9.add($.__views.pinya);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId7,
        id: "scrollableView",
        showPagingControl: "true"
    });
    $.__views.fruitSelection.add($.__views.scrollableView);
    $.__views.basketView2 = Ti.UI.createView({
        top: "50%",
        id: "basketView2"
    });
    $.__views.fruitsBody.add($.__views.basketView2);
    $.__views.basket2 = Ti.UI.createImageView({
        id: "basket2"
    });
    $.__views.basketView2.add($.__views.basket2);
    $.__views.accessoriesBody = Ti.UI.createView({
        top: "35%",
        backgroundColor: "yellow",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "accessoriesBody"
    });
    $.__views.__alloyId1.add($.__views.accessoriesBody);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "Sample 3",
        id: "__alloyId10"
    });
    $.__views.accessoriesBody.add($.__views.__alloyId10);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.basket.image = Alloy.Globals.basketImage;
    if (0 == Alloy.Globals.steps) {
        $.btnPickBasket.image = "/images/btnPickBasketActive.png";
        $.btnPickFruits.image = "/images/btnPickFruitsLock.png";
        $.btnPickAccessories.image = "/images/btnPickAccessoriesLock.png";
        $.btnWriteMessage.image = "/images/btnWriteMessageLock.png";
        $.btnPickCashOut.image = "/images/btnCheckOutLock.png";
        $.basketBody.visible = true;
        $.fruitsBody.visible = false;
        $.accessoriesBody.visible = false;
        $.selectBasket.visible = false;
        $.basketSelection.zIndex = "11";
    }
    if (1 == Alloy.Globals.steps) {
        $.btnPickBasket.image = "/images/btnPickBasketFinished.png";
        $.btnPickFruits.image = "/images/btnPickFruitsActive.png";
        $.btnPickAccessories.image = "/images/btnPickAccessoriesLock.png";
        $.btnWriteMessage.image = "/images/btnWriteMessageLock.png";
        $.btnPickCashOut.image = "/images/btnCheckOutLock.png";
        $.basketBody.visible = false;
        $.fruitsBody.visible = true;
        $.accessoriesBody.visible = false;
        $.selectBasket.visible = false;
        $.fruitSelection.zIndex = "11";
    }
    if (2 == Alloy.Globals.steps) {
        $.btnPickBasket.image = "/images/btnPickBasketFinished.png";
        $.btnPickFruits.image = "/images/btnPickFruitsFinished.png";
        $.btnPickAccessories.image = "/images/btnPickAccessoriesActive.png";
        $.btnWriteMessage.image = "/images/btnWriteMessageLock.png";
        $.btnPickCashOut.image = "/images/btnCheckOutLock.png";
        $.basketBody.visible = true;
        $.fruitsBody.visible = false;
        $.accessoriesBody.visible = false;
        $.selectBasket.visible = false;
        $.basketSelection.zIndex = "11";
    }
    $.btnHome.addEventListener("click", function() {
        $.makeFruits.close();
    });
    $.btnPremade.addEventListener("click", function() {
        $.selectBasket.visible = true;
    });
    $.btnCustomize.addEventListener("click", function() {
        alert("Im pre-made");
    });
    $.btnPickBasket.addEventListener("click", function() {
        if (Alloy.Globals.steps > 0) {
            $.basketBody.visible = true;
            $.fruitsBody.visible = false;
            $.btnPickBasket.image = "/images/btnPickBasketActive.png";
            $.btnPickFruits.image = "/images/btnPickFruitsFinished.png";
        }
    });
    $.btnPickFruits.addEventListener("click", function() {
        if (1 == Alloy.Globals.steps) {
            $.basketBody.visible = false;
            $.fruitsBody.visible = true;
            $.btnPickBasket.image = "/images/btnPickBasketFinished.png";
            $.btnPickFruits.image = "/images/btnPickFruitsActive.png";
            $.basket2.image = Alloy.Globals.basketImage;
        } else alert("Please select basket size first.");
    });
    $.regularBasket1.addEventListener("click", function() {
        $.selectBasket.visible = false;
        $.btnPickFruits.image = "/images/btnPickFruitsFinished.png";
        Alloy.Globals.basketImage = "/images/regularBasketSmall.png";
        Alloy.Globals.capacity = 5;
        Alloy.Globals.steps = 1;
        $.basket.image = Alloy.Globals.basketImage;
    });
    $.regularBasket2.addEventListener("click", function() {
        $.selectBasket.visible = false;
        $.btnPickFruits.image = "/images/btnPickFruitsFinished.png";
        Alloy.Globals.basketImage = "/images/regularBasketMedium.png";
        Alloy.Globals.capacity = 15;
        Alloy.Globals.steps = 1;
        $.basket.image = Alloy.Globals.basketImage;
    });
    $.regularBasket3.addEventListener("click", function() {
        $.selectBasket.visible = false;
        $.btnPickFruits.image = "/images/btnPickFruitsFinished.png";
        Alloy.Globals.basketImage = "/images/regularBasketLarge.png";
        Alloy.Globals.capacity = 25;
        Alloy.Globals.steps = 1;
        $.basket.image = Alloy.Globals.basketImage;
    });
    $.apple.addEventListener("click", function() {
        Alloy.Globals.fruitCount <= Alloy.Globals.capacity ? Alloy.Globals.fruitCount += 1 : alert("Maximum of 5 items only.");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
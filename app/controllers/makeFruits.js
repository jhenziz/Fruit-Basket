
//Initialize
$.basket.image = Alloy.Globals.basketImage;


if(Alloy.Globals.steps == 0) {
	$.btnPickBasket.image = '/images/btnPickBasketActive.png';
	$.btnPickFruits.image = '/images/btnPickFruitsLock.png';
	$.btnPickAccessories.image = '/images/btnPickAccessoriesLock.png';
	$.btnWriteMessage.image = '/images/btnWriteMessageLock.png';
	$.btnPickCashOut.image = '/images/btnCheckOutLock.png';
	
	$.basketBody.visible = true;
	$.fruitsBody.visible = false;
	$.accessoriesBody.visible = false;
	$.selectBasket.visible = false;
	$.basketSelection.zIndex = "11";
}

if(Alloy.Globals.steps == 1) {
	$.btnPickBasket.image = '/images/btnPickBasketFinished.png';
	$.btnPickFruits.image = '/images/btnPickFruitsActive.png';
	$.btnPickAccessories.image = '/images/btnPickAccessoriesLock.png';
	$.btnWriteMessage.image = '/images/btnWriteMessageLock.png';
	$.btnPickCashOut.image = '/images/btnCheckOutLock.png';
	$.basketBody.visible = false;
	$.fruitsBody.visible = true;
	$.accessoriesBody.visible = false;
	$.selectBasket.visible = false;
	$.fruitSelection.zIndex = "11";
}

if(Alloy.Globals.steps == 2) {
	$.btnPickBasket.image = '/images/btnPickBasketFinished.png';
	$.btnPickFruits.image = '/images/btnPickFruitsFinished.png';
	$.btnPickAccessories.image = '/images/btnPickAccessoriesActive.png';
	$.btnWriteMessage.image = '/images/btnWriteMessageLock.png';
	$.btnPickCashOut.image = '/images/btnCheckOutLock.png';
	
	$.basketBody.visible = true;
	$.fruitsBody.visible = false;
	$.accessoriesBody.visible = false;
	$.selectBasket.visible = false;
	$.basketSelection.zIndex = "11";
}



$.btnHome.addEventListener('click', function(e){
	$.makeFruits.close();
});


//Open Selection for Basket Pre-made
$.btnPremade.addEventListener('click', function(e){
	$.selectBasket.visible = true;
	//$.basket.image = Alloy.Globals.basketImage;
});
$.btnCustomize.addEventListener('click', function(e){
	alert("Im pre-made");
});


//Stepts Button
$.btnPickBasket.addEventListener('click', function(){
	if(Alloy.Globals.steps > 0) {
		$.basketBody.visible= true;
		$.fruitsBody.visible = false;
		$.btnPickBasket.image = '/images/btnPickBasketActive.png';
		$.btnPickFruits.image = '/images/btnPickFruitsFinished.png';
	}
	
});

$.btnPickFruits.addEventListener('click', function(){
	if(Alloy.Globals.steps == 1) {
		$.basketBody.visible= false;
		$.fruitsBody.visible = true;
		$.btnPickBasket.image = '/images/btnPickBasketFinished.png';
		$.btnPickFruits.image = '/images/btnPickFruitsActive.png';
		$.basket2.image = Alloy.Globals.basketImage;
	} else {
		alert("Please select basket size first.");	
	}
});




//Select Pre-made Basket
$.regularBasket1.addEventListener('click', function(e){
	$.selectBasket.visible = false;
	//$.basketView.visible = true;
	$.btnPickFruits.image = '/images/btnPickFruitsFinished.png';
	
	//Set Global Variable
	Alloy.Globals.basketImage = '/images/regularBasketSmall.png';
	Alloy.Globals.capacity = 5;
	Alloy.Globals.steps = 1;
	
	$.basket.image = Alloy.Globals.basketImage;
});

$.regularBasket2.addEventListener('click', function(e){
	$.selectBasket.visible = false;
	//$.basketView.visible = true;
	$.btnPickFruits.image = '/images/btnPickFruitsFinished.png';
	
	
	//Set Global Variable
	Alloy.Globals.basketImage = '/images/regularBasketMedium.png';
	Alloy.Globals.capacity = 15;
	Alloy.Globals.steps = 1;
	
	$.basket.image = Alloy.Globals.basketImage;
});

$.regularBasket3.addEventListener('click', function(e){
	$.selectBasket.visible = false;
	$.btnPickFruits.image = '/images/btnPickFruitsFinished.png';
	
	
	//Set Global Variable
	Alloy.Globals.basketImage = '/images/regularBasketLarge.png';
	Alloy.Globals.capacity = 25;
	Alloy.Globals.steps = 1;
	
	$.basket.image = Alloy.Globals.basketImage;
});


$.apple.addEventListener('click', function(e){
	if(Alloy.Globals.fruitCount <= Alloy.Globals.capacity){
		Alloy.Globals.fruitCount += 1;
	}else{
		alert('Maximum of 5 items only.');
	}
	
});

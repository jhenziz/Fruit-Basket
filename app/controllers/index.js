$.btnFruitBasket.addEventListener('click', function(e){
	var pickFruitsPage = Alloy.createController('makeFruits');
	pickFruitsPage.getView().open();
});

$.index.open();

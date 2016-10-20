/*
 * The main init file.
 * No products wil be initialized until this event is fired
 * Note it is on load, resulting in an invomplete prroduct if a mage
 * is on non persistent loading.
 */

window.addEventListener("load", function() {
	//$(Config.DOM.Preview).empty();
	
	//create a new product based on the users config data
	_product = new Product(Config.Product[0]);
	//load the products
	_product.Load();
	
	/* EVENT LISTENERS */
	//these will create our nimation effect for the actual product builder based
	//on mouse movemements
	$(Config.DOM.Preview).on("mouseleave", function() {
		$(Config.DOM.Preview).animate({ scrollTop: 0 });
		$(Config.DOM.Preview).removeClass("active");
	});
	
	$(Config.DOM.Preview).on("mouseenter", function() {
		$(Config.DOM.Preview).addClass("active");
	});
});


/*
 * DO NOT EDIT
 * PROTOTYPE METHODS USED
 * FOR STRING AND DATA MANIPULATION
 */
String.prototype.Id = function() {
	return this.toLowerCase().split(' ').join('-');
}

//replica of the c# String.Format() method
String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) { 
	return typeof args[number] != 'undefined'
		? args[number]
		: match
		;
	});
};
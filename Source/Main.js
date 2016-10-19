window.addEventListener("load", function() {
	//$(Config.DOM.Preview).empty();
	
	_product = new Product(Config.Product[0]);
	_product.Load();
	
	$(Config.DOM.Preview).on("mouseleave", function() {
		$(Config.DOM.Preview).animate({ scrollTop: 0 });
		$(Config.DOM.Preview).removeClass("active");
	});
	
	$(Config.DOM.Preview).on("mouseenter", function() {
		$(Config.DOM.Preview).addClass("active");
	});
});

String.prototype.Id = function() {
	return this.toLowerCase().split(' ').join('-');
}

String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) { 
	return typeof args[number] != 'undefined'
		? args[number]
		: match
		;
	});
};
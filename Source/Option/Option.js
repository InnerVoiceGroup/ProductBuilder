function Option(data) {
	this.Construct = function(data) {
		//init the base class
		PreviewItem.call(this, data);
		
		this.value = data.Value;
		this.url = data.URL;
		
		this.listItem = $("<option />", {
			"text": this.value,
			"class": "product-builder-attribute-dropdown",
			"value": this.value
		});
	}

	//call the constructor object
	this.Construct(data);
}

Option.prototype = new PreviewItem();
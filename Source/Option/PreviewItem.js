function PreviewItem(data) {
	this.Construct = function(data) {
		this.img = $("<img />", {
			"src": data.URL,
			"class": "product-builder-preview-attribute-image"
		});
		
		Product.AddImage(this.img);
	}

	//call the constructor object
	if(data != null) this.Construct(data);
}
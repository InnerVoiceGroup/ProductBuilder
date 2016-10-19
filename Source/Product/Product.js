function Product(data) {
	this.Construct = function(data) {
		//save the product title
		this.title = data.Title || "New Product";
		
		this.style = $("<style />", {
			"class": "product-builder-style"
		});
		
		this.fullContainer = $("<div />", {
			"class": "full-options-label-container"
		});
		
		this.label = $("<h3 />", {
			"text": "Want even more control over your HuMn Wallet?"
		});
		
		this.yesButton = label = $("<input />", {
			"type": "button",
			"class": "yes-button",
			"value": "Customize!"
		});
		
		this.yesButton.on("click", function() {
			$(document.body).removeClass("hide-full-list");
		});
		
		this.fullContainer.append(this.label);
		this.fullContainer.append(this.yesButton);
		
		this.attributes = [];
		//create all the included attribute objects in our product
		for(var i=0; i<data.Attributes.length; i++) {
			var temp = new Attribute(data.Attributes[i]);
			this.attributes.push(temp);
			
			this.style[0].innerHTML += temp.style;
			this.style[0].innerHTML += temp.keyframeOn;
			this.style[0].innerHTML += temp.keyframeOff;
			
			$("body").append(this.style);
		}
		
		this.pallet = $("<div />", {
			"class": "color-pallet",
		});
		
		for(i=0; i<data.Presets.length; i++) {
			var preset = data.Presets[i];
			classString = "";
			for(j=0; j<preset.Attributes.length; j++) classString += " " + preset.Attributes[j].Value.split(" ").join("rettophtempplaceholder");
			tempColorBox = $("<div />", {
				"class": "color-pallet-option" + classString,
				"text": preset.Value,
				"style": "background: " + preset.Color
			});
			
			tempColorBox.on("click", function(event) {
				for(i=0; i<preset.Attributes.length; i++) {
					console.log(event.target.classList);
					_product.attributes[i].dropdown[0].value = event.target.classList[i + 1].split("rettophtempplaceholder").join(" ");
					$(_product.attributes[i].dropdown[0]).trigger('change');
				}
			});
			
			this.pallet.append(tempColorBox);
		}
	}
	
	/*
	 * This will load our product into the DOM object
	 * Call this function on page load.
	 */
	this.Load = function(readonly) {
		readonly = readonly || true;
		
		//load the title into our dom object
		$($(Config.DOM.Title)[0]).append($("<h1/>", {
			"text": this.title
		}));
		
		$(Config.DOM.Attributes).append(this.fullContainer);
		
		$(Config.DOM.Preview).addClass("loading");
		
		Product.LoadingAnimation = setInterval(function() {
			if($("#ProductBuilder-Loading-Animation").text().length < 10) {
				$("#ProductBuilder-Loading-Animation").text($("#ProductBuilder-Loading-Animation").text()+".");
			}
			else {
				$("#ProductBuilder-Loading-Animation").text("Loading");
			}
		}, 700);
		
		for(var i=0; i<this.attributes.length; i++) {
			$($(Config.DOM.Preview)[0]).append(this.attributes[i].container);			
			$($(Config.DOM.Attributes)[0]).append(this.attributes[i].attributeContainer);			
		}
		
		$(Config.DOM.Preview).append(this.pallet);
		
		$(document.body).addClass("hide-full-list");
	}
	
	//call the constructor object
	this.Construct(data);
}

//this will handle the loading image for our wallet builder-style
Product.ReadyPreviewImageCount = 0;
Product.TotalPreviewImageCount = 0;
Product.AddImage = function(img) {
	Product.TotalPreviewImageCount++;
	
	//add an event listener waiting for the image load
	img.on("load", Product.ReadyImage);
}

Product.ReadyImage = function() {
	Product.ReadyPreviewImageCount++;
	
	if(Product.TotalPreviewImageCount == Product.ReadyPreviewImageCount) setTimeout(function() {
		$(".loading").removeClass("loading");
		
		setTimeout(function() {
			$("#loading").remove()
		}, 500);
	}, 500);
}
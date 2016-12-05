/*
 * Our main product class
 * In should be initialized in Main.js
 * Requires: a complete config object
 */
function Product(data) {
	this.Construct = function(data) {
		//save the product title
		this.title = data.Title || "New Product";
		//create a new style tag for this specific producs
		this.style = $("<style />", {
			"class": "product-builder-style"
		});
		//create a container for our DOM elements
		this.fullContainer = $("<div />", {
			"class": "full-options-label-container"
		});
		//this represents the physical dom label next to our dropdown object
		this.label = $("<h3 />", {
			"text": "Want even more control over your HuMn Wallet?"
		});
		//this will allow us to hide all dropdown elements unless the user wants to customize more fully
		this.yesButton = label = $("<input />", {
			"type": "button",
			"class": "yes-button",
			"value": "Customize!"
		});
		
		/* Event Listeners */
		//create events for on our yes button click
		this.yesButton.on("click", function() {
			$(document.body).removeClass("hide-full-list");
		});
		
		this.fullContainer.append(this.label);
		this.fullContainer.append(this.yesButton);
		
		//this will contain all attrobutes contained within our product
		this.attributes = [];
		//create all the included attribute objects in our product
		for(var i=0; i<data.Attributes.length; i++) {
			//create a temp attribute based on the config object
			var temp = new Attribute(data.Attributes[i]);
			//push the attribute to our attribute list
			this.attributes.push(temp);
			//add the attribute styling to our products style tag
			this.style[0].innerHTML += temp.style;
			this.style[0].innerHTML += temp.keyframeOn;
			this.style[0].innerHTML += temp.keyframeOff;
			//add the style tag to our bodys DOM
			$("body").append(this.style);
		}
		
		//create a color pallet for our product
		//note this is only visible when customize has not been clicked
		this.pallet = $("<div />", {
			"class": "color-pallet",
		});
		
		//load in our product presents
		//itterate through all config presets
		for(i=0; i<data.Presets.length; i++) {
			//create a temp preset object
			var preset = data.Presets[i];
			classString = "";
			//itterate through all the preset attributes
			for(j=0; j<preset.Attributes.length; j++) classString += " " + preset.Attributes[j].Value.split(" ").join("rettophtempplaceholder") + ":" + preset.Attributes[j].sku;
			//create a color box based on our preset/attribute values
			tempColorBox = $("<div />", {
				"class": "color-pallet-option" + classString,
				"text": preset.Value,
				"style": "background: " + preset.Color
			});
			/* Event Listeners */
			tempColorBox.on("click", function(event) {
				//itterate through all our presets and add event listers to the dom objects
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
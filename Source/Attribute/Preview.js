/*
 *	This is the preview class for our shopping cart item.
 * It will handle event listeners and related data for rendering our
 * product
 */
function Preview(data) {
	this.baseKeyframe = "@keyframes {0} {\n	from {\n		-ms-transform: rotate({1}) translate({2}, {3});\n		-webkit-transform: rotate({1}) translate({2}, {3});\n		transform: rotate({1}) translate({2}, {3});\n	}\n    to {\n		-ms-transform: rotate({4}) translate({5}, {6}); \n		-webkit-transform: rotate({4}) translate({5}, {6}); \n		transform: rotate({4}) translate({5}, {6}); \n	}\n}\n";
	this.baseStyle = "\n/* STYLE INFO FOR: {0} #{1} */\n#{1}.product-builder-preview-attribute {	\n	animation: {1}-off {2} ease forwards;\n}\nbody:not(.hide-full-list) {0}.active #{1} {\n	animation: {1}-on {2} ease forwards;\n}\n";
	
	this.Construct = function(data) {
		this.container = $("<div />", {
			"id": data.Title.Id(),
			"class": "product-builder-preview-attribute"
		});
		
		this.left = $("<div />", {
			"class": "product-builder-preview-button left",
			"text": "<"
		});
		
		this.right = $("<div />", {
			"class": "product-builder-preview-button right",
			"text": ">"
		});
		
		this.container.append(this.left);
		this.container.append(this.right);
		
		this.left.on("click", this.OnLeft);
		this.right.on("click", this.OnRight);
		
		this.container.on("swipeleft", this.OnLeft);
		this.container.on("swiperight", this.OnRight);
		
		/*
		 * This code will define our styling for the attribute preview item
		 */
		this.style = this.baseStyle.format(Config.DOM.Preview, data.Title.Id(), "500ms");
		this.keyframeOn = this.baseKeyframe.format(data.Title.Id() + "-on", data.Position.Off.R, data.Position.Off.X, data.Position.Off.Y, data.Position.On.R, data.Position.On.X, data.Position.On.Y)
		this.keyframeOff = this.baseKeyframe.format(data.Title.Id() + "-off", data.Position.On.R, data.Position.On.X, data.Position.On.Y, data.Position.Off.R, data.Position.Off.X, data.Position.Off.Y)
	}
	
	this.OnLeft = function() {
		this.setIndex("--");
	}.bind(this);
	
	this.OnRight = function() {
		this.setIndex("++");
	}.bind(this);
	
	this.AddOptionPreview = function(option) {
			//add the option to our preview container
			this.container.append(option.img);
	}
	
	this.SetOptionActive = function(option) {
		//we will remove all other actives in thepreview list
		$("#" + data.Title.Id() + " .active").removeClass("active");
		
		option.img.addClass("active");
	}

	//call the constructor object
	if(data != null) this.Construct(data);
}
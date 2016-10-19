function Attribute(data) {	
	this.Construct = function(data) {
		//init the base class
		Preview.call(this, data);
		
		//save the title
		this.title = data.Title;
		
		//create a new dropdown element
		this.dropdown = $("<select />", {
			"class": "product-builder-attribute-dropdown",
			"name": "properties[{0}]".format(this.title),
			"id": this.title.Id() + "-dropdown"
		});
		
		this.label = $("<label />", {
				"for": this.title.Id() + "-dropdown",
				"text": this.title + ": "
		});
		
		//this will set the current index of our dropdown list
		this.index;
		
		//save the options
		this.options = [];
		//create all the included attribute objects in our product
		for(var i=0; i<data.Options.length; i++) {
			this.AddOption(data.Options[i]);
		}
		
		//add event listeners for our list
		this.dropdown.on("change", this.OnChange);
		
		//load the initial values for everything
		this.setIndex(0);
		
		//this will contain the container for our dropdown list.
		this.attributeContainer = $("<div />", {
			"class": "product-builder-attribute-container selector-wrapper",
			"id": this.title.Id() + "-container"
		});
		
		this.attributeContainer.append(this.label);
		this.attributeContainer.append(this.dropdown);
	}
	
	//this will add a new option to our dropdown. It will also add it to our dropdown list
	this.AddOption = function(optionData) {
		var temp = new Option(optionData); //creat a new temp object
		this.options.push(temp); //add it to the options list
		this.dropdown.append(temp.listItem); //add it to the dropdown list

		this.AddOptionPreview(temp);
	}
	
	this.OnChange = function(event) {
		//this will return the selected option object
		var option = this.GetOption($(this.dropdown)[0].value);
		
		this.SetOptionActive(option);
	}.bind(this);
	
	//this will allow us to input a value and will return the option object
	this.GetOption = function(value) {
		for(var i=0; i<this.options.length; i++) {
			if(this.options[i].value == value) return this.options[i];
		}
	}
	
	this.setIndex = function(id) {
		if(id == "--") {
			this.index--;
			if(this.index < 0) this.index = this.options.length-1;
		}
		else if(id == "++") {
			this.index++;
			if(this.index >= this.options.length) this.index = 0;
		}
		else {
			this.index = id;
		}
		
		this.dropdown[0].value = this.options[this.index].value;
		this.dropdown.trigger("change");
	}

	//call the constructor object
	this.Construct(data);
}

Attribute.prototype = new Preview();
if(typeof(Config) == "undefined") {
	Config = {
		"DOM": {
			"Title": "#product-title",
			"Preview": "#preview-container",
			"Attributes": "#attribute-container"
		},
		
		"Product": [
			{
				"Title": "My Wallet",
				"Attributes": [
					{
						"Title": "Front Plate Color",
						"Options": [
							{"Value": "Red", "URL": "Content/WalletBuilder/MAW-RD/MAW-RD.png"},
							{"Value": "Blue", "URL": "Content/WalletBuilder/MAW-RB/MAW-RB.png"},
							{"Value": "Grey", "URL": "Content/WalletBuilder/MAW-CG/MAW-CG.png"},
							{"Value": "Pink", "URL": "Content/WalletBuilder/MAW-NP/MAW-NP.png"},
							{"Value": "Orange", "URL": "Content/WalletBuilder/MAW-SO/MAW-SO.png"},
							{"Value": "Yellow", "URL": "Content/WalletBuilder/MAW-YL/MAW-YL.png"},
						],
						"Position": {
							"Off": {
								"X": "0px",
								"Y": "0px",
								"R": "0deg"
							},
							"On": {
								"X": "0px",
								"Y": "70%",
								"R": "0deg"							
							}
						}	
					},
					{
						"Title": "Back Plate Color",
						"Options": [
							{"Value": "Red", "URL": "Content/WalletBuilder/MAW-RD/MAW-RD-Back.png"},
							{"Value": "Blue", "URL": "Content/WalletBuilder/MAW-RB/MAW-RB-Back.png"},
							{"Value": "Grey", "URL": "Content/WalletBuilder/MAW-CG/MAW-CG-Back.png"},
							{"Value": "Pink", "URL": "Content/WalletBuilder/MAW-NP/MAW-NP-Back.png"},
							{"Value": "Orange", "URL": "Content/WalletBuilder/MAW-SO/MAW-SO-Back.png"},
							{"Value": "Yellow", "URL": "Content/WalletBuilder/MAW-YL/MAW-YL-Back.png"},
						],
						"Position": {
							"Off": {
								"X": "50px",
								"Y": "68px",
								"R": "20deg"
							},
							"On": {
								"X": "0px",
								"Y": "210%",
								"R": "0deg"							
							}
						}	
					},
					{
						"Title": "Strap Color",
						"Options": [
							{"Value": "Red", "URL": "Content/WalletBuilder/SS-2/SS2-RD.png"},
							{"Value": "Blue", "URL": "Content/WalletBuilder/SS-2/SS2-BL.png"},
							{"Value": "Black", "URL": "Content/WalletBuilder/SS-2/SS2-BK.png"},
							{"Value": "Green", "URL": "Content/WalletBuilder/SS-2/SS2-GR.png"},
						],
						"Position": {
							"Off": {
								"X": "0px",
								"Y": "0px",
								"R": "0deg"
							},
							"On": {
								"X": "0px",
								"Y": "0px",
								"R": "0deg"							
							}
						}	
					},
					{
						"Title": "Center Plate Color",
						"Options": [
							{"Value": "Red", "URL": "Content/WalletBuilder/MAW-RD/MAW-RD.png"},
							{"Value": "Blue", "URL": "Content/WalletBuilder/MAW-RB/MAW-RB.png"},
							{"Value": "Grey", "URL": "Content/WalletBuilder/MAW-CG/MAW-CG.png"},
							{"Value": "Pink", "URL": "Content/WalletBuilder/MAW-NP/MAW-NP.png"},
							{"Value": "Orange", "URL": "Content/WalletBuilder/MAW-SO/MAW-SO.png"},
							{"Value": "Yellow", "URL": "Content/WalletBuilder/MAW-YL/MAW-YL.png"},
						],
						"Position": {
							"Off": {
								"X": "18px",
								"Y": "23px",
								"R": "10deg"
							},
							"On": {
								"X": "0px",
								"Y": "140%",
								"R": "0deg"							
							}
						}	
					}
				]
			}
		]
	};
}

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
class Options {
	constructor(height, width, bg, fontSize, textAlign) {
	 	this.height = height;
	 	this.width = width;
	 	this.bg = bg; 
	 	this.fontSize = fontSize; 
	 	this.textAlign = textAlign;
	}		
	
	madeDiv() {
		let div = document.createElement('div');
		document.body.appendChild(div);
		let format = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		div.style.cssText = format;
		div.textContent = "I love dog!";
	}

}
const item = new Options(200, 300, 'yellow', 30, 'right'); 

item.madeDiv();


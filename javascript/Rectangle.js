function Rectangle(w,h){
	this.width = w;
	this.height = h;
	
	this.area = function(){
		return this.width * this.height;
	}
}
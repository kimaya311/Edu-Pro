class Soil {
    constructor(crop_name){
this.crop_name=crop_name;
this.black= createButton("Black Soil");
this.clayey= createButton("Clayey Soil");
this.sandy= createButton("Sandy Soil");
this.loamy= createButton("Loamy Soil");

 }
 hide(){
this.black.hide();
this.clayey.hide();
this.sandy.hide();
this.loamy.hide();
 }
display(){
    this.black.position(displayWidth/2,displayHeight/2-200);
    this.clayey.position(displayWidth/2,displayHeight/2+100);
    this.sandy.position(displayWidth/2,displayHeight/2+300);
    this.loamy.position(displayWidth/2,displayHeight/2+600);
this.black.mousePressed(()=>{
if(this.crop_name==="Cotton"){
    text("Good job! You know which soil is best for your plant.",displayWidth/2,20,textSize(24));
    this.black.hide();
    this.clayey.hide();
    this.sandy.hide();
    this.loamy.hide();
    gameState=1;
    
}else{
    text("Try Again...this soil doesn't suit your plant.",displayWidth/2,20,textSize(24));
}
})
this.clayey.mousePressed(()=>{
    if(this.crop_name==="Paddy"){
        text("Good job! You know which soil is best for your plant.",displayWidth/2,20,textSize(24));
            this.black.hide();
            this.clayey.hide();
            this.sandy.hide();
            this.loamy.hide();
        gameState=1;
    }else{
        text("Try Again...this soil doesn't suit your plant.",displayWidth/2,20,textSize(24));
    }
})

this.sandy.mousePressed(()=>{
    if(this.crop_name==="Maize"){
        text("Good job! You know which soil is best for your plant.",displayWidth/2,20,textSize(24));
        this.black.hide();
        this.clayey.hide();
        this.sandy.hide();
        this.loamy.hide();
        gameState=1;
    }else{
        text("Try Again...this soil doesn't suit your plant.",displayWidth/2,20,textSize(24));
    }
})

this.loamy.mousePressed(()=>{
    if(this.crop_name==="barley"|| this.crop_name==="Wheat"){
        text("Good job! You know which soil is best for your plant.",displayWidth/2,20,textSize(24));
        this.black.hide();
this.clayey.hide();
this.sandy.hide();
this.loamy.hide();
        gameState=1;
    }else{
        text("Try Again...this soil doesn't suit your plant.",displayWidth/2,0,textSize(24));
    }
})
}
};
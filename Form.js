class Form{
    constructor(){
this.input = createInput("Name");
this.button = createButton("PLAY");
this.title = createElement('h1');
this.statement = createElement("h2");
this.boy = createButton("BOY");
this.girl = createButton("GIRL");
boy = createSprite(displayWidth/2+220,displayHeight/2+130);
boy.addImage("farmboy",farmboy);
boy.scale= 0.2;
girl= createSprite(displayWidth/2-200,displayHeight/2+120);
girl.addImage("farmgirl'",farmgirl);
girl.scale= 0.45;
 }
 hide(){
  this.input.hide();
  this.button.hide();
  this.title.hide();
  this.statement.hide();
  this.boy.hide();
  this.girl.hide();
} 
display(){
  this.button.disabled=true
    this.input.position(displayWidth/2,displayHeight/2-200);
    this.button.position(displayWidth/2+200,displayHeight);
    this.title.html("EduFarm");
    this.title.position(displayWidth/2,0);
    this.statement.html("Choose your character");
    this.statement.position(displayWidth/2-100,displayHeight/2-100);
    this.boy.position(displayWidth/2+205,displayHeight/2+120);
    this.girl.position(displayWidth/2-220,displayHeight/2+120);

    this.girl.mousePressed(()=>{
      this.girl.hide();
      this.boy.hide();
      this.button.disabled=false;
      this.statement.hide();
      boy.destroy();
     girl.x=displayWidth/2-400;
    })

    this.boy.mousePressed(()=>{
      this.girl.hide();
      this.boy.hide();
      this.button.disabled=false
      this.statement.hide();
      girl.destroy();
      boy.x=displayWidth/2-400;
    })
    
   this.button.mousePressed(()=>{
      if(!this.button.disabled){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.statement.hide();
        this.boy.hide();
        this.girl.hide();
        name = this.input.value();
        var greeting=createElement('h2');
        var s1= createElement("h4");
        var s2= createElement("h4");
        var s3= createElement("h4");
        var s4= createElement("h4");
        greeting.html("Hello " +name+"!!");
        s1.html("* Rainy Season");
        s2.html("* From June to October");
        s3.html("* Winter Season");
        s4.html("* From November to April");
        greeting.position(displayWidth/2 - 70, displayHeight/4);
        s1.position(displayWidth/2+20, displayHeight/2+20);
        s2.position(displayWidth/2+20, displayHeight/2+80);
        s3.position(displayWidth/2+20, displayHeight/2+220);
        s4.position(displayWidth/2+20, displayHeight/2+280);
        var kharif=createButton("KHARIF SEASON");
         kharif.position(displayWidth/2,displayHeight/2);
         var rabi=createButton("RABI SEASON");
         rabi.position(displayWidth/2,displayHeight/2+200);

         kharif.mousePressed(()=>{
         this.button.hide();
         greeting.hide();
         rabi.hide();
         kharif.hide();
        s1.hide();
        s2.hide();
        s3.hide();
        s4.hide();
        var K= createElement("h2");
        K.html("CHOOSE THE CROP YOU WANNA GROW!!");
        K.position(displayWidth/2 - 70, displayHeight/4);
        var cotton =createButton("Cotton");
        var Paddy =createButton("Paddy");
        var Maize =createButton("Maize");
        cotton.position(displayWidth/2,displayHeight/2);
        Paddy.position(displayWidth/2,displayHeight/2+100);
        Maize.position(displayWidth/2,displayHeight/2+200);
       // image(Cotton,0,200,1,1);
       //console.log(Cotton);


cotton.mousePressed(()=>{
  var c1 =new Soil("Cotton");
  c1.display()
  cotton.hide();
  Maize.hide();
  Paddy.hide();
  K.hide();
 
})
Paddy.mousePressed(()=>{
  //form4 kharif
 var c2 = new Soil("paddy");
 c2.display();
 cotton.hide();
  Maize.hide();
  Paddy.hide();
  K.hide();

})
Maize.mousePressed(()=>{
  var c3 = new Soil("Maize");
  c3.display(); 
  cotton.hide();
  Maize.hide();
  Paddy.hide();
  K.hide();
})
        
         })//kharif

         rabi.mousePressed(()=>{
          this.button.hide();
          greeting.hide();
          rabi.hide();
          kharif.hide();
         s1.hide();
         s2.hide();
         s3.hide();
         s4.hide();
         var R= createElement("h2");
         R.html("CHOOSE THE CROP YOU WANNA GROW!!");
         R.position(displayWidth/2 - 70, displayHeight/4);
         var Oat=createButton("Oat");
         var Barley =createButton("Barley");
         var Wheat =createButton("Wheat");
         Oat.position(displayWidth/2,displayHeight/2);
         Barley.position(displayWidth/2,displayHeight/2+100);
         Wheat.position(displayWidth/2,displayHeight/2+200);

        Oat.mousePressed(()=>{
         var c4= new Soil("Oat");
         c4.display();
         Wheat.hide();
         Barley.hide();
         Oat.hide();
         R.hide();
        })
        Barley.mousePressed(()=>{
          //form4 rabi
          var c5= new Soil("Barley");
          c5.display();
          Wheat.hide();
          Barley.hide();
          Oat.hide();
          R.hide();
        })
        Wheat.mousePressed(()=>{
          //form4 rabi 
          var c6= new Soil("Wheat");   
          c6.display();
          Wheat.hide();
          Barley.hide();
          Oat.hide();
          R.hide();
        })
          })//rabi
        }
        else{
          console.log("Please select the character");
        }
      })//;
    drawSprites();
}
};

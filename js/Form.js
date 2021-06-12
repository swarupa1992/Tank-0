class Form {
  constructor() {
    
    this.input = createInput("Name ");
    this.button = createButton("Play");
    this.greeting = createElement("h2");
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    //this.tanks = createElement("h2");

    /*this.button1 = createButton("Select tank");
    this.tank1 = null;
    this.tank2 = null;*/


    //this.radio = createRadio();
            
       
  }

  hide(){
       //new
       this.greeting.hide();
       this.button.hide();
       this.input.hide();
       this.title.hide();
       //this.button1.hide();
       //this.radio.hide();
  }

  display(){
    
    this.title.html("Tank Game");
    this.title.position(displayWidth/2 - 50, 0);
    
   /* this.radio.option('tank1');
    this.radio.option('tank2'); 
    this.radio.style("width", "100px");
    this.radio.style('font-size',"20px");
      
    this.radio.position(100, 200);*/



    
    //var input = createInput("Name");
    //var button = createButton('Play');
    
    this.input.position(displayWidth/2-300,displayHeight/2-300);//130,160
    this.button.position(displayWidth/2-200, displayHeight/2-250);//250,200
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed( () => {
      this.input.hide();
      this.button.hide();

       fighter.name = this.input.value();
      
      fighterCount += 1;
      fighter.index = fighterCount;
      fighter.update();
      fighter.updateCount(fighterCount);
    
      this.greeting.html("Hello " + fighter.name );
      this.greeting.position(displayWidth/2-400, displayHeight/4-100);//130,160

         

    });




    this.reset.mousePressed(()=>{
      fighter.updateCount(0);
      battle.update(0);

      


      var fighterInfoRef = database.ref('fighters');

      fighterInfoRef.remove();

    });


    /*this.button1.position(displayWidth/2-200, displayHeight/2-350);//250,200

    this.button1.mousePressed( () => {

      this.tank1 = createSprite(displayWidth/2-200, displayHeight/4,40,40);
      this.tank2 = createSprite(displayWidth/2-100, displayHeight/4,40,40);
      drawSprites();
     
      this.radio.option('tank1');
      this.radio.option('tank2'); 
      this.radio.style("width", "100px");
      this.radio.style('font-size',"20px");
        
      this.radio.position(100, 200);
  

    var val = this.radio.value();
    var flag;
  console.log(val);

  if(val === 'tank1'){
       flag = 1;
      
  }else {
      flag = 2;
    
  }

  if(flag === 1){
      text("tank1",200,300);
      let c = color(255, 204, 0);
      fill(c);
      noStroke();
      ellipse(displayWidth/2-200, displayHeight/4,50,50);//25,25,80,80  

     //var tankI1 = 1;
      }
      else if(flag === 2){
    text("tank2",250,300);
    let c = color(255, 204, 0);
      fill(c);
      noStroke();
      ellipse(displayWidth/2-100, displayHeight/4,50,50);//25,25,80,80  

      }
    });*/
   
  }//display


/*
  select(){
    //this.tanks.html("selected tank1" );
      //this.tanks.position(displayWidth/2+100, displayHeight/4+100);


   


      this.tank1 = createSprite(displayWidth/2-200, displayHeight/4,40,40);
      this.tank2 = createSprite(displayWidth/2-100, displayHeight/4,40,40);
      drawSprites();
    //if(fighterCount  === 1){

    if(mousePressedOver(this.tank1)){
      console.log("tank1");
     
      this.tanks.html("selected tank1" );
      this.tanks.position(displayWidth/2+100, displayHeight/4+100);
    }

    if(mousePressedOver(this.tank2)){
      console.log("tank2");
      this.tanks.html("selected tank1" );
      this.tanks.position(200,10);
    }
  
      //text("selected tank1 ",displayWidth/2-50, displayHeight/4+200);
  }    
  
  */





}//Form class

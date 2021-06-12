//Game class
class Battle {
  constructor(){}
     
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){


      fighter = new Fighter();

      var fighterCountRef = await database.ref('fighterCount').once("value");
      if(fighterCountRef.exists()){

            fighterCount = fighterCountRef.val();
            fighter.getCount();
      }     
      form = new Form()
      form.display();
      //form.select();
    }
   text(mouseX + " " + mouseY,100,50);
    tank1 = createSprite(displayWidth-1200,displayHeight/2);
    solider1 = createSprite(displayWidth-1100,displayHeight/2,30,30);

    tank2 = createSprite(displayWidth-100,displayHeight/2);
    solider2 = createSprite(displayWidth-200,displayHeight/2,30,30);

    wall1 = createSprite(displayWidth-1000,displayHeight/2,20,displayHeight-200);
    wall2 = createSprite(displayWidth-300,displayHeight/2,20,displayHeight-200);

    
    

  }//start

play(){

  form.hide();
  //textSize(30);
  //text("Game Start", 120, 100)
  Fighter.getfighterInfo(); // calling fun. from fighter class - static func.

  if(allfighters !== undefined){

  
   var index = 0;
    
    var pos = 100
    for(var plr in allfighters){
      
      index = index +1;
      text(allfighters[plr].name + ": " , 120,pos);
      pos += 50;
    }
  }
  drawSprites();
  
}


firebullets(){

  console.log("in firebullets function");

  if(keyIsDown(UP_ARROW) && fighter.index !== null){

    if(frameCount % 5 === 0 ){
      bullets = createSprite(solider1.x  ,solider1.y,5,30);
      bullets.velocityX = 6;
      bullets.addImage("bulletsIm",bulletsImg);
      bullets.scale = 0.2;
      bullets.lifetime = 300;
     
      
      bulletsGroup.add(bullets);
      
    }  
    
   
  
    }//if
}





}//class


  



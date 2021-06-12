//player class
class Fighter {
  constructor(){

    this.index = null;
    this.tank_select = 0;
    this.name = null;
  }
//same old code
  getCount(){
    var fighterCountRef = database.ref('fighterCount');
    fighterCountRef.on("value",function(data){
      fighterCount = data.val();
    })
  }
////same old code
  updateCount(count){
    database.ref('/').update({
      fighterCount: count
    });
  }
//change code
  update(){
    var fighterIndex = "fighters/fighter" + this.index;
    database.ref(fighterIndex).set({
      name: this.name,
      tank_select : this.tank_select
    });
  }//update


  static getfighterInfo(){

       var fighterInfoRef = database.ref('fighters');
       fighterInfoRef.on("value",(data)=>{

               allfighters = data.val();
              // console.log(allfighters);
       });
  }//getfighterInfo
}



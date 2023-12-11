let n=0;
let movie ={
    name:"AJ",
    director:"Anshu Jaiswal",
    cast :{
        hero:["Aditya","Pulkit","Yash","alpha"] ,
        heroine:["Anjali","Aditi","Anshika","Darla"] ,
        vilan:["Hitler","KK","Sourabh"],
        comedian:["Sandeep","Akshat"],
    },
    DOR:"9-12-2023",
    Budget:100000,
    Kids:"false",
    sum:function(){
      n+=this.cast.hero.length
      n+=this.cast.heroine.length
      n+=this.cast.vilan.length
      n+=this.cast.comedian.length
      console.log("Total cast is ",n)
    },
    show:function(){
        console.log(this.name,this.director)
        console.log(this.cast.hero)
        console.log(this.cast.heroine)
        console.log(this.cast.comedian)
        console.log(this.Budget)
        console.log(this.DOR)
        console.log(this.Kids)
        

    }

}

movie.show()
movie.sum()
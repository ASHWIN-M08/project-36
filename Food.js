class Food {
    constructor(foodStock){
        this.image = loadImage("Milk.png");
        this.foodStock = foodStock;        
        this.lastFed = lastFed;   
    }
    
    getFoodStock(){      
        return foodStock;
    }
    updateFoodStock(x){
        
        if(x <= 0){
            x=0;
        }else{
            x=x-1;
        }
        foodStock = x;
          
    }
    deductFood(){
        if(foodStock > 0){
            foodStock = foodStock -1;
        } 
    }
    getFedtime(){
        return lastFed;
    }
    display(){ 
        var x=80,y=100; 
       
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){ 
            for(var i=0;i<this.foodStock;i++){
                 if(i%10==0){ 
                    x=80; 
                    y=y+50; 
                } 
                image(this.image,x,y,50,50); 
                x=x+30;
            }
        }
    }             
        




}
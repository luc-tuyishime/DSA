class Cookies {
    constructor(color){
        this.color = color;
    }
    
    getColor(){
        return this.color;
    }
    
    setColor(color){
        this.color = color;
    }
}

let newCookies =  new Cookies('Blue')
console.log('NEW COOKIE ==>>', newCookies.getColor());

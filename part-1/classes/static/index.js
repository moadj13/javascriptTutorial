// static = Keyword that defines properties or methods that belong 
// to a class itself rather than objects created from 
// that class (class owns anything static, not the object)

//EXAMPLE #1 
class MathUtil{
    static PI = 3.14159;
    mi = 4;

    static getDiameter(radius){
        return radius * 2;
    }

    static getcircumference(radius){
        return 2 * this.PI*radius

    }

    static getArea(radius){
        return this.PI*(Math.pow(radius, 2))  // or simply use
        //return this.PI*radius*radius
    }
}

console.log(MathUtil.PI)  //we don't need to create an object to use PI
console.log(MathUtil.mi) //where as we can't access 'mi' without creating object

// to use 'mi' we should create an object as follow
const MathUtil_1 = new MathUtil
console.log(MathUtil_1.mi)

console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getcircumference(10));
console.log(MathUtil.getArea(10));

//================ EXAMPLE #2 ================
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayhello(){
        console.log(`Hello, my name is ${this.username}`)
    }

    static online_user(){
        console.log(`There are ${User.userCount} online`)
    }
}

const user1 = new User("Spongebob");
const user2 = new User("patrick");
const user3 = new User("flipper");
const user4 = new User("fisher");

console.log(user1.username)
console.log(user3.username)
console.log(User.userCount)

user2.sayhello()
User.online_user()
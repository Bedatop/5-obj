/* 
let obj={
    userName: 'aaaaa',
    lastName: 'hhhhh',
    age: 3,
    hello: function() {
        console.log('так работает метод') //функция, которая является свойством объекта называется методом
    },
    profession: 'driver'
}


console.log(obj.userName);
console.log(obj['age']);
obj.age='2'
obj.work='eeeerr'
console.log(obj.work); //добавление свойства в объект
console.log(obj);
obj.hello()

delete obj.work //удаление свойства из объекта
console.log(obj);

const cat={
    catName:'Garfield', 
    favoriteFood: {
        nameFood: 'lazania',
        mainIngridient: 'makaroni'
    },
    meow: function() {
        console.log('meow');
    }
}

console.log(cat.favoriteFood.nameFood)

const book= {
    title: 'основы js'
};

const anotherBook= {
    title: 'основы js'
};

console.log(book===anotherBook);

const anotherBook2=book;

console.log(book===anotherBook2); */ //при сравнении двух объектов 
//джава сравнивает не значение свойств 
//этих объектов а адреса в памяти по которым эти объекты хранятся, 
//поэтому любое сравнение будет возвращать false, 
//даже если они будут 
//полностью одинаковые, сравнение будет выдавать true 
//только когда мы сравниваем переменные, указывающие на один и 
//тот же объект

/* const day={
    dayName1:'понедельник', 
    dayName2:'вторник', 
    dayName3:'среда', 
    dayName4:'четверг', 
    dayName5:'пятница', 
    dayName6:'суббота', 
    dayName7:'воскресенье', 
}
let dayName3=3;
console.log(day.dayName5);
console.log(day[dayName3]);

let user = {
    name: 'John',
    age: 30
}; 

console.log(`проверка на свойство ${'lastName' in user}`);

let key='name';

console.log(user[key])

let fruit = prompt('какой фрукт купить?');

let basket = {
    [fruit]:5
}

console.log(basket)

function makeUser(name, age) {
    return {
    name: name, 
    age: age //если название свойства совпадает
    //с функцией свойства то их можно опустить
 }
}
let user2 = makeUser('John', 30)
console.log(user2)
 */
//const city=
/* 
const days={
    day:3,
    dayName1:'понедельник', 
    dayName2:'вторник', 
    dayName3:'среда',
    dayName4:'четверг', 
    dayName5:'пятница', 
    dayName6:'суббота', 
    dayName7:'воскресенье', 
} */

/* for(let key in user) {
    console.log(user[key])
} */

const user= {
    age: 30,
    name: 'Jon',
    passport: {
        serial: 4412,
        number: 238650,
        date: '10.05.2000',
        studen: true
    }
}
console.log(user.passport.serial);
delete user.student;
user.work=true
if ('professional' in user) {
    
}
for(let key2 in user) {
    console.log(user[key2])
}
for(let key in user) {
    console.log(user[key])
}
user.passport.number=222222;

console.log(user);

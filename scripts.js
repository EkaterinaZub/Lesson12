
// Задача №2

let a1 = 5 % 3;
    a2 = 3 % 5; 
    a3 = 5 + "3";
    a4 = "5" - 3;
    a5 = 75 + "кг";
    a6 = 785*653;
    a7 = 100/25;
    a8 = 0*0;
    a9 = 0/2;
    a10 = 89/0;
    a11 = 98+2;
    a12 = 5-98;
    a13 = (8+56*4)/5;
    a14 = (9-12)*7/(5+2);
    a15 = +"123";
    a16 = 1||0;
    a17 = false||true;
    a18 = true>0;

console.log(a1);  
console.log(a2);  
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
console.log(a14);
console.log(a15);
console.log(a16);
console.log(a17);
console.log(a18);

console.log(a1, typeof a1); 
console.log(a1, typeof a2);
console.log(a1, typeof a3);
console.log(a1, typeof a4);
console.log(a1, typeof a5);
console.log(a1, typeof a6);
console.log(a1, typeof a7);
console.log(a1, typeof a8);
console.log(a1, typeof a9);
console.log(a1, typeof a10);
console.log(a1, typeof a11);
console.log(a1, typeof a12);
console.log(a1, typeof a13);
console.log(a1, typeof a14);
console.log(a1, typeof a15);
console.log(a1, typeof a16);
console.log(a1, typeof a17);
console.log(a1, typeof a18);

    // задача №4

    let h = 10;
        d = a7;
        r = a7 / 2;
        pi = 3.14;

  const VCilindra = pi*r**2*h;

console.log(VCilindra.toFixed(2)+ " м");

//  Задача №3

let width = 10;
    height = 23;

const SPryam =  width * height;
console.log(SPryam + " см")

// Задача №5
// Найдите площадь круга (SKruga) с радиусом 5см (r).

let radius = 5;
 const SKruga = pi*radius**2;

 console.log(SKruga + " см");

// Задача №6
//  Найдите площадь трапеции (STrap) с основаниями 5см (c) и 7см (b), и высотой 10см
// (h).

let c = 5;
    b = 7;
    h = 10;

const STrap = c + d / 2* h;
console.log(STrap + " см")  

// Задача №7
// Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
// кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
// содержаться в переменной Pereplata.

let S = 2000000;
    p = 0.1;
    years = 5;

    NoInterest = S/years;
    Year1Interest =  S*p;
    Year2Interest = (S-NoInterest)*p;
    Year3Interest = (S-2*NoInterest)*p;
    Year4Interest = (S-3*NoInterest)*p;
    Year5Interest = (S-4*NoInterest)*p;
const Pereplata = Year1Interest + Year2Interest + Year3Interest + Year4Interest + Year5Interest;


console.log(Pereplata)

// Задача №8
// Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
// a+2(x-b)=16;
// b(x+15)=a+6x;
// x+2x+ax+bx=23780.

let a = 8;
    b = 3;

    const example1 = (16+2*b-a)/2;
    const example2 = (15*b-a)/(6-b);
    const example3 = 23780/(1+2+a+b);
    
    console.log(example1);
    console.log(example2.toFixed(3));
    console.log(example3.toFixed(2));



//var
var num =10;

{
    num = 20;
}

console.log("var",num)

//let
let num1= 10

{
    num1 = 20
}
console.log("let",num1)

//const
const num2 = {"name":"raj"}

{
    num2.name="hello"
}
console.log("const",num2)


var num = 10

{ 
    var num = 20
    num = 30
    console.log(num)
}
console.log(num)

let num1 = 10
{
    let num1 = 20
    num1 = 30
    console.log(num1)
}
console.log(num1)

const num2 = 10
{
    const num2 = 20
    num2 = 30
    console.log(num2)
}
console.log(num2);


let num1 = 10;
let num2 = 20;

// // let sum = num1 + num2;
// // console.log(sum)

// let sub = num2-num1;
// console.log(sub)

let mul = num1*num2;
console.log(mul)

let div = num1/num2;
console.log(div)


let num1=5;
let num2= 10;
let sum = --num1 + ++num2 + num1-- + num2++
console.log(sum)
console.log(num1)
console.log(num2)


let checkIn = true;
let checkOut = true;

console.log(checkIn == checkOut);


let a=10;
let b=20;
let c=30;
let result = (a<b && a<c) ? "a" : (b<c)? "b":"c";
console.log(result);


function add()
{
    console.log("hello")
}
add();

add();
function add()
{
    console.log("hello")
}


function add(a)     //para
{
    console.log(a)
}
add(78);           //argument

function add(a,b)     //para
{
    console.log(a+b)
}
add(78,98);           //argument

function add(a,b)     //para
{
    console.log(a,b)
}
add(78,98);           //argument

function add(...a)     //para
{
    console.log(a)
}
add(78,98,70);           //argument

function add(...a)     //para
{
    console.log(a[0])
}
add(78,98,70);           //argument

function add(...a)     //para
{
    console.log(a[2])
}
add(78,98,70);           //argument


function add(...a){
    console.log(a[1]);
}
add("10","20",{"key":"val"})


function add(a){
    console.log(a)
    return a;
}
const result=add("hello");
console.log(result);

function add(a){
    console.log(a)
}
const result=add("hello");
console.log(result);


function add(a){
    console.log(a)
    return a+a;
}
const result=add("hello");
console.log(result);


function add(a){
    console.log(a)
    return a+a;
}
const result=add("4");
console.log(result);


function add(a){
    console.log(a)
    return a*a;
}
const result=add("4");
console.log(result);


const result= function(a,b,c,d,e)
{
    return d;
}
console.log(result(34,56,67,345,56,));


(()=>{
    console.log("hello");
})()


let str = "helloo";
console.log(str)


let str = "helloo";
console.log(str[3]);


let str = "helloo";
console.log(str.slice(0,6));
console.log(str.length);

let age = 10;
console.log(age);

let name1 = 'it"s hello';
console.log(name1);

let isCheck = true
console.log(isCheck);

let person = {"key":10}
console.log(person)

let person = {"key":10}
console.log(person["key"])


let person = {"key":10,"str":"hello","bool":true,"fun":function(){
    return"obj"
}}
console.log(person["key"])
console.log(person["str"]);
console.log(person["bool"])
console.log(person["fun"]);

let arr = ["hello",10]
console.log(arr[0],arr[1]);

function add(num){
    console.log(num);
}
add(100)

function add(num){
    console.log("my pocket money is"+num);
}
add(100)

function add(num){
    console.log("my pocket money is" +num+"in current time");
}
add(100)

function add(num){
    console.log("my pocket money is" +num+num+"in current time");
}
add(100)

function add(num){
    console.log("my pocket money is" +(num+num)+"in current time");
console.log(`my pocket money is ${num+num} in current time`);
}
add(100)

function add(){
     return "hello";
}
const result = add();
console.log(result);/

let age = 18
let age =17
if(age>18){
if (age<18){
console.log("vote");
}
else if(age == 18){
    console.log("equals to 18");
}
else{
    console.log("not vote");
}


let str ="wesday";

switch(str){
    case "monday":
        console.log("today is monday");
        break;
    case "tuesday":
            console.log("today is tuesday");
            break;
    case "wednesday":
                console.log("today is wednesday");
    default:
                 console.log("this is invalid");
}


loop
let i=0
while(i<5){
    console.log("hello");
    ++i;
}

let i=5
while(i>0){
    console.log("hello");
    --i;
}

table of 2
let i = 2;
while(i<=20){
    console.log(i++)
     i++;
}


let i =1;
do{
console.log(2*i);
i++
}while(i<=10)


let i=0;
for(i=0;i<5;i++){
    console.log("hello");
}


let i=0;
for(i=0;i<=10;i++){
    console.log(`2*${i}=${i*2}`)
}


let i =0
let table=3
for(i=1 ; i<=10 ;i++){
    console.log(`${table}x${i}=${table*i}`)
}


let date = new Date();
console.log(date.getFullYear());

let date = new Date();
console.log(date.getDate());

let date = new Date();
console.log(date.getDay());

let date = new Date();
console.log(date.getMonth());

let date = new Date();
console.log(date.getTime());

let date = new Date();
console.log(date.getHours());
//create a new inbuild object array using new and invoking the constructor.
let arr_obj1 = new Array(1,4,3,2);
let arr_obj2 = new Array(6,7,8)
//Arraj concatenate example: Creates a new Array object, existing Array objected not changed.
arr_obj_concat_obj1_obj2 = arr_obj1.concat(arr_obj2)
console.debug("Array concatenation Example")
console.debug(arr_obj_concat_obj1_obj2)
let arr_obj3 = new Array(1,"Prasad") //This was to check if a Javascript Array can have a mix of numeric and string values -- It can
arr_obj_concat_obj1_obj2_obj3 = arr_obj_concat_obj1_obj2.concat(arr_obj3)
console.debug(arr_obj_concat_obj1_obj2_obj3)
//Create a new Date object, using the Date() Constructor
let date_obj=new Date()
console.debug("Create a new Date object - It shows the current time")
console.debug(date_obj)
//Create an Empty Object
console.debug("Create a new Empty Object")
let emp_obj = new Object()
console.debug(emp_obj)
//Create a Map
console.debug("Create a Map")
let map_obj = new Map()
console.debug(map_obj)
map_obj["name"]="Prasad"
console.debug("value of the name attribute in Map")
console.debug(map_obj["name"])
//PROTOTYPE
obj_proto = {a:1,b:2}
obj_proto_1 = Object.create(obj_proto)
obj_proto_1.a=5
console.debug("obj_proto_1 is modified but obj_proto is not")
console.debug(obj_proto.a+obj_proto.b)
console.debug(obj_proto_1.a+obj_proto_1.b)
console.debug("Querying and Setting Properties")
obj_book = {"name":"The Universe", "author": {"fname": "Prasad", "lname": "Menon"}}
author_details = obj_book.author
author_name = author_details["fname"] + " " + author_details.lname
console.debug(author_name)
console.debug("Create a new property - Author age")
obj_book.author.age=44
console.debug(obj_book)
//Stock Portfolio
console.debug("Portfolio Example")
let portfolio = {stock : {}}
portfolio.stock["IBM"]=300
portfolio.stock["Tsla"]=700
portfolio.stock["Tata"]=34
let total = 0
portfolio.stock.ENRON=12
console.debug(portfolio)
for (let stock in portfolio.stock){
  total += portfolio.stock[stock]
}
console.debug("TOTAL : " , total )
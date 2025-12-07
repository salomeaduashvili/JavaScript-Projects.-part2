const prompt = require("prompt-sync")();

/*
პროექტი 10 - ქულების გამომთვლელი,
შექმენით მარტივი JavaScript პროგრამა, რომელიც ითვლის შეფასებას მოსწავლის ქულების მიხედვით.
შეფასების სქემა შემდეგნაირია:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
პროგრამამ უნდა მოსთხოვოს მომხმარებელს შეიყვანოს რიცხვითი ქულა(0-დან 100-ის ჩათვლით ნებისმიერი რიცხვი).,
გამოიყენეთ პირობითი ოპერატორები შეყვანილი რიცხვის შეფასების დასადგენად.,
ეკრანზე გამოიტანეთ როგორც შეყვანილი რიცხვი ასევე შესაბამისი ასო.,

Project 10 - Grade Calculator,
Create a simple JavaScript program that calculates a grade based on a student's grades.
The grading scale is as follows:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
The program should prompt the user to enter a numerical grade (any number between 0 and 100).,
Use conditional operators to determine the grade for the entered number.,
Display both the entered number and the corresponding letter on the screen.,

მაგალითად/For example:

> Enter the student's score: 78
> Student's Score: 78
> Grade: C

*/

function grade() {
  let userGrade;
  do {
    userGrade = Number(prompt("Enter your grade: "));
  } while (userGrade < 0 || userGrade > 100 || isNaN(userGrade));
  if (userGrade >= 90 && userGrade <= 100) {
    console.log(`A: ${userGrade}`);
  } else if (userGrade >= 80) {
    console.log(`B: ${userGrade}`);
  } else if (userGrade >= 70) {
    console.log(`C: ${userGrade}`);
  } else if (userGrade >= 60) {
    console.log(`D: ${userGrade}`);
  } else {
    console.log(`F: ${userGrade}`);
  }
}

grade();

/*
პროექტი 11 - Simple Math - მარტივი მათემატიკა,
თქვენ ხშირად დაწერთ პროგრამებს, რომლებიც ეხება რიცხვებს. ხშირად, პროგრამაში მიღებული 
მონაცემები (input )რიცხვით მონაცემების ტიპებად უნდა გარდაქმნათ. დაწერეთ პროგრამა, 
რომელიც მოგთხოვთ ორ რიცხვს. ამობეჭდეთ ამ რიცხვების ჯამი, სხვაობა, ნამრავლი და განაყოფი.

Project 11 - Simple Math - Simple Math,
You will often write programs that deal with numbers. Often, you will need to convert the 
input data received into a numeric data type. Write a program that asks for two numbers.
Print the sum, difference, product, and divisor of these numbers.

მაგალითად/For example:

> What is the first number? 10
> What is the second number? 5
> 10 + 5 = 15
> 10 - 5 = 5
> 10 * 5 = 50
> 10 / 5 = 2
*/

let x = Number(prompt("Enter the first number: "));
let y = Number(prompt("Enter the second number: "));

function operations(x, y) {
  if (isNaN(x) || isNaN(y) || y === 0) {
    console.log("Wrong Input");
    return;
  } else {
    console.log(
      `${x} + ${y} = ${x + y}, ${x} - ${y} = ${x - y}, ${x} / ${y} = ${
        x / y
      }, ${x} * ${y} = ${x * y}`
    );
  }
}
operations(x, y);

/*
პროექტი 12 - Einstein - აინშტაინი,
შეიძლება გსმენიათ, რომ E = mc2, სადაც E წარმოადგენს ენერგიას (იზომება ჯოულებში), M წარმოადგენს მასას (იზომება კილოგრამებში), 
ხოლო C - სინათლის სიჩქარეს (დაახლოებით 300000000 მეტრი წამში). ეს ალბერტ აინშტაინის ფორმულაა, რაც არსებითად ნიშნავს, 
რომ მასა და ენერგია ეკვივალენტურია.
შექმენით პროგრამა, რომელიც მომხმარებლისგან მასის კილოგრამებში შეყვანას მოითხოვს და დაბეჭდავს ამ მასის ეკვივალენტურ რაოდენობას ჯოულში. 
ეს ორივე რიცხვი უნდა იყოს მთელი (integer).

Project 12 - Einstein - Einstein,
You may have heard that E = mc2, where E is energy (measured in joules), M is mass (measured in kilograms),
and C is the speed of light (approximately 300,000,000 meters per second). This is Albert Einstein's formula, which essentially means
that mass and energy are equivalent.
Create a program that asks the user for a mass in kilograms and prints the equivalent amount of that mass in joules.
Both numbers must be integers.

მაგალითად/For example:

> M: 50
> E: 4500000000000000000
*/

let m = Number(prompt("Enter the mass: "));

function energy(m) {
  if (isNaN(m)) {
    return "Wrong Input";
  }
  let c = 300000000;
  let E = m * (c * c);
  return E;
}
console.log(`M: ${m} E:`, energy(m));

/*
პროექტი 13 - Tip Calculator - "ჩაის" კალკულატორი,
ჩვეულებრივ, რესტორანში სადილის შემდეგ სერვისისთვის "ჩაის" ტოვებენ, როგორც წესი, 
შეერთებულ შტატებში ეს თანხა კვების ღირებულების 15%-ს ან მეტს აღწევს. შექმენით პროგრამა, 
რომელიც მოითხოვს თანხისა და პროცენტის შეყვანას და გეტყვით, რამდენი დოლარი უნდა დატოვოთ "ჩაის" სახით.
ასევე, პროგრამაში უნდა გქონდეთ ორი ფუნქცია: 
ერთი input-ად მიიღებს სტრიქონს (დაფორმატებულს, როგორც $##.##), თავში შლის $ ნიშანს და 
აბრუნებს თანხას ათწილადის სახით. მაგალითად, 50.00 დოლარის შემთხვევაში მან უნდა დააბრუნოს 50.0

მეორე ფუნქცია input-ად მიიღებს ასევე სტრიქონს (დაფორმატებულს, როგორც ##%), ბოლოში 
შლის % ნიშანს და აბრუნებს პროცენტს ათწილადის სახით. მაგალითად, თუ input 15%-ია, ფუქცია 0.15-ს დააბრუნებს.

Project 13 - Tip Calculator - Tip Calculator
It is common to leave a tip for service at a restaurant after a meal,
and in the United States, this amount is usually 15% or more of the cost of the meal. Create a program
that asks for an amount and a percentage and tells you how many dollars you should leave as a tip.
You should also have two functions in your program:
One that takes a string as input (formatted as $##.##), strips the $ sign at the beginning, and
returns the amount as a decimal. For example, for $50.00, it should return 50.0

The second function also takes a string as input (formatted as ##%), strips the % sign at 
the end, and returns the percentage as a decimal. For example, if the input is 15%, the function will return 0.15.

მაგალითად/For example:

> How much was the meal? $50.00
> What percentage would you like to tip? 15%
> Leave $7.50

*/

function tipAndTotal() {
  let mealPrice = prompt("How much was the meal? ");
  let mealPercentage = prompt("How much would you like to tip? ");

  function price(str) {
    return Number(str.replaceAll("$", ""));
  }

  function percentage(str) {
    return Number(str.replaceAll("%", "")) / 100;
  }

  let tip = price(mealPrice) * percentage(mealPercentage);
  let total = price(mealPrice) + tip;

  if (isNaN(tip) || isNaN(total)) {
    console.log("Wrong Input");
  } else {
    console.log(`Tip is ${tip.toFixed(2)}$ and total is ${total.toFixed(2)}$`);
  }
}

tipAndTotal();

/*
პროექტი 14 - Retirement Calculator - საპენსიო კალკულატორი,
თქვენმა კომპიუტერმა იცის, რომელია მიმდინარე წელი, ამიტომ ეს ინფორმაცია თქვენს პროგრამებში 
შეგიძლიათ, ჩართოთ. უბრალოდ, უნდა გაარკვიოთ, როგორ შეუძლია თქვენს პროგრამირების ენას ამ მონაცემის თქვენთვის მოწოდება.

შექმენით პროგრამა, რომელიც მოითხოვს თქვენი ამჟამინდელი ასაკისა და იმ ასაკის შეყვანას, როცა 
გსურთ, პენსიაზე გახვიდეთ; შემდეგ კი განსაზღვრავს, რამდენი წელი დაგრჩათ პენსიაზე გასვლამდე და კონკრეტულად რომელ წელს შეგიძლიათ ამის გაკეთება.

Project 14 - Retirement Calculator - Your computer knows what year it is, so you can incorporate this 
information into your programs. You just need to figure out how your programming language can provide this information for you. 
Create a program that asks you to enter your current age and the age at which you want to retire; 
it then determines how many years you have left until you can retire and the specific year in which you can do so.

მაგალითად/For example:

> What is your current age? 25
> At what age would you like to retire? 65
> You have 40 years left until you can retire.
> It's 2015, so you can retire in 2055.

*/

function retire() {
  const currentYear = new Date().getFullYear();
  let age = Number(prompt("How old are you? "));
  let retireAge = Number(prompt("At what age would you like to retire "));
  let retireYear = retireAge - age;

  if (isNaN(retireAge) || isNaN(retireYear)) {
    console.log("Wrong Input");
  } else {
    console.log(`You have ${retireYear} years left to retire.`);
    console.log(
      `It's ${currentYear}, so you can retire in ${currentYear + retireYear}.`
    );
  }
}

retire();

/*
პროექტი 15 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი,
გლობალურ გარემოში მუშაობისას, თქვენ მოგიწევთ ინფორმაციის წარდგენა როგორც მეტრულ, ასევე იმპერიულ საზომ ერთეულებში.

შექმენით პროგრამა, რომელიც ითვლის ოთახის ფართობს. შესთავაზეთ მომხმარებელს ოთახის 
სიგრძე და სიგანე ფუტებში. შემდეგ აჩვენეთ ტერიტორია როგორც კვადრატულ ფუტში, ასევე - კვადრატულ მეტრში.
კონვერტაციის ფორმულაა: m2 = f2 × 0.09290304

Project 15 - Area of ​​a Rectangular Room - Area of ​​a Rectangular Room,
When working in a global environment, you will need to provide information in both metric and imperial units of measurement.

Create a program that calculates the area of ​​a room. Ask the user for the length and width of the room in feet. 
Then display the area in both square feet and square meters.
The conversion formula is: m2 = f2 × 0.09290304

მაგალითად/For example:

> What is the length of the room in feet? 15
> What is the width of the room in feet? 20
> You entered dimensions of 15 feet by 20 feet.
> The area is
> 300 square feet
> 27.871 square meters

*/

function area() {
  let length = Number(prompt("Enter the length of the room in feet: "));
  let width = Number(prompt("Enter the width of the room in feet: "));
  if (isNaN(length) || isNaN(width)) {
    console.log("Wrong Input");
    return;
  }

  console.log(`You entered dimensions of ${length} feet by ${width} feet.`);

  let areaFeet = length * width;
  let areaMeters = areaFeet * 0.09290304;
  console.log(`${areaFeet} square feet.`);
  console.log(`${areaMeters.toFixed(3)} square meters.`);
}

area();

/*
პროექტი 16 - Pizza Party - პიცის წვეულება,
გაყოფა ყოველთვის ზუსტი არ არის და ზოგჯერ ისეთი პროგრამები უნდა დავწეროთ, რომლებშიც ათწილადების 
ნაცვლად ნაშთი მთელ რიცხვში უნდა გადავაქციოთ. დაწერეთ პროგრამა პიცების თანაბრად გასაყოფად. 
პროგრამამ input-ებად უნდა მოგთხოვოთ ხალხის რაოდენობა, პიცების რაოდენობა და თითო პიცაზე - ნაჭრების რაოდენობა. 
ნაჭრების რაოდენობა თანაბარი უნდა იყოს. აჩვენეთ პიცის ნაჭრების რაოდენობა, რომელიც თითოეულმა ადამიანმა უნდა შეჭამოს. 
თუ ნარჩენები რჩება, დაბეჭდეთ დარჩენილი ნაჭრების რაოდენობა.

Project 16 - Pizza Party - Pizza Party,
Division is not always exact, and sometimes we need to write programs that convert the remainder to a whole number instead of a decimal.
Write a program to divide pizzas equally.
The program should ask for the number of people, the number of pizzas, and the number of slices per pizza as inputs.
The number of slices should be equal. Display the number of slices of pizza that each person should eat.
If there are any leftovers, print the number of slices left.

მაგალითად/For example:

> How many people? 8
> How many pizzas do you have? 2
> How many slices should one pizza have?
> 8 people with 2 pizzas
> Each person gets 2 pieces of pizza.
> There are 0 leftover pieces.

*/

function pizzaPieces() {
  let guestAmount = Number(prompt("Enter the amount of guests: "));
  let pizzaAmount = Number(prompt("Enter the amount of pizza: "));
  let piecesOfPizza = Number(prompt("Enter the amount of pizza pieces: "));
  if (isNaN(guestAmount) || isNaN(pizzaAmount) || isNaN(piecesOfPizza)) {
    console.log("Wrong Input");
    return;
  }

  console.log(`${guestAmount} people with ${pizzaAmount} pizzas.`);

  let pieceAmount = pizzaAmount * piecesOfPizza;
  let forEach = Math.floor(pieceAmount / guestAmount);
  let leftover = pieceAmount % guestAmount;

  let unit = forEach > 1 ? "pieces" : "piece";
  let leftoverUnit = leftover > 1 ? "pieces" : "piece";

  if (pieceAmount < guestAmount) {
    console.log("There aren't enough pieces of pizza.");
  } else {
    console.log(`Each person gets ${forEach} ${unit} of pizza.`);
    console.log(`There are ${leftover} leftover ${leftoverUnit}.`);
  }
}

pizzaPieces();

/*
პროექტი 17 - Grocery List - სასურსათო სია,
დავუშვათ, რომ თქვენ სურსათის ყიდვამდე ყოველთვის ადგენთ საჭირო ნივთების სიას.

დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს, შეიყვანოს თითო ნივთი ახალ სტრიქონზე, 
მანამ, სანამ მომხმარებელი არ დააჭერს "-"-ს. შემდეგ გამოიტანეთ მომხმარებლის სასურსათო 
სია - დიდი ასოებით, დალაგებული ანბანურად ერთეულის მიხედვით, თითოეულს კი წინ უნდა უძღვოდეს რიცხვი, 
თუ რამდენჯერ ჩაწერა მომხმარებელმა ეს ნივთი. ნივთების გამრავლება საჭირო არ არის. input-ების  შემთხვევაში, 
მნიშვნელობა არ აქვს ასოების რეგისტრს.

Project 17 - Grocery List - Grocery List,
Let's assume that you always make a list of the items you need before you go grocery shopping.

Write a program that prompts the user to enter one item on a new line,
until the user presses "-". Then output the user's grocery list - in uppercase letters, sorted alphabetically by item, each preceded by a number
representing how many times the user entered that item. There is no need to multiply items. In the case of inputs,
case is not important.

მაგალითად/For example:

< apple                                                                           
< banana                                                                          
< banana                                                                          
< ice cream                                                                       
                                                                                
< 1 APPLE                                                                         
< 2 BANANA                                                                        
< 1 ICE CREAM  

< lettuce                                                                         
< tomato                                                                          
< tomato                                                                          
< carrot                                                                          
< tomato                                                                          
                                                                                
< 1 CARROT                                                                        
< 1 LETTUCE                                                                       
< 3 TOMATO 

*/

function list() {
  let item;
  let arr = [];

  do {
    item = prompt("Enter your products until you hit '-' :");
    if (item !== "-" && item !== "") {
      item = item.toUpperCase();
      arr.push(item);
    }
  } while (item !== "-");

  arr = arr.sort();

  let count = {};
  for (let elements of arr) {
    count[elements] = (count[elements] || 0) + 1;
  }

  for (let product in count) {
    console.log(`${count[product]}: ${product}`);
  }
}

list();

/*
პროექტი 18 - Adieu, adieu - მშვიდობით, მშვიდობით,
The Sound of Music-ში არის სიმღერა, რომელიც ძირითადად ინგლისურადაა შესრულებული, 
So Long, Farewell - ამ ტექსტით, სადაც "adieu" ფრანგულად ნიშნავს "მშვიდობით":
Adieu, adieu, to yieu and yieu and yieu
რა თქმა უნდა, ტექსტი გრამატიკულად სწორი არ არის, რადგან ის ჩვეულებრივ დაიწერება მძიმეებით, 
როგორც: არც "yieu"-ა სიტყვა - ის უბრალოდ, "you"-სთან ირითმება!
შექმენით პროგრამა, რომელიც სთხოვს მომხმარებელს სახელებს, თითოს თითო ხაზზე, 
სანამ მომხმარებელი არ დაწერს ტირეს(-). დაუშვით, რომ მომხმარებელი ჩაწერს მინიმუმ ერთ სახელს.
შემდეგ "დაემშვიდობეთ" ამ სახელებს, გამოჰყავით ორი სახელი ერთი, ხოლო სამი სახელი - ორი მძიმით და 
ერთი "და"' კავშირით, როგორც ქვემოთაა მითითებული:

Project 18 - Adieu, adieu - Goodbye, goodbye,
There is a song in The Sound of Music, mostly sung in English,
So Long, Farewell - with these lyrics, where "adieu" is French for "goodbye":
Adieu, adieu, to yieu and yieu and yieu
Of course, the lyrics are not grammatically correct, as they are usually written with commas,
as in: "yieu" is not a word either - it just rhymes with "you"!
Create a program that asks the user for names, one per line,
until the user types a hyphen (-). Assume that the user types at least one name.
Then "say goodbye" to these names, separating two names into one, and three names into two with commas and
one "and" as shown below:

Adieu, adieu, to Liesl
Adieu, adieu, to Liesl and Friedrich
Adieu, adieu, to Liesl, Friedrich, and Louisa
Adieu, adieu, to Liesl, Friedrich, Louisa, and Kurt
Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, and Brigitta
Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, Brigitta, and Marta
Adieu, adieu, to Liesl, Friedrich, Louisa, Kurt, Brigitta, Marta, and Gretl 
*/

function songOfNames() {
  let arrOfnames = [];
  let name;
  do {
    name = prompt("Say goodbye to few names before you press - : ");
    if (name !== "-" && name !== "") {
      arrOfnames.push(name);
    }
  } while (name !== "-");

  let str = "Adieu, adieu, to ";
  if (arrOfnames.length === 0) {
    return str + "Unknown";
  }

  for (let i = 0; i < arrOfnames.length; i++) {
    if (i === 0) {
      str += arrOfnames[i];
    } else if (i === arrOfnames.length - 1) {
      str += ", and " + arrOfnames[i];
    } else {
      str += ", " + arrOfnames[i];
    }
  }
  return str;
}

console.log(songOfNames());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// 1. İstifadəçidən adını soruşun və cavab olaraq ona "Salam, [adı]!" çap edin.
//*
// let name = prompt("Enter your name:");
// console.log("Salam, " + name + "!");

// 2. İstifadəçidən doğum ilini soruşun, onun yaşını hesablayın və nəticəni çap edin. Cari il
// kodda sabit olaraq qeyd edin.

//*
// let bithDayYear = prompt("Enter your BirhtDayYear:");
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let age = currentYear - bithDayYear;
// console.log("Your Age -> " + age);

// 3. İstifadəçidən kvadratın bir tərəfinin uzunluğunu soruşun və bu kvadratın perimetrini çap
// edin.

//*
// let len = prompt("Enter the lenght:");
// alert(len * 4);

// 4. İstifadəçidən bir dairənin radiusunu soruşun və bu dairənin sahəsini çap edin.

//*
// let radius = prompt("Enter the Radius:");
// const S = radius * radius * 3.14;
// alert(S);

// 5. İstifadəçidən iki şəhər arasındakı məsafəni kilometr cinsində və hansısa saatda çatmaq
// istədiyini soruşun. Vaxtında çatmaq üçün lazım olan sürəti hesablayın.

// let range1 = prompt("Enter rthe Range1:");
// let range2 = prompt("Enter teh range2:");
// let S = range2 - range1;
// let T = prompt("Enter the zaman:");
// const V = S / T;
// alert(V + " suret qeder getmelisen.");

// 6. Valyuta çevirici tətbiq edin. İstifadəçi dollarları daxil edir, proqram onları avrolara çevirir.
// Valyuta məzənnəsini bir sabitdə saxlayın.

//*
// let dollar = prompt("Enter the dollar:");
// const kursavro = 1.9;

// const kurs = 1.7;
// let man = dollar / kurs;
// let avro = man * kursavro;

// alert(avro);

// 7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki
// faylların neçəsinin flash sürücünə sığacağını hesablayır.

//*
// let gb = prompt("Ente the GB:");
// let mb = gb*1000;

// const finish = mb / 820;
// alert(finish);

// 8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram
// istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir.

//*
// let cuzdan_Pul = prompt("Cuzdanindaki pulu daxil edin:"); //60
// let chokolate = prompt("Ente the chocolate"); //3
// let total = cuzdan_Pul - chokolate;
// alert("Siz " + total + "eded chokolate ala bilersiniz.");

// 9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün%
// operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı).

//*
// let number1 = prompt("Üç reqemli eded daxil et:");

// let reversedNumber1 = 0;
// let remainder;

// remainder = number1 % 10;
// reversednumber1 += remainder * 100;
// number1 = Math.floor(number1 / 10);

// remainder = number1 % 10;
// reversednumber1 += remainder * 10;
// number1 = Math.floor(number1 / 10);

// reversednumber1 += number1;

// alert("Tersi ->:", reversednumber1);

// 10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap
// edin. Tapşırıqda mantıq operatorlarını istifadə edin. Şərt operatorları if və ya switch istifadə
// etməyiniz tələb olunur.

//*
// let number = prompt("Enter the number");
// if (number % 2 === 0) {
//   console.log("The number entered is even");
// }
// console.log("The number entered is odd");

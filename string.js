// SRTRIN PROPERRIES AND METHODS

// STRING PROPERTY//
//? length bir string yad array in uzunlugunu  sayi olaerak verir.

let course = "Clarusway";

console.log(course.length);
console.log("Merhaba De Cohortu".length);

// girirlen stringi kendi karekter sayisi kadar yazdiran kod

// let cumle = (a) => {
//   for (let i = 0; i < a.length; i++) {
//     console.log(a);
//   }
// };
// cumle("merhaba Dünya");

// let deneme = (b) => console.log(b[b.length - 1]);
// deneme("ali");
/* -------------------------------------------------------------------------- */
/*                         String Yapısı ve Indexleme                         */
/* -------------------------------------------------------------------------- */
// Stringlerin her bir karakterine [index numarası] ile ulaşılabilir
console.clear();
console.log(course[0]);
console.log(course[1]);
console.log(course[2]);
console.log(course[3]);
console.log(course[4]);
console.log(course[5]);
console.log(course[6]);
console.log(course[7]);
console.log(course[8]);

// bir kelimenin her harfini  tek tek siralayin
console.clear();
const sirala = (kelime) => {
  for (i = 0; i < kelime.length; i++) {
    console.log(kelime[i]);
  }
};
sirala("günesli bir gün");
console.clear();

/* -------------------------------------------------------------------------- */
//!                                STRING METHODS                             */
/* -------------------------------------------------------------------------- */
// String metodlarında () kullnılır.
// bu metodlardan birden fazlası aynı anda kullanılabilir => Chaining method

//************************toLowerCase()***********************
//? karekterleri kücük harfe dönüstürür.
console.log(course.toLowerCase());

//************************toUpperCase()***********************
//? karekterleri büyük harfe dönüstürür.
console.log(course.toUpperCase());
console.log("Büyük harfe dönüstürme".toUpperCase());

//************************toLocaleUpperCase()***********************
let ctiy = "istanbul";
console.log(ctiy.toLocaleLowerCase("en-us"));
console.log(ctiy.toLocaleLowerCase("tr"));

//! Bir stringi parcalama yöntemleri

//****** split() ***********************/

let atasoz = "Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir.";
console.log(atasoz.split(" "));
console.log(atasoz.split(""));
let yenisoz = atasoz.split(" ");
console.log(yenisoz[6]);
yenisoz[4] === "hayat"
  ? console.log("hayat kelimesi bulundu")
  : console.log("hayat kelimesi yok");

//   const vecize = (atasoz) => {
//     console.log(atasoz.split(" "))
//     for (i = 0; i < atasoz.length; i++) {

//     }
//   };
//   vecize("Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir.");

//! BAzı array meodları split ile çok kullnılır. reverse() - join()
let message = "Harika bir gün";

//? reverse verilen arrayi tersindne sıralar
//? join birleştirmek için kullanılır.

console.log(message.split(" ").reverse().join(" "));

let word = "efe";

console.log(word.split("").reverse().join(""));

word === word.split("").reverse().join("")
  ? console.log("polindrom kelimedir.")
  : console.log("polindrom değildir");

let date = "23.05.2023";
console.log(date.split("."));

let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";
console.log(months.split("/"));

//split ile sayı sınırı verilebilir. Kaç eleman alınacakonu sayıile belirtebiliriz.
console.log(months.split("/", 5));

let liste = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand";
console.log(liste.split(";"));
console.log(liste.split(";").join("-"));

// girilen kelimeyi tersten yazan fonksiyon

const cevir = (a) => {
  console.log(a.split(" ").reverse().join(" "));
};
cevir("selam sinif");

/*------------------------------------------------------------- */
/*5-                                 Slice()                                  */
/* -------------------------------------------------------------------------- */

// slice(başlangıç index numarası , bitiş index numarası ) başlangıç ve bitiş arasındaki karakterleri alır

mesaj = "parcalandim";
console.log(mesaj.slice(3, 5));
console.log(mesaj.slice(3));
console.log(mesaj.slice(-5, -2));
console.log(mesaj.slice(-5));

/*------------------------------------------------------------- */
/*5-                                substring()                                  */
/* -------------------------------------------------------------------------- */
// slice  metoduyla - deger kullanamiyoruz
console.log(mesaj.substring(6, 8));
/*------------------------------------------------------------- */
/*5-                                 substr()                                  */
/* -------------------------------------------------------------------------- */
console.log(mesaj.substring(3, 5));

/*------------------------------------------------------------- */
/*5-                                replace()                                  */
/* -------------------------------------------------------------------------- */

// replace(aranan deger,yerine yazilacak deger)
mesagge = "Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir.";
console.log(mesagge.replace("kel", "ihtiyaci"));
console.log(mesagge.replaceAll("ü", "u").toUpperCase());

let veriable = "kullanici Adi";
console.log(veriable.replaceAll("i", "ı").replace(" ", "_"));

//
/*------------------------------------------------------------- */
/*5-                               strin icinde arama islemleri                               */
/* -------------------------------------------------------------------------- */
// includes,indexof,Match

//? includes() metodu ........ iceriyor mu=> true yada false deger dönderir.Casesensetiv

console.log(message.includes("kel"));
message.includes("zaman")
  ? console.log("bu cümle icinde zaman kelimesi gecer")
  : console.log("zaman kelimesi icermez");

let url = "https://www.clarusway.com";
url.includes("https")
  ? console.log("güveli bir site")
  : console.log("bu site güvenli degildir");

// girilen bir mail adresinin güvenli oup olmadigini kontrol eden blok

let mail = "galkan@gmail.com";
mail.includes("@") ? console.log("gecerli") : console.log("gecerli degil");

//? indexOf(aranacak metin, konum) Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir
console.log(mesagge.indexOf("kel"));
console.log(mesagge.indexOf("kal"));
word = "yenigün)";
console.log(word.indexOf("i", 1));
console.log(word.indexOf("i", 4));

//? Serach metodu=> metin icinde baska bir metni arar bulamazsa -1 olarak gönderir
console.log(word.search(/ü/i));

let kelimeKontrol = "bu cümlede türkce karekterler vardir";
console.log(kelimeKontrol.search(/[aeiöouü]/i));
console.log(kelimeKontrol.replace(/[aeiöouü]/gi, ""));

let sentence = "         clarusway      ";
console.log(sentence);
console.log(sentence.trim());
console.log(sentence.trimStart());
console.log(sentence.trimEnd());

cumle = "Clarusway";
console.log(cumle.startsWith("C"));
console.log(cumle.startsWith("s"));

console.clear();

counter = 0;
const sayi = (num, l, h) => {
  if (l > 0 && l < h && num >= 0 && num < 10) {
    for (let i = l; i <= h; i++) {
      if (i % 10 === num && Math.floor(i / 10) === num) counter += 2;
      else if (i % 10 === num && Math.floor(i / 10) !== num) counter++;
      else if (i % 10 !== num && Math.floor(i / 10) === num) counter++;
    }
    return counter;
  } else {
    return -1;
  }
};

sayi(5, 32, 45);
console.log(`toplam ${counter} kere kullanilmis`);

// const tersYaz = (kelime) => {
//   console.log(kelime.split(" ").reverse().join(" "));
// };
// tersYaz("yasmak güzeldir");

// let vecize = "bakarsan bag olur,bakmazsan dag olur";
// kelime = "kader";
// let yeniVecize = vecize.split(" ");
// console.log(yeniVecize);
// for (let i = 0; i < yeniVecize.length; i++)
//   kelime === yeniVecize[i]
//     ? console.log("kelime bulundu", kelime)
//     : console.log(kelime, "kelimesi yok");

// console.clear();
// const girilenAd= (girdi) =>
//   console.log(`${girdi.toUpperCase()} sitemize hosgeldin.`);
// girilenAd("hayrunnisa");

// let email = "kemalKacan@gmail.com";
// console.log(`kullanici adiniz:${email.split("@")[0]}`);

// let sayilar = "I-V-X-L";
// console.log(sayilar);
// sayilar.split("-");

// let yeniSayilar = sayilar
//   .replace("I", 1)
//   .replace("V", 5)
//   .replace("X", 10)
//   .replace("L", 50);
// console.log(yeniSayilar);

// const siraliYazdir = (girdi) => {
//   let döngüdenGelen = "";
//   for (let i = 0; i < girdi.length; i++) {
//     for (let j = i + 1; j <= girdi.length; j++) {
//       döngüdenGelen += girdi.slice(i, j) + " ";
//     }
//   }
//   return döngüdenGelen;
// };
// console.log(siraliYazdir("abc"));

// // function Substrings(word) {
// //   let word2 = "";
// //   for (var i = 0; i < word.length; i++) {
// //     for (var j = i + 1; j <= word.length; j++) {
// //       word2 += word.slice(i, j).concat(" ");
// //     }
// //   }
// //   return word2;
// // }

// // console.log(Substrings("abc"));

// // girilen cümledeki ünsüz sayılarını bulan program
// // sayı dizisindeki negatif sayıların toplamını bulan program
// // numbers=[-45,23,67,98,-546,-33232,0,5454,-34343]

// const unluler = (cümle) => {
//   let sayac = 0;
//   for (let i = 0; i < cümle.length; i++) {
//     if (cümle[i].match(/[aeioöuü]/gi)) {
//       console.log(cümle[i]);
//       sayac++;
//     }
//   }
//   console.log(sayac);
// };
// unluler("ankarali");

// let numbers = [-45, 23, 67, 98, -546, -33232, 0, 5454, -34343];
// const negatifsayilarinToplami = (numbers) => {
//   let sum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     numbers[i] < 0 ? (sum += numbers[i]) : null;
//   }
//   console.log(sum);
// };
// negatifsayilarinToplami(numbers);

ArrayA = ["", ""];
ArrayB = [11, 23, 17];

const mergeArrays = ArrayA.concat(ArrayB);
mergeArrays.sort((a, b) => a - b);
console.log(mergeArrays);
console.clear();

// let kelimeDizisi = "nemo is me";
// const sonuc = (kelimeDizisi, ara) => {
//   if (kelimeDizisi.includes(ara)) {
//     console.log(
//       `Nemo kelimesini   ${
//         kelimeDizisi.split(" ").indexOf(ara) + 1
//       }  . sirada buldum`
//     );
//   } else {
//     console.log(`${ara} kelimesini  bulamadim`);
//   }
// };
// sonuc(kelimeDizisi, "nemo");

// let vecize = "bakarsan bag olur,bakmazsan dag olur";
// kelime = "kader";
// let yeniVecize = vecize.split(" ");
// console.log(yeniVecize);
// for (let i = 0; i < yeniVecize.length; i++)
//   kelime === yeniVecize[i]
//     ? console.log("kelime bulundu", kelime)
//     : console.log(kelime, "kelimesi yok");
let bos = [];
let kelimeDizisi = "nemo is me";
const sonuc = (kelimeDizisi, ara) => {
  let x = kelimeDizisi.split(" ");
  for (let i = 0; i < x.length; i++) {
    if (x[i === ara]) bos[i] = true;
    else bos[i] = false;
  }
  if (bos.includes(true)) console.log(`Nemo kelimesini  buldum`);
  else console.log(`Nemo kelimesini  buldum`);
};
sonuc(kelimeDizisi, "nemo");

const atama = (giris) => {
  let geriDöndür = [];
  for (let i = 0; i < giris.length; i++) {
    if (geriDöndür.indexOf(giris[i]) == -1) {
      geriDöndür.push(giris[i]);
    }
  }
  return geriDöndür;
};
console.log(atama([1, 2, 3]));

function bul(satze) {
  console.log(satze);
  let neueSatze = satze.split(" ");
  for (let i = 0; i < neueSatze.length; ++i) {
    if (neueSatze[i] === "Nemo") {
      return `nemoyu  ${i + 1} .de buldum`;
    }
  }
  return "bulamadim";
}
console.log(bul("Nemo benim"));

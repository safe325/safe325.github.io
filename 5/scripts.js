let nevem = "Feri"
let azEnKorom = 10
console.log('A JavaScript is betöltött')

// egy egy egysoros komment
/* tobb soros komment
fejlesztoi eszkoztar a bongeszoben: Ctrl-Shift-I
*/

//relaciojelek: >, <, >=, <= 
// == (egyenlo ertek), === (egyenlo ertek es tipus)
if (azEnKorom >= 21) {
    console.log('Legalabb 21 eves')
} else if (azEnKorom >= 18) {
  console.log('Nagykoru')
} else {
    console.log('Nem nagykoru')
}

let masikKor = 18

if (masikKor === 18) {
    console.log('Pont tizennyolc')
}

console.log('Ez itt a vege')

// jQuerys resz

console.log($("h1").text())
$("h1").text('Ezt JavaScriptbol valtoztattuk meg')

if (azEnKorom >= 21) {
    $("h1").text('Legalabb 21 eves')
} else if (azEnKorom >= 18) {
    $("h1").text('Nagykoru')
} else {
    $("h1").text('Nem nagykoru')
}

console.log($(".sarga").css('background-color'))
//$("li").css('background-color','lime')
//$(".sarga").css('background-color','magenta')
$("p").html('alma, ami <strong>nagyon</strong> fontos')
$("li:last-of-type").remove()
$("li:last-of-type").toggleClass('sarga') //kapcsoló
// függvény létrehozása: function vagy =>
function adjHozzaEgyLit(){
    $("ul").append('<li>ujabb elem</li>')
} // függvény meghívása:
// $('button').click(adjHozzaEgyLit)
//vagy így:
$('#hozzaado').click(function(){
    $("ul").append('<li>ujabb elem</li>')
})

$('#torlo').click(() => {
    $("li:last-of-type").remove()
})
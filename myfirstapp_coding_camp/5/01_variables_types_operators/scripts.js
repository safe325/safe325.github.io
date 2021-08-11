// egysoros komment
/* többsoros
komment */
let myVariable = 5
/* a változók deklarálására használható még: const, var
bővebben: https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Statements#Declarations */
console.log('let myVariable = 5, myVariable =',myVariable)
/* az F12 billentyűvel vagy a 
Ctrl-Shift-I billentyűkombinációval a böngészőben
megnyitható fejlesztői eszközök (developer tools)
parancssorába (console) ír */
myVariable = 12
/* már létező változó értékének megváltoztatásához
nem kell a változónév elé a let kulcsszót odaírni */
console.log('myVariable = 12, myVariable =',myVariable)
/* a JavaScript nyelvben több különböző primitív típus van:
number (szám), string (szöveg), boolean (logikai),
null (a null érték tárolására), undefined (definiálatlan) */
// boolean típusok és operátorok
console.log('Logikai operátorok, igazságtáblázatok:')
console.log('&& (AltGr-C, "és")')
console.log('true && true =',true && true)
console.log('true && false =',true && false)
console.log('false && true =',false && true)
console.log('false && false =',false && false)
console.log('true && true && true =',true && true && true)
console.log('true && false && true =',true && false && true)
console.log('true && false && false =',true && false && false)
console.log('false && false && false =',false && false && false)
console.log('|| (AltGr-W, "vagy")')
console.log('true || true =',true || true)
console.log('true || false =',true || false)
console.log('false || true =',false || true)
console.log('false || false =',false || false)
console.log('true || true || true =',true || true || true)
console.log('true || false || true =',true || false || true)
console.log('true || false || false =',true || false || false)
console.log('false || false || false =',false || false || false)
console.log('! (Shift-4, "nem", negálás, tagadás')
console.log('!true =',!true)
console.log('!false =',!false)
console.log('!!true =',!!true)
console.log('!!false =',!!false)
console.log('=== (Shift-7, 3-szor, "egyenlő" az értékük és típusuk)')
console.log('== (Shift-7, 2-szer, "egyenlő" az értékük)')
console.log('true === true =',true === true)
console.log('true === false =',true === false)
console.log('false === true =',false === true)
console.log('false === false =',false === false)
console.log('5 === 5 =',5 === 5)
console.log('5 === 7 =',5 === 7)
console.log("'alma' === 'alma' =",'alma'==='alma')
console.log("'alma' === 'szilva' =",'alma'==='szilva')
console.log('!== ("nem egyenlő")')
console.log('true !== true =',true !== true)
console.log('true !== false =',true !== false)
console.log('false !== true =',false !== true)
console.log('false !== false =',false !== false)
console.log('5 !== 5 =',5 !== 5)
console.log('5 !== 7 =',5 !== 7)
console.log("'alma' !== 'alma' =",'alma'!=='alma')
console.log("'alma' !== 'szilva' =",'alma'!=='szilva')
console.log('Műveletek (operátorok) számokkal')
console.log('összeadás: 5 + 6 =',5 + 6)
console.log('kivonás: 5.1 - 6 =',5.1 - 6)
console.log('szorzás: 5.2 * 6.3 =',5.2 * 6.3)
console.log('osztás: 10 / 4 =',10 / 4)
console.log('osztás 0-val: 10 / 0 =',10 / 0,'vagyis: "végtelen"')
console.log('osztás maradéka (modulo): 10 % 3 =',10 % 3)
console.log('Feladatok számokkal')
console.log('Számold ki az életkorod a parancssor segítségével és tárold el egy age nevű változóban!')
age = 2021 - 1961
console.log('age = 2021 - 1961, age =',age)
console.log('Hány évig tartott a második világháború? Tárold el az eredményt egy ww2 nevű változóban!')
ww2 = 1945 - 1939
console.log('ww2 = 1945 - 1939, ww2 =',ww2)
console.log('Mennyibe kerül 76 Tesla részvény? Tárold el egy tesla nevű változóban!')
tesla = 76 *  669,68
console.log('tesla = 76 *  669,68, tesla =',tesla,'USD')
console.log('forrás: https://www.portfolio.hu/arfolyam/TSLA.CUS/Tesla (2021. 03. 22.)')
console.log('Hány másodpercig tart egy nap? Tárold el egy secondsOfDay nevű változóban!')
secondsOfDay = 24 * 60 * 60
console.log('secondsOfDay = 24 * 60 * 60, secondsOfDay =',secondsOfDay)
console.log('A világ lakosságának hány százaléka magyar állampolgár? Tárold el egy hungarians nevű változóban!')
hungarians = 100 * 9731000 / 7854489000
console.log('hungarians = 100 * 9731000 / 7854489000, hungarians =',hungarians,"%")
console.log('forrás: https://hu.wikipedia.org/wiki/Orsz%C3%A1gok_n%C3%A9pess%C3%A9g_szerinti_list%C3%A1ja (2021. 03. 23.)')
console.log('Mennyivel nagyobb Kína területe, mint Csehországé? Tárold el egy bigger nevű változóban!')
bigger = 9677009 - 78865
console.log('bigger = 9677009 - 78865, bigger =',bigger,'négyzetkilométer')
console.log('forrás: https://hu.wikipedia.org/wiki/Orsz%C3%A1gok_ter%C3%BClet_szerinti_list%C3%A1ja')
console.log('Ha egy Discord csatornába csak 7 ember fér és összesen 654-en vannak a szerveren, hányan lesznek a legkisebb csatornában? Tárold el egy participants nevű változóban!')
participants = 654 % 7
console.log('participants = 654 % 7, participants =',participants,'fő lesz a legkisebb csatornában')
console.log('Stringek')
console.log('értékadás:',"'Shift-1, aposztróf',",'vagy','"Shift-2, idézőjel"')
console.log('string sablon literál (string template literal): Akkor használjuk, amikor egy konstans (állandó) stringbe változóértéket akarunk beszúrni. Ekkor a konstans stringet a ` és ` (tompa ékezet, AltGr-7) karakterek közé írjuk, a változónevet pedig a ${változónév} módon illesztjük be a stringbe. Példa:')
let name = 'Mark'; let greeting = `Hello, ${name}!`
console.log("let name = 'Mark'; let greeting = `Hello, ${name}!`, greeting =",greeting)
console.log('string operátorok (műveletek)')
console.log('+ (konkatenáció, összefűzés)')
let greetWorld = 'Hello,' + 'World!'
console.log("let greetWorld = 'Hello, ' + 'World!', greetWorld =",greetWorld)
console.log('Konkatenáció és a string sablon literál:')
let name1 = 'Dave'; let greeting1 = 'Hello ' + name1 + '!'
console.log("let name1 = 'Dave'; let greeting1 = 'Hello ' + name + '!', greeting1 =",greeting1)
let name2 = 'Dave'; let greeting2 = `Hello ${name2} !`
console.log("let name2 = 'Dave'; let greeting2 = `Hello, ${name2} !`, greeting2 =",greeting2)
console.log('string.length: a string hossza (karaktereinek a száma)')
let charCount = 'Hello'.length
console.log("let charCount = 'Hello'.length, charCount =",charCount)
let charCount2 = 'Hello, world!'.length
console.log("let charCount2 = 'Hello, world!'.length, charcount2 =",charCount2, ', mert az írásjelek és a szóköz is karakter')
console.log('Összehasonlítások')
let trueOrFalse = 5 === 5
console.log('let trueOrFalse = 5 === 5, trueOrFalse =',trueOrFalse)
trueOrFalse = 100 < 50
console.log('trueOrFalse = 100 < 50, trueOrFalse =',trueOrFalse)
trueOrFalse = 'hello' !== 'world'
console.log("trueOrFalse = 'hello' !== 'world', trueOrFalse =",trueOrFalse)
trueOrFalse = 1 >= 2
console.log('trueOrFalse = 1 >= 2, trueOrFalse =',trueOrFalse)
trueOrFalse = 'blue'.length === 'green'.length
console.log("trueOrFalse = 'blue'.length === 'green'.length, trueOrFalse =",trueOrFalse)
trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8)
console.log('trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8), trueOrFalse =',trueOrFalse)
console.log('A JavaScript gyengén típusos nyelv: ha tudja, automatikusan átalakítja az értékek típusát, hogy értelmes eredménye legyen a műveleteklnek (ha ez lehetséges), például:')
let result = 'apple' + 5; let result2 = '122' - 1
console.log("let result = 'apple' + 5; let result2 = '122 - 1', result =",result,"result2 =",result2)
console.log('A JavaScriptben nem lehet egy változó típusát meghatározni, mert azt bármikor megváltoztathatjuk, pl.:')
let variable = 5
console.log('let variable = 5, variable =',variable)
variable = 'apple'
console.log("variable = 'apple', variable =",variable)
console.log('Adatszerkezetek: tömb')
console.log('Feladatok')
console.log('Hozz létre egy tömböt, amiben különböző neveket tárolsz és mentsd el egy names nevű változóban!')
names = ['Szende', 'Szundi', 'Tudor', 'Vidor', 'Morgó', 'Hapci', 'Kuka']
console.log("names = ['Szende', 'Szundi', 'Tudor', 'Vidor', 'Morgó', 'Hapci', 'Kuka'], names =",names)
console.log('Nézd meg, a harmadik név hosszabb-e, mint 5 karakter')
console.log('A harmadik név:',names[2])
if (names[2].length > 5) {
    console.log('A harmadik név hosszabb, mint 5 karakter.')
}
else {
    console.log('A harmadik név nem hosszabb, mint 5 karakter.')
}
console.log('Adj 1 vagy több új nevet a tömbhöz')
names.push('Hófehérke'); console.log("names.push('Hófehérke')")
console.log(names)
names.push('herceg'); console.log("names.push('herceg')")
console.log(names)
console.log('Cseréld le az első nevet a saját nevedre!')
names[0] = 'Feri'; console.log("names[0] = 'Feri'")
console.log(names)
console.log('Nézd meg, több, mint 4 elem van-e a tömbben!')
if (names.length > 4) {
    console.log('Több, mint 4 elem van a tömbben.')
}
else {
    console.log('Nem több, mint 4 elem van a tömbben.')
}
console.log('Objektum')
console.log('Objektum létrehozása:')
console.log('let név = { kulcs1: érték1, kulcs2: érték2 }')
console.log("Az érték1 elérése: név['kulcs1'] vagy név.kulcs1")
console.log('Új kulcs-érték pár hozzáadása: név.kulcs3 = érték3')
console.log('Feladatok')
console.log('Hozz létre egy objektumot, aminek van egy colors nevű adatmezője (doboza). A colors mező (változó) tartalma legyen egy tömb, ami színeket tartalmaz')
let szinek = {
    colors: ['piros', 'barna', 'lila', 'zöld']
}
console.log('console.log(szinek.colors)',szinek.colors)
console.log('Adj egy új mezőt az objektumhoz, hasManyColors néven. Az értéke legyen true, ha több, mint 3 színt tartalmaz a colors, különben pedig legyen false')
if (szinek.colors.length > 3) {
    console.log('A colors adatmező 3-nál több színt tartalmaz.')
}
else {
    console.log('A colors adatmező 3-nál nem több színt tartalmaz.')
}
szinek.colors = ['piros', 'barna', 'lila']
console.log(szinek.colors)
if (szinek.colors.length > 3) {
    console.log('A colors adatmező 3-nál több színt tartalmaz.')
}
else {
    console.log('A colors adatmező 3-nál nem több színt tartalmaz.')
}
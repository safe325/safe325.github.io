console.log('Értékadás')
let variable = 12
console.log('let variable = 12, variable =',variable)
console.log('Feltétel és elágazás')
console.log('Feladatok')
console.log('Milyen eredményt kapsz, ha lefuttatod a lenti kódrészletet?')
let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}
console.log('Azért, mert a = 7, tehát az a < 5 feltétel hamis, ezért az else ág fog lefutni, vagyis a 7-et megszorozza 2-vel.')
console.log('Mit kellene megváltoztatnod ahhoz, hogy a parancssorra kiírt eredmény 1 legyen?')
a = 2;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}
console.log('A let a = 7 helyére a = 2-t kell írni. Mivel az "a" változónak új értéket adunk, ezért nem kell a "let". Ha a = 2, akkor az a < 5 feltétel igaz lesz, tehát az igaz ág fog lefutni: a 2-t elosztja 2-vel.')
console.log('for ciklus (for loop)')
console.log('Feladatok')
console.log('Hozz létre egy ciklust, ami kiírja a számokat 0-tól 9-ig!')
for (let i = 0; i <= 9; i++) {
  console.log(i)
}
console.log('Módosítsd az előző ciklust, hogy 1-től 10-ig írja ki a számokat!')
for (let i =1; i <= 10; i++) {
  console.log(i)
}
console.log('Írd ki a 0 és 20 közötti páros számokat (zárt intervallum)!')
for (let i = 0; i <= 20; i = i + 2) {
  console.log(i)
}
console.log('függvények (functions)')
console.log('1. feladat: Hozz létre egy függvényt, ami kiírja az első N számot!')
let printNumbersTill = (N) => {
  for (i = 1; i <= N; i++) {
    console.log(i)
  }
}
console.log('printNumbersTill(20)'); printNumbersTill(20)
console.log('printNumbersTill(15)'); printNumbersTill(15)
console.log('2. feladat: Hozz létre egy függvényt, ami egy nevet kap paraméterként, majd visszatér egy személyes üdvözléssel!')
let getGreetingTo = (name) => {
  greeting = 'Hello, ' + name
  return greeting
}
console.log("getGreetingTo('Mark')");getGreetingTo('Mark')
console.log("console.log(getGreetingTo('Mark'))"); console.log(getGreetingTo('Mark'))
console.log('for ciklus (for loop) és tömb (array)')
console.log('1. feladat: Hozz létre egy függvényt, ami egy tömböt kap paraméterként, majd sorban kiírja minden elemét!')
let printValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}
console.log('printValues([0, 3, 6, 7, 9])');printValues([0, 3, 6, 7, 9])
console.log('2. feladat: Módosítsd a korábbi printValues függvényed, hogy PrintValues néven for ciklus helyett forEach ciklust használjon!')
let PrintValues = (array) => {
  array.forEach((value) => {
    console.log(value)
  })
}
console.log("PrintValues(['cica', 3, 'kutya', 7, 9])");PrintValues(['cica', 3, 'kutya', 7, 9])
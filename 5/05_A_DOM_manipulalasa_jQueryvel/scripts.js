let nevek = ['Éva', 'Ferenc', 'Anna', 'Péter']
nevek.forEach((nev) => {
    $('ul').append(
        `<li>${nev}</li>`
    )
})
let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  }
$('li').eq(10).css('font-weight','bold')
$('body').append(
    `<h1>${additionalBlock.title}</h1>`
)
$('body').append(
    `<p>${additionalBlock.text}</p>`
)
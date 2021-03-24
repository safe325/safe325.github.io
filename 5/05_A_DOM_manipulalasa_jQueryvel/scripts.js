let nevek = ['Éva', 'Ferenc', 'Anna', 'Péter']
nevek.forEach((nev) => {
    $('ul').append(
        `<li>${nev}</li>`
    )
})
$('li').eq(10).css('font-weight','bold')
let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  }
$('body').append(
    `<h1>${additionalBlock.title}</h1>`
)
$('body').append(
    `<p>${additionalBlock.text}</p>`
)
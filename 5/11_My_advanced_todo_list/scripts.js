$(function(){
    $('#gomb').click(() => {
        let elem = $('#bevitel').val();
        $('ul').append(`<li><span>${elem}</span> <img src="del.svg" class="del" alt=""> <img src="ok.svg" class="ok" alt=""></li>`);
        $('.ok').click((event) => {
            $(event.target.parentElement).css('text-decoration','line-through');
        })
        $('.del').click((event) => {
            $(event.target.parentElement).remove();
        })
    })
})
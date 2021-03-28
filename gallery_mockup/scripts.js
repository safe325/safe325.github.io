$(function(){

    let currentPhoto = 0;
     let imagesData = [
         {
             photo: 'images/01.jpg',
             title: 'Virágok és pillangó',
             description: 'Forrás: https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg'
         },
         {
             photo: 'images/02.jpg',
             title: 'Rózsaszín virágok',
             description: 'Forrás: https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg'
         },
         {
             photo: 'images/03.jpg',
             title: 'Pipacsok',
             description: 'Forrás: https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_960_720.jpg'
         },
         {
            photo: 'images/04.jpg',
            title: 'Tarka mező',
            description: 'Forrás: https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_960_720.jpg'
        },
        {
            photo: 'images/05.jpg',
            title: 'Cica virággal',
            description: 'Forrás: https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg'
        },
        {
            photo: 'images/06.jpg',
            title: 'Pitypang',
            description: 'Forrás: https://cdn.pixabay.com/photo/2018/01/19/14/40/nature-3092555_960_720.jpg'
        },
        {
            photo: 'images/07.jpg',
            title: 'Tavirózsa',
            description: 'Forrás: https://cdn.pixabay.com/photo/2018/06/28/17/02/water-lily-3504363_960_720.jpg'
        },
        {
            photo: 'images/08.jpg',
            title: 'Tél és tavasz',
            description: 'Forrás: https://cdn.pixabay.com/photo/2015/05/08/08/49/mountains-757731_960_720.jpg'
        },
        {
            photo: 'images/09.jpg',
            title: 'Olajrepce',
            description: 'Forrás: https://cdn.pixabay.com/photo/2017/03/11/13/19/oilseed-rape-2135026_960_720.jpg'
        },
        {
            photo: 'images/10.jpg',
            title: 'Tulipánok, nárciszok',
            description: 'Forrás: https://cdn.pixabay.com/photo/2016/02/13/10/35/tulips-1197602_960_720.jpg'
        },
        
     ];
 
     let loadImage = (ind) => {
         $('#photo').attr('src', imagesData[ind].photo);
         $('#photo-title').text(imagesData[ind].title);
         $('#photo-description').text(imagesData[ind].description);
     }
 
     //első kép betöltése az img elembe
     loadImage(currentPhoto);    
 
     //balra mutató nyíl
     $('#la').click(() =>{
         if(currentPhoto>0){
            currentPhoto--;
         } else {
             currentPhoto=imagesData.length-1;
         }
         loadImage(currentPhoto);
     });
     //jobbra mutató nyíl
     $('#ra').click(() =>{
         if(currentPhoto<imagesData.length-1){
             currentPhoto++;
         } else {
             currenthPhoto=0;
         }
         loadImage(currentPhoto);
     });
loadImage(currentPhoto);
     //thumbnail-ok legenerálása
     imagesData.forEach((item, index) => {
        $('#thumbnails').append(`<div class="thumbnail" data-number="${index}"> 
            <img src="${item.photo}" data-number="${index}" alt=""> <div class="title">${item.title}</div> </div>`);
        $('.thumbnail').click((event) => {
             let ind = parseInt($(event.target).attr('data-number'));
             loadImage(ind);
           });
     }); 
   }); 
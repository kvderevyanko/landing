$(function () {
    $('[data-toggle="popover"]').popover({ trigger: "hover" });

    $("#topMenu").on('click', 'a', function () {

        let block = $(this).data('block');
        $([document.documentElement, document.body]).animate({
            scrollTop: $("."+block).offset().top-60
        }, 500);
        return false;
    })


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    ymaps.ready(init);


    function init () {
        // Параметры карты можно задать в конструкторе.
        let myMap = new ymaps.Map(
            // ID DOM-элемента, в который будет добавлена карта.
            'yandexMap',
            // Параметры карты.
            {
                // Географические координаты центра отображаемой карты.
                center: [51.483077, 81.204306],
                // Масштаб.
                zoom: 15,

            }, {
                // Поиск по организациям.
                //searchControlProvider: 'yandex#search'
            }
        );

        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [51.483077, 81.204306],
            },
            // Свойства.
            properties: {

                hintContent: '123456, Рубцовск, Ленина 204/2'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#redIcon',
            // Метку можно перемещать.
        });

        myMap.geoObjects
            .add(myGeoObject);
    }

});
$(document).ready(() => {

    $('#titles-action > button.btn').click(() => {
        $('#pop-up').css('display', 'flex');
        $('#reservation').show();
    });

    $('#pop-up').click((e) => {
        if (e.target.id === 'pop-up') {
            $('#pop-up').hide();
        }
    });

    $('#reservation button.btn').click(() =>{
        let reserve_name = $('#reserve-name');
        let reserve_phone = $('#reserve-phone');
        reserve_name.css('border-color', 'black');
        reserve_phone.css('border-color', 'black');
        $('#reserve-error').hide();

        if (reserve_name.val() && reserve_phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + reserve_name.val() + '&phone=' + reserve_phone.val(),
                success: () => {
                    $('#reservation').hide();
                    $('#reservation-sent').show();
                },
                error: () => {
                    $('#pop-up').hide();
                    alert('Ошибка заказа. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#reserve-error').show();
            if (!reserve_name.val()) {
                reserve_name.css('border-color', 'red');
            }
            if (!reserve_phone.val()) {
                reserve_phone.css('border-color', 'red');
            }
        }

    });

    $('#order-form-active button.btn').click(() =>{
        let name = $('#name');
        let phone = $('#phone');
        let time = $('#time');
        name.css('border-color', 'black');
        phone.css('border-color', 'black');
        time.css('border-color', 'black');
        $('#order-error').hide();

        if (name.val() && phone.val() && time.val()) {
            $.ajax({
                type: 'post',
                url: 'mail_order.php',
                data: 'name=' + name.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#pop-up').css('display', 'flex');
                    $('#reservation-sent').show();
                },
                error: () => {
                    alert('Ошибка заказа. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#order-error').show();
            if (!name.val()) {
                name.css('border-color', 'red');
            }
            if (!phone.val()) {
                phone.css('border-color', 'red');
            }
            if (!time.val()) {
                time.css('border-color', 'red');
            }
        }

    });

    $('.projects').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        centerMode: false,
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu').click(() => {
        $('#header').removeClass('menu-open');
    });

});

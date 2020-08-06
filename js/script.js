$(function () {
    // slide
    $('.slide').slick({
        arrows: false,
        autoplay: true
    });

    // get cases
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/cases",
        data: {token: "mPczSRTGktoOVn5O9CnfuRufmmC9F6bG"},
        success: function (response) {
            $('#realizados').html(response.realizados);
            $('#confirmados').html(response.confirmados);
            $('#negativos').html(response.negativos);
            $('#obitos').html(response.obitos);
            $('#atualizacao').html(response.data);
        }
    });
});
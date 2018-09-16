$(document).ready(function () {

    $.get("/api/burgers", function (data) {
        var devoured = [];
        var unDevoured = [];
        data.forEach(burger => {
            var isDevoured = (burger.devoured === 1);
            var ol = isDevoured ? $('#devouredList') : $('#undevouredList');
            var li = $('<li>');
            li.text(burger.burger_name);
            ol.append(li);
            if (!isDevoured) {
                var btn = $('<button>');
                btn.data('burger_id', burger.id);
                btn.addClass('devour');
                btn.text('Devour!');
                li.append(btn);
            }


        });
    });
    $(document).on('click', '.devour', function () {
        var burger_id = $(this).data('burger_id');
        $.ajax({
            url: `/api/burgers/${burger_id}`,
            method: 'PUT',
            data: { devoured: 1 },
            success: function () {
                location.reload();
            }
        });
    });
    $('#submit').click(function () {
        $.post();
    });
});
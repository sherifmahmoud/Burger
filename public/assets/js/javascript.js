$(document).ready(function () {

    $(document).on('click', '.devour', function () {
        var burger_id = $(this).data('id');
        $.ajax({
            url: '/',
            method: 'PUT',
            data: { id: burger_id, devoured: 1 },
            success: function () { location.reload(); }
        });
    });
    $('#submit').click(function () {
        $.post();
    });
});
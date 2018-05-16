

$('#redBtn').click(function () {
    $('#colorBox').css({
        'background-color' : 'red'
    })
});


$('#result').click(function () {
    $('#resultView').css({
        'display' : 'block'
    })
    $('#xiView').css({
        'display' : 'none'
    });
});

$('#resultXi').click(function () {
    $('#resultView').css({
        'display' : 'none'
    });
    $('#xiView').css({
        'display' : 'block'
    });
});


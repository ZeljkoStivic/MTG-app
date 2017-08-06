/*---------------------------------- VARIABLES----------------------------------*/
var players = $.cookie('players');
var colors = $.cookie('colors');
var pickedCommanders = $.cookie('pickedCommanders');
var row=1;
var hp=30;
var commanderHp=15;

players = players.split(',');
colors = colors.split(',');
colors.length=players.length;
pickedCommanders = pickedCommanders.split(',');

/*---------------------------------- /VARIABLES----------------------------------*/

//$('#gameLink').removeAttr("disabled";

$('#tables').append($("<table></table>").addClass('table'));
$('table').append($("<thead></thead>"));
$('thead').append($("<tr></tr>").addClass('tableHead'));
$('.tableHead').append($("<th></th>"));
$('.tableHead').append($("<th></th>").text(players[0]));
for(i=0; i<pickedCommanders.length; i++){
    $('.tableHead').append($("<th></th>").text(pickedCommanders[i]));
}
$('table').append($("<tbody></tbody>"));
$('tbody').append($("<tr></tr>").addClass('tableBody'));
$('.tableBody').append($("<th></th>").text(row).attr( "scope", "row" ));
$('.tableBody').append($("<td></td>").text(hp));
for(i=0; i<pickedCommanders.length; i++){
    $('.tableBody').append($("<td></td>").text(commanderHp));
}

$('#tables').append($("<button></button>").addClass('btn btn-primary btn-sm dec1').text('Decrese by 1'));
$('#tables').append($("<button></button>").addClass('btn btn-primary btn-sm inc1').text('Increse by 1'));
$('#tables').append($("<button></button>").addClass('btn btn-primary btn-sm dec5').text('Decrese by 5'));
$('#tables').append($("<button></button>").addClass('btn btn-primary btn-sm inc5').text('Increse by 5'));


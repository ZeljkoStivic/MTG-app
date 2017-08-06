/*---------------------------------- VARIABLES----------------------------------*/
var players = $.cookie('players');
var colors = $.cookie('colors');
var pickedCommanders = $.cookie('pickedCommanders');
var row=1;
var hp=30;
var commanderHp=[];

players = players.split(',');
colors = colors.split(',');
colors.length=players.length;
pickedCommanders = pickedCommanders.split(',');

for(i=0; i<pickedCommanders.length; i++){
    commanderHp[i]=15;
}

/*---------------------------------- /VARIABLES----------------------------------*/

//$('#gameLink').removeAttr("disabled";

$('#tables').append($("<div></div>").addClass('tableDiv'));
$('.tableDiv').append($("<table></table>"));
$('table').append($("<thead></thead>"));
$('thead').append($("<tr></tr>").addClass('tableHead'));
$('.tableHead').append($("<th></th>"));
$('.tableHead').append($("<th></th>").text(players[0]));
for(i=1; i<pickedCommanders.length; i++){
    $('.tableHead').append($("<th></th>").text(pickedCommanders[i]));
}
$('table').append($("<tbody></tbody>"));
$('tbody').append($("<tr></tr>").addClass('tableRow'+row));
$('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
$('.tableRow'+row).append($("<td></td>").text(hp));
for(i=1; i<pickedCommanders.length; i++){
    $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
}

$('.tableDiv').append($("<button></button>").addClass('btn btn-primary btn-sm decHp1').text('- 1'));
$('.tableDiv').append($("<button></button>").addClass('btn btn-primary btn-sm incHp1').text('+ 1'));
$('.tableDiv').append($("<div></div>"));
$('.tableDiv').append($("<button></button>").addClass('btn btn-primary btn-sm decHp5').text('- 5'));
$('.tableDiv').append($("<button></button>").addClass('btn btn-primary btn-sm incHp5').text('+ 5'));
for(i=1; i<pickedCommanders.length; i++){
    $('.tableDiv').append($("<div></div>"));
    $('.tableDiv').append($("<button></button>").addClass('btn btn-primary btn-sm dec1Com'+i).text('- 1C'+(i+1)));
    $('.tableDiv').append($("<button></button>").addClass('btn btn-primary btn-sm inc1Com'+i).text('+ 1C'+(i+1)));
    $('.tableDiv').append($("<div></div>"));
    $('.tableDiv').append($("<button></button>").addClass('btn btn-primary btn-sm dec5Com'+i).text('- 5C'+(i+1)));
    $('.tableDiv').append($("<button></button>").addClass('btn btn-primary btn-sm inc5Com'+i).text('+ 5C'+(i+1)));
}

/*---------------------------------- COMMANDER BUTTONS----------------------------------*/
/*---------------------------------- COMMANDER1 BUTTONS----------------------------------*/
$('.dec1Com0').click(function() {
    event.preventDefault();
    hp = hp - 1;
    commanderHp[0]= commanderHp[0] - 1;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.inc1Com0').click(function() {
    event.preventDefault();
    hp = hp + 1;
    if(hp>=30){
        hp=30;
    }
    commanderHp[0]= commanderHp[0] + 1;
    if(commanderHp[0]>=15){
        commanderHp[0]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.dec5Com0').click(function() {
    event.preventDefault();
    hp = hp - 5;
    commanderHp[0]= commanderHp[0] - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.inc5Com0').click(function() {
    event.preventDefault();
    hp = hp + 5;
    if(hp>=30){
        hp=30;
    }
    commanderHp[0]= commanderHp[0] + 5;
    if(commanderHp[0]>=15){
        commanderHp[0]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});
/*---------------------------------- COMMANDER2 BUTTONS----------------------------------*/
$('.dec1Com1').click(function() {
    event.preventDefault();
    hp = hp - 1;
    commanderHp[1]= commanderHp[1] - 1;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.inc1Com1').click(function() {
    event.preventDefault();
    hp = hp + 1;
    if(hp>=30){
        hp=30;
    }
    commanderHp[1]= commanderHp[1] + 1;
    if(commanderHp[1]>=15){
        commanderHp[1]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.dec5Com1').click(function() {
    event.preventDefault();
    hp = hp - 5;
    commanderHp[1]= commanderHp[1] - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.inc5Com1').click(function() {
    event.preventDefault();
    hp = hp + 5;
    if(hp>=30){
        hp=30;
    }
    commanderHp[1]= commanderHp[1] + 5;
    if(commanderHp[1]>=15){
        commanderHp[1]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

/*---------------------------------- COMMANDER3 BUTTONS----------------------------------*/
$('.dec1Com2').click(function() {
    event.preventDefault();
    hp = hp - 1;
    commanderHp[2]= commanderHp[2] - 1;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.inc1Com2').click(function() {
    event.preventDefault();
    hp = hp + 1;
    if(hp>=30){
        hp=30;
    }
    commanderHp[2]= commanderHp[2] + 1;
    if(commanderHp[2]>=15){
        commanderHp[2]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.dec5Com2').click(function() {
    event.preventDefault();
    hp = hp - 5;
    commanderHp[2]= commanderHp[2] - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.inc5Com2').click(function() {
    event.preventDefault();
    hp = hp + 5;
    if(hp>=30){
        hp=30;
    }
    commanderHp[2]= commanderHp[2] + 5;
    if(commanderHp[2]>=15){
        commanderHp[2]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

/*---------------------------------- COMMANDER4 BUTTONS----------------------------------*/
$('.dec1Com3').click(function() {
    event.preventDefault();
    hp = hp - 1;
    commanderHp[3]= commanderHp[3] - 1;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.inc1Com3').click(function() {
    event.preventDefault();
    hp = hp + 1;
    if(hp>=30){
        hp=30;
    }
    commanderHp[3]= commanderHp[3] + 1;
    if(commanderHp[3]>=15){
        commanderHp[3]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.dec5Com3').click(function() {
    event.preventDefault();
    hp = hp - 5;
    commanderHp[3]= commanderHp[3] - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.inc5Com3').click(function() {
    event.preventDefault();
    hp = hp + 5;
    if(hp>=30){
        hp=30;
    }
    commanderHp[3]= commanderHp[3] + 5;
    if(commanderHp[3]>=15){
        commanderHp[3]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});
/*---------------------------------- COMMANDER BUTTONS----------------------------------*/

/*---------------------------------- HP BUTTONS----------------------------------*/

$('.decHp1').click(function() {
    event.preventDefault();
    hp = hp - 1;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=0; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.decHp5').click(function() {
    event.preventDefault();
    hp = hp - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=0; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.incHp1').click(function() {
    event.preventDefault();
    hp = hp + 1;
    if(hp>=30){
        hp=30;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=0; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

$('.incHp5').click(function() {
    event.preventDefault();
    hp = hp + 5;
    if(hp>=30){
        hp=30;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp));
    for(i=0; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[i]));
    }
});

/*---------------------------------- HP BUTTONS----------------------------------*/
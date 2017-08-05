/*---------------------------------- VARIABLES----------------------------------*/

var players=[];
var colors=['red', 'blue', 'yellow', 'green', 'black'];
var commanders=['Nissa Revane1', 'Nissa Revane2', 'Nissa Revane3', 'Nissa Revane4', 'Nissa Revane5'];
var pickedBorder=['firstPickBorder', 'secondPickBorder', 'thirdPickBorder', 'fourthPickBorder', 'fifthPickBorder'];
var pickedCommanders=[];
var gameArr=[];
var i=0;
var j=0;


/*---------------------------------- BTN FOR CREATING NEW GAME ON COMMANDER MAIN ----------------------------------*/
$('#btnNewGame').click(function() {
    players=[];
    pickedCommanders=[];
    gameArr=[];
    i=0;
    j=0;
    $('#arrowPlayer').fadeIn( 400 );
    $('#btnPlayers').fadeIn( 400 );
    $('#playerGrid').empty();
    $('#playerLobby').empty();
    $('#colorLobby').empty();
    $('#commanderLobby').empty();
    $('.playerPickPlayer').empty();
    $('.reRoll').empty();
    $('#divOrderNumber').empty();
    $('#divOrderPlayer').empty();
    $('#divOrderColor').empty();
    $('#divOrderCommander').empty();
    $('.playerPickColor').removeClass(colors[0]);
    $('#btnPlayers').addClass("newGameColor");
    $('#addPlayerModalPanel').show();
    $('#randomizeCommander').show();
    $('#pickCommander').show();
    $('#arrowPick').hide();
    $('#btnCreateNewGame').hide();
    for(var k=0; k<pickedBorder.length; k++){
        $('#commander1').removeClass(pickedBorder[k]);
        $('#commander2').removeClass(pickedBorder[k]);
        $('#commander3').removeClass(pickedBorder[k]);
        $('#commander4').removeClass(pickedBorder[k]);
        $('#commander5').removeClass(pickedBorder[k]);
    }
});

/*---------------------------------- REMOVES GREEN COLOR FROM PLAYERS BUTTON ON COMMANDER MAIN ----------------------------------*/
$('#btnPlayers').click(function() {
    $('#btnPlayers').removeClass("newGameColor");
});


/*---------------------------------- BTN IN MODAL THAT ADDS A PLAYER TO THE POOL BEFORE CREATING A LOBBY ON MODAL ----------------------------------*/
$('#addPlayer').click(function() {
    event.preventDefault();
    players[i]=$('#playerName').val();
    if($('#playerName').val() != '') {
        $('#playerGrid').append($("<ol></ol>").text(players[i]));
        i++;
        $('#playerName').val('');
        $('#playerName').focus();
    }
});

/*---------------------------------- BTN IN MODAL THAT CREATES A LOBBY WITH RANDOM PICK ORDER FROM A PLAYER POOL ----------------------------------*/
$('#createLobby').click(function() {
    event.preventDefault();
    shuffle(players);
    for(i=0; i<players.length; i++){
        $('#playerLobby').append($("<ol></ol>").text(players[i]));
        $('#colorLobby').append($("<div></div>").addClass(colors[i]));
        $('#colorLobby').find('div').eq(i).attr('id', 'divPlayerColor'+i);
    }
    $('#addPlayerModalPanel').hide();
});


/*---------------------------------- BTN IN MODAL THAT RANDOMIZES COMMANDERS IN LOBBY  ----------------------------------*/
$('#randomizeCommander').click(function() {
    event.preventDefault();
    $('#pickCommander').hide();
    shuffle(commanders);
    for(i=0, j=0; i<players.length; i++, j++){
        $('#commanderLobby').append($("<ol></ol>").text(commanders[i]));
        $('#commanderLobby').find('ol').eq(i).attr('id', 'olLobbyCommander'+i);
        pickedCommanders[j]=commanders[i];
        $('.reRoll').append($("<button></button>").addClass('btn btn-primary btn-sm').text("ReRoll"));
        $('.reRoll').find('button').eq(i).attr('id', 'btnReRoll'+i);
    }
    $('#randomizeCommander').hide();
    $('#btnRandomizeOrder').show();
});

/*---------------------------------- BTN IN MODAL THAT RANDOMIZES ORDER  ----------------------------------*/
$('#btnRandomizeOrder').click(function() {
    event.preventDefault();
    shufflePlayers(players, colors, pickedCommanders);
    players=gameArr[0];
    $.cookie('players', players, { expires: 7, path: '/' });
    colors=gameArr[1];
    $.cookie('colors', colors, { expires: 7, path: '/' });
    pickedCommanders=gameArr[2];
    $.cookie('pickedCommanders', pickedCommanders, { expires: 7, path: '/' });
    for(i=0; i<players.length; i++){
        $('#divOrderNumber').append($("<ol></ol>").text((i+1)+'. '));
        $('#divOrderPlayer').append($("<ol></ol>").text(players[i]));
        $('#divOrderColor').append($("<div></div>").addClass(colors[i]));
        $('#divOrderCommander').append($("<ol></ol>").text(pickedCommanders[i]));
    }
    $('#PlayerModalLobby').hide();
    $('#btnCreateNewGame').show();
});

/*---------------------------------- BTNS IN MODAL THAT LETS PLAYER RANDOMLY REROLL COMMANDER IN LOBBY AFTER RANDOMIZE (PROLLY WILL HAVE TO REFACTOR) ----------------------------------*/

$('.reRoll').on('click', '#btnReRoll0', function(e) {
    e.preventDefault();
    $('#btnReRoll0').addClass('disabled').attr("disabled", "disabled");
    $('#olLobbyCommander0').empty();
    $('#olLobbyCommander0').text(randomReRoll(0));
});

$('.reRoll').on('click', '#btnReRoll1', function(e) {
    e.preventDefault();
    $('#btnReRoll1').addClass('disabled').attr("disabled", "disabled");
    $('#olLobbyCommander1').empty();
    $('#olLobbyCommander1').text(randomReRoll(1));
});

$('.reRoll').on('click', '#btnReRoll2', function(e) {
    e.preventDefault();
    $('#btnReRoll2').addClass('disabled').attr("disabled", "disabled");
    $('#olLobbyCommander2').empty();
    $('#olLobbyCommander2').text(randomReRoll(2));
});

$('.reRoll').on('click', '#btnReRoll3', function(e) {
    e.preventDefault();
    $('#btnReRoll3').addClass('disabled').attr("disabled", "disabled");
    $('#olLobbyCommander3').empty();
    $('#olLobbyCommander3').text(randomReRoll(3));
});

$('.reRoll').on('click', '#btnReRoll4', function(e) {
    e.preventDefault();
    $('#btnReRoll4').addClass('disabled').attr("disabled", "disabled");
    $('#olLobbyCommander4').empty();
    $('#olLobbyCommander4').text(randomReRoll(4));
});

/*---------------------------------- BTN IN MODAL THAT LETS PEOPLE PICK COMMANDERS THEMSELVES ----------------------------------*/
$('#pickCommander').click(function() {
    event.preventDefault();
    $('#arrowPick').fadeIn( 400 );
    $('#players').modal('hide');
    $('.playerPickPlayer').text(players[0]);
    $('.playerPickColor').addClass(colors[0]);
    $('.playerPickMainScreen').fadeIn( 400 );
    $('.playerPickMainScreen').css('display', 'inline-block');
    $('#randomizeCommander').hide();
    $('#pickCommander').hide();
});

/*---------------------------------- BORDER AND PICKED COMMANDER ARRAY ON CLICK (PROLLY WILL HAVE TO REFACTOR) ----------------------------------*/
$('#commander1').click(function() {
    event.preventDefault();
    $('#commander1').addClass(pickedBorder[j]);
    pickedCommanders[j]=$('#value1').text();
    $('#commanderLobby').append($("<ol></ol>").text(pickedCommanders[j]));
    $('.playerPickPlayer').empty();
    $('.playerPickColor').removeClass(colors[j]);
    j++;
    if(j<players.length){
        $('.playerPickPlayer').text(players[j]);
        $('.playerPickColor').addClass(colors[j]);
    } else {
        $('#players').modal('show');
    }
    $('#btnRandomizeOrder').show();
});

$('#commander2').click(function() {
    event.preventDefault();
    $('#commander2').addClass(pickedBorder[j]);
    pickedCommanders[j]=$('#value2').text();
    $('#commanderLobby').append($("<ol></ol>").text(pickedCommanders[j]));
    $('.playerPickPlayer').empty();
    $('.playerPickColor').removeClass(colors[j]);
    j++;
    if(j<players.length){
        $('.playerPickPlayer').text(players[j]);
        $('.playerPickColor').addClass(colors[j]);
    } else {
        $('#players').modal('show');
    }
});

$('#commander3').click(function() {
    event.preventDefault();
    $('#commander3').addClass(pickedBorder[j]);
    pickedCommanders[j]=$('#value3').text();
    $('#commanderLobby').append($("<ol></ol>").text(pickedCommanders[j]));
    $('.playerPickPlayer').empty();
    $('.playerPickColor').removeClass(colors[j]);
    j++;
    if(j<players.length){
        $('.playerPickPlayer').text(players[j]);
        $('.playerPickColor').addClass(colors[j]);
    } else {
        $('#players').modal('show');
    }
});

$('#commander4').click(function() {
    event.preventDefault();
    $('#commander4').addClass(pickedBorder[j]);
    pickedCommanders[j]=$('#value4').text();
    $('#commanderLobby').append($("<ol></ol>").text(pickedCommanders[j]));
    $('.playerPickPlayer').empty();
    $('.playerPickColor').removeClass(colors[j]);
    j++;
    if(j<players.length){
        $('.playerPickPlayer').text(players[j]);
        $('.playerPickColor').addClass(colors[j]);
    } else {
        $('#players').modal('show');
    }
});

$('#commander5').click(function() {
    event.preventDefault();
    $('#commander5').addClass(pickedBorder[j]);
    pickedCommanders[j]=$('#value5').text();
    $('#commanderLobby').append($("<ol></ol>").text(pickedCommanders[j]));
    $('.playerPickPlayer').empty();
    $('.playerPickColor').removeClass(colors[j]);
    j++;
    if(j<players.length){
        $('.playerPickPlayer').text(players[j]);
        $('.playerPickColor').addClass(colors[j]);
    } else {
        $('#players').modal('show');
    }
});
/*---------------------------------- /BORDER AND PICKED COMMANDER ARRAY ON CLICK (PROLLY WILL HAVE TO REFACTOR) ----------------------------------*/

/*---------------------------------- BTN IN MODAL THAT STARTS A NEW GAME ON A DIFFERENT PAGE ----------------------------------*/
$('#btnCreateNewGame').click(function() {
    window.location.href='game.html';
    return false;
});

/*---------------------------------- FUNCTIONS ----------------------------------*/

//FUNCTION THAT SHUFFLES ARRAY THAT IS PASSED IN IT AND RETURNS A SHUFFLED ONE
function shuffle(array) {

    var tempVrijednost;
    var randomBroj;

    for (var i = 0; i < array.length; i++) {
        randomBroj = Math.floor(Math.random() * ((array.length - 1) - 0 + 1)) + 0;
        tempVrijednost = array[i];
        array[i] = array[randomBroj];
        array[randomBroj] = tempVrijednost;
    }
    return array;
}

//FUNCTION THAT SHUFFLES ARRAYs THAT IS PASSED IN IT AND RETURNS A 2D ARRAY WITH ALL THE INFO NEEDED
function shufflePlayers(array1, array2, array3) {

    var tempVrijednost1;
    var tempVrijednost2;
    var tempVrijednost3;
    var randomBroj;

    for (var i = 0; i < array1.length; i++) {
        randomBroj = Math.floor(Math.random() * ((array1.length - 1) - 0 + 1)) + 0;
        tempVrijednost1 = array1[i];
        tempVrijednost2 = array2[i];
        tempVrijednost3 = array3[i];
        array1[i] = array1[randomBroj];
        array2[i] = array2[randomBroj];
        array3[i] = array3[randomBroj];
        array1[randomBroj] = tempVrijednost1;
        array2[randomBroj] = tempVrijednost2;
        array3[randomBroj] = tempVrijednost3;
    }
    gameArr=[array1, array2, array3];
    return gameArr;
}

//FUNCTION THAT LETS INDIVIDUAL PLAYERS REROLL A COMMANDER
function randomReRoll(index){
    pickedCommanders[index]='';
    do{
        var reRollIndex = Math.floor(Math.random() * ((commanders.length - 1) - 0 + 1)) + 0;
        if(pickedCommanders.indexOf(commanders[reRollIndex])<0){
            pickedCommanders[index]=commanders[reRollIndex];
        }
    } while(pickedCommanders.indexOf(commanders[reRollIndex])>0);
    return pickedCommanders[index];
}


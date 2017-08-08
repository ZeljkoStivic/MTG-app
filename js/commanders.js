/*---------------------------------- VARIABLES----------------------------------*/

var players=[];
var colors=['red', 'blue', 'yellow', 'green', 'black', 'violet'];
var commanders=['Jori En Ruin Diver', 'Sidisi Brood Tyrant', 'Yasova Dragonclaw', 'Alesha Who Smiles at Death', 'Derevi Empyrial Tactician', 'Prossh Skyraider of Kher'];
var pickedBorder=['firstPickBorder', 'secondPickBorder', 'thirdPickBorder', 'fourthPickBorder', 'fifthPickBorder', 'sixthPickBorder'];
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
    $('#PlayerModalLobby').hide();
    $('#divPlayOrder').hide();
    $('#btnRandomizeOrder').hide();
    for(var k=0; k<pickedBorder.length; k++){
        $('#commander1').removeClass(pickedBorder[k]);
        $('#commander2').removeClass(pickedBorder[k]);
        $('#commander3').removeClass(pickedBorder[k]);
        $('#commander4').removeClass(pickedBorder[k]);
        $('#commander5').removeClass(pickedBorder[k]);
        $('#commander6').removeClass(pickedBorder[k]);
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
    $('#PlayerModalLobby').show();
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

/*---------------------------------- BTNS IN MODAL THAT LETS PLAYER RANDOMLY REROLL COMMANDER IN LOBBY AFTER RANDOMIZE ----------------------------------*/
function ReRoll(index){
    $('.reRoll').on('click', '#btnReRoll'+index, function(e) {
        e.preventDefault();
        $('#btnReRoll'+index).addClass('disabled').attr("disabled", "disabled");
        $('#olLobbyCommander'+index).empty();
        $('#olLobbyCommander'+index).text(randomReRoll(index));
    });
}

ReRoll(0);
ReRoll(1);
ReRoll(2);
ReRoll(3);
ReRoll(4);
ReRoll(5);

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

/*---------------------------------- BORDER AND PICKED COMMANDER ARRAY ON CLICK ----------------------------------*/
function pickedCommander(index) {
    $('#commander'+index).click(function() {
        event.preventDefault();
        $('#commander'+index).addClass(pickedBorder[j]);
        pickedCommanders[j]=$('#value'+index).text();
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
}

pickedCommander(1);
pickedCommander(2);
pickedCommander(3);
pickedCommander(4);
pickedCommander(5);
pickedCommander(6);

/*---------------------------------- BTN IN MODAL THAT RANDOMIZES ORDER  ----------------------------------*/
$('#btnRandomizeOrder').click(function() {
    event.preventDefault();
    $.removeCookie('players', { path: '/' });
    $.removeCookie('colors', { path: '/' });
    $.removeCookie('pickedCommanders', { path: '/' });
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
    $('#divPlayOrder').show();
    $('#btnCreateNewGame').show();
});

/*---------------------------------- CUTS TEXT IN COMMANDER CARD IF ITS MORE THAN 250CHARS  ----------------------------------*/
$('.card-text').each(function() {
    var maxchars = 250;
    var seperator = '...';

    if ($(this).text().length > (maxchars - seperator.length)) {
        $(this).text($(this).text().substr(0, maxchars-seperator.length) + seperator);
    }
});

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



/*---------------------------------- VARIABLES----------------------------------*/
var players = $.cookie('players');
var colors = $.cookie('colors');
var pickedCommanders = $.cookie('pickedCommanders');
var hp=[];
var commanderHp=[];
var placementArr=[];

//if($.cookie('players') == undefined ){
//    players=window.playersFromCommander;
//} else {
    players = players.split(',');
//}
colors = colors.split(',');
colors.length=players.length;
pickedCommanders = pickedCommanders.split(',');

for(var playerIndex=0; playerIndex<players.length; playerIndex++){
    hp[playerIndex]=30;
}

for(var playerIndex=0; playerIndex<players.length; playerIndex++){
    for(var commanderIndex=0; commanderIndex<pickedCommanders.length; commanderIndex++){
        commanderHp[playerIndex]=[];
    }
}

for(var playerIndex=0; playerIndex<players.length; playerIndex++){
    for(var commanderIndex=0; commanderIndex<pickedCommanders.length; commanderIndex++){
        commanderHp[playerIndex][commanderIndex]=15;
    }
}

/*---------------------------------- /VARIABLES----------------------------------*/

/*---------------------------------- TABLE CREATION----------------------------------*/

function tableCreationGridAndPlayerName() {
    $('#tables').append($("<div></div>").addClass('tableDiv'+playerIndex));
    $('.tableDiv'+playerIndex).append($("<table></table>").addClass('table'+playerIndex).attr("border", "1"));
    $('.table'+playerIndex).append($("<thead></thead>").addClass('thead'+playerIndex));
    $('.thead'+playerIndex).append($("<tr></tr>").addClass('tableRow'+playerIndex));
    $('.tableRow'+playerIndex).append($("<th></th>"));
    $('.tableRow'+playerIndex).append($("<th></th>").text(players[playerIndex]));
}

function tableCreatingGrindAndCommanderName() {
    pickedCommanders.forEach(function(commander, index) {
        if(playerIndex != index){
            $('.tableRow'+playerIndex).append($("<th></th>").text(players[index] + ' - ' + commander));
        }
    });
}

function tableCreationGridAndPlayerHp(){
    $('.table'+playerIndex).append($("<tbody></tbody>").addClass('tbody'+playerIndex));
    $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
    $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
    $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
}

function tableCreationGridAndCommanderHp() {
    pickedCommanders.forEach(function(commander, index) {
        if(playerIndex != index){
            $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
        }
    });
}

function tableCreationHpButtons() {

    $('.tableDiv'+playerIndex).append($("<button></button>").addClass('btn btn-success btn-sm dec1HpPlayer'+playerIndex).text('- 1'));
    $('.tableDiv'+playerIndex).append($("<button></button>").addClass('btn btn-success btn-sm spearator inc1HpPlayer'+playerIndex).text('+ 1'));
    pickedCommanders.forEach(function(commander, index) {
        if(playerIndex != index) {
            $('.tableDiv' + playerIndex).append($("<button></button>").addClass('btn btn-success btn-sm dec1Player' + playerIndex + 'Com' + index).text('- 1C' + (index + 1)));
            $('.tableDiv' + playerIndex).append($("<button></button>").addClass('btn btn-success btn-sm spearator inc1Player' + playerIndex + 'Com' + index).text('+ 1C' + (index + 1)));
        }
    });
    $('.tableDiv'+playerIndex).append($("<div></div>"));
    $('.tableDiv'+playerIndex).append($("<button></button>").addClass('btn btn-success btn-sm dec5HpPlayer'+playerIndex).text('- 5'));
    $('.tableDiv'+playerIndex).append($("<button></button>").addClass('btn btn-success btn-sm spearator inc5HpPlayer'+playerIndex).text('+ 5'));
        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableDiv' + playerIndex).append($("<button></button>").addClass('btn btn-success btn-sm dec5Player' + playerIndex + 'Com' + index).text('- 5C' + (index + 1)));
                $('.tableDiv' + playerIndex).append($("<button></button>").addClass('btn btn-success btn-sm spearator inc5Player' + playerIndex + 'Com' + index).text('+ 5C' + (index + 1)));
            }
        });
}

for(var playerIndex=0; playerIndex<players.length; playerIndex++){
    tableCreationGridAndPlayerName();
    tableCreatingGrindAndCommanderName();
    tableCreationGridAndPlayerHp();
    tableCreationGridAndCommanderHp();
    tableCreationHpButtons();
}

/*---------------------------------- /TABLE CREATION----------------------------------*/

/*---------------------------------- COMMANDER BUTTONS----------------------------------*/

function dec1PlayerIndexComIndex(name, playerIndex, commanderIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] - 1;
        if(hp[playerIndex] <= 0){
            $('.tableDiv'+playerIndex).css("display", "none");
            placementArr.unshift(players[playerIndex]);
        }
        commanderHp[playerIndex][commanderIndex]= commanderHp[playerIndex][commanderIndex] - 1;
        if(commanderHp[playerIndex][commanderIndex] <= 0){
            $('.tableDiv'+playerIndex).css("display", "none");
            placementArr.unshift(players[playerIndex]);
        }
        if(placementArr.length == players.length-1){
            players.forEach(function(player) {
                if(placementArr.indexOf(player)<0){
                    placementArr.unshift(player);
                }
            });
            for(placementArrIndex=0; placementArrIndex<placementArr.length; placementArrIndex++){
                $('#placement').append($("<ol></ol>").text((1+placementArrIndex)+'. Place  '+placementArr[placementArrIndex]));
            }
            $('#placementModal').modal('show');
        }
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));

        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
            }
        });
    });
}

function inc1PlayerIndexComIndex(name, playerIndex, commanderIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] + 1;
        if(hp[playerIndex]>=30){
            hp[playerIndex]=30;
        }
        commanderHp[playerIndex][commanderIndex]= commanderHp[playerIndex][commanderIndex] + 1;
        if(commanderHp[playerIndex][commanderIndex]>=15){
            commanderHp[playerIndex][commanderIndex]=15;
        }
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));

        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
            }
        });
    });
}

function dec5PlayerIndexComIndex(name, playerIndex, commanderIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] - 5;
        if(hp[playerIndex] <= 0){
            $('.tableDiv'+playerIndex).css("display", "none");
            placementArr.unshift(players[playerIndex]);
        }
        commanderHp[playerIndex][commanderIndex]= commanderHp[playerIndex][commanderIndex] - 5;
        if(commanderHp[playerIndex][commanderIndex] <= 0){
            $('.tableDiv'+playerIndex).css("display", "none");
            placementArr.unshift(players[playerIndex]);
        }
        if(placementArr.length == players.length-1){
            players.forEach(function(player) {
                if(placementArr.indexOf(player)<0){
                    placementArr.unshift(player);
                }
            });
            for(placementArrIndex=0; placementArrIndex<placementArr.length; placementArrIndex++){
                $('#placement').append($("<ol></ol>").text((1+placementArrIndex)+'. Place  '+placementArr[placementArrIndex]));
            }
            $('#placementModal').modal('show');
        }
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));

        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
            }
        });
    });
}

function inc5PlayerIndexComIndex(name, playerIndex, commanderIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] + 5;
        if(hp[playerIndex]>=30){
            hp[playerIndex]=30;
        }
        commanderHp[playerIndex][commanderIndex]= commanderHp[playerIndex][commanderIndex] + 5;
        if(commanderHp[playerIndex][commanderIndex]>=15){
            commanderHp[playerIndex][commanderIndex]=15;
        }
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));

        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
            }
        });
    });
}

for(var playerIndex=0; playerIndex<players.length; playerIndex++){
    for(var commanderIndex=0; commanderIndex<players.length; commanderIndex++) {
        dec1PlayerIndexComIndex('dec1Player'+playerIndex+'Com'+commanderIndex, playerIndex, commanderIndex);
        inc1PlayerIndexComIndex('inc1Player'+playerIndex+'Com'+commanderIndex, playerIndex, commanderIndex);
        dec5PlayerIndexComIndex('dec5Player'+playerIndex+'Com'+commanderIndex, playerIndex, commanderIndex);
        inc5PlayerIndexComIndex('inc5Player'+playerIndex+'Com'+commanderIndex, playerIndex, commanderIndex);
    }
}

/*---------------------------------- /COMMANDER BUTTONS----------------------------------*/

/*---------------------------------- HP BUTTONS----------------------------------*/

function dec1HpPlayerIndex(name, playerIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] - 1;
        if(hp[playerIndex] <= 0){
            $('.tableDiv'+playerIndex).css("display", "none");
            placementArr.unshift(players[playerIndex]);
        }
        if(placementArr.length == players.length-1){
            players.forEach(function(player) {
                if(placementArr.indexOf(player)<0){
                    placementArr.unshift(player);
                }
            });
            for(placementArrIndex=0; placementArrIndex<placementArr.length; placementArrIndex++){
                $('#placement').append($("<ol></ol>").text((1+placementArrIndex)+'. Place  '+placementArr[placementArrIndex]));
            }
            $('#placementModal').modal('show');
        }
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
            }
        });
    });
}

function inc1HpPlayerIndex(name, playerIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] + 1;
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
            }
        });
    });
}

function dec5HpPlayerIndex(name, playerIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] - 5;
        if(hp[playerIndex] <= 0){
            $('.tableDiv'+playerIndex).css("display", "none");
            placementArr.unshift(players[playerIndex]);
        }
        if(placementArr.length == players.length-1){
            players.forEach(function(player) {
                if(placementArr.indexOf(player)<0){
                    placementArr.unshift(player);
                }
            });
            for(placementArrIndex=0; placementArrIndex<placementArr.length; placementArrIndex++){
                $('#placement').append($("<ol></ol>").text((1+placementArrIndex)+'. Place  '+placementArr[placementArrIndex]));
            }
            $('#placementModal').modal('show');
        }
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
            }
        });
    });
}

function inc5HpPlayerIndex(name, playerIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] + 5;
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
        pickedCommanders.forEach(function(commander, index) {
            if(playerIndex != index){
                $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][index]));
            }
        });
    });
}
for(var playerIndex=0; playerIndex<players.length; playerIndex++){
    dec1HpPlayerIndex('dec1HpPlayer'+playerIndex, playerIndex);
    inc1HpPlayerIndex('inc1HpPlayer'+playerIndex, playerIndex);
    dec5HpPlayerIndex('dec5HpPlayer'+playerIndex, playerIndex);
    inc5HpPlayerIndex('inc5HpPlayer'+playerIndex, playerIndex);
}

/*---------------------------------- /HP BUTTONS----------------------------------*/




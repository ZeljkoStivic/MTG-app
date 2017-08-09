/*---------------------------------- VARIABLES----------------------------------*/
var players = $.cookie('players');
var colors = $.cookie('colors');
var pickedCommanders = $.cookie('pickedCommanders');
var hp=[];
var commanderHp=[];
var placementArr=[];

players = players.split(',');
colors = colors.split(',');
colors.length=players.length;
pickedCommanders = pickedCommanders.split(',');

for(i=0; i<pickedCommanders.length; i++){
    hp[i]=30;
}

for(i=0; i<pickedCommanders.length; i++){
    for(j=0; j<pickedCommanders.length; j++){
        commanderHp[i]=[];
    }
}

for(i=0; i<pickedCommanders.length; i++){
    for(j=0; j<pickedCommanders.length; j++){
        commanderHp[i][j]=15;
    }
}

/*---------------------------------- /VARIABLES----------------------------------*/

/*---------------------------------- TABLE CREATION----------------------------------*/

function tableCreationGridAndPlayerName() {
    $('#tables').append($("<div></div>").addClass('tableDiv'+playerIndex));
    $('.tableDiv'+playerIndex).append($("<table></table>").addClass('table'+playerIndex));
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

function tableCreationPlayerHpButtons() {
    $('.tableDiv'+playerIndex).append($("<button></button>").addClass('btn btn-primary btn-sm dec1HpPlayer'+playerIndex).text('- 1'));
    $('.tableDiv'+playerIndex).append($("<button></button>").addClass('btn btn-primary btn-sm inc1HpPlayer'+playerIndex).text('+ 1'));
    $('.tableDiv'+playerIndex).append($("<div></div>"));
    $('.tableDiv'+playerIndex).append($("<button></button>").addClass('btn btn-primary btn-sm dec5HpPlayer'+playerIndex).text('- 5'));
    $('.tableDiv'+playerIndex).append($("<button></button>").addClass('btn btn-primary btn-sm inc5HpPlayer'+playerIndex).text('+ 5'));
}

function tableCreationCommanderHpButtons() {
    pickedCommanders.forEach(function(commander, index) {
        if(playerIndex != index){
            $('.tableDiv' + playerIndex).append($("<div></div>"));
            $('.tableDiv' + playerIndex).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player' + playerIndex + 'Com' + index).text('- 1C' + (index + 1)));
            $('.tableDiv' + playerIndex).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player' + playerIndex + 'Com' + index).text('+ 1C' + (index + 1)));
            $('.tableDiv' + playerIndex).append($("<div></div>"));
            $('.tableDiv' + playerIndex).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player' + playerIndex + 'Com' + index).text('- 5C' + (index + 1)));
            $('.tableDiv' + playerIndex).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player' + playerIndex + 'Com' + index).text('+ 5C' + (index + 1)));
        }
    });
}

for(var playerIndex=0; playerIndex<players.length; playerIndex++){
    tableCreationGridAndPlayerName();
    tableCreatingGrindAndCommanderName();
    tableCreationGridAndPlayerHp();
    tableCreationGridAndCommanderHp();
    tableCreationPlayerHpButtons();
    tableCreationCommanderHpButtons();
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
            for(i=0; i<placementArr.length; i++){
                $('#placement').append($("<ol></ol>").text((1+i)+'. Place  '+placementArr[i]));
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
            for(i=0; i<placementArr.length; i++){
                $('#placement').append($("<ol></ol>").text((1+i)+'. Place  '+placementArr[i]));
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
            for(i=0; i<placementArr.length; i++){
                $('#placement').append($("<ol></ol>").text((1+i)+'. Place  '+placementArr[i]));
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
            for(i=0; i<placementArr.length; i++){
                $('#placement').append($("<ol></ol>").text((1+i)+'. Place  '+placementArr[i]));
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

/*---------------------------------- PLACEMENT MODAL----------------------------------*/



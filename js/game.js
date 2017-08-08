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

for(playerIndex=0; playerIndex<players.length; playerIndex++){
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

        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
        for(i=0; i<pickedCommanders.length; i++){
            if(playerIndex==0){
                if(i==0){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==1){
                if(i==1){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==2){
                if(i==2){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==3){
                if(i==3){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==4){
                if(i==4){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==5){
                if(i==5){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==6){
                if(i==6){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
        }
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
        for(i=0; i<pickedCommanders.length; i++){
            if(playerIndex==0){
                if(i==0){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==1){
                if(i==1){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==2){
                if(i==2){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==3){
                if(i==3){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==4){
                if(i==4){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==5){
                if(i==5){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==6){
                if(i==6){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
        }
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
        if(placementArr.length == players.length){
            for(i=0; i<placementArr.length; i++){
                $('#placement').append($("<ol></ol>").text((1+i)+'. Place  '+placementArr[i]));
            }
            $('#placementModal').modal('show');
        }
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
        for(i=0; i<pickedCommanders.length; i++){
            if(playerIndex==0){
                if(i==0){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==1){
                if(i==1){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==2){
                if(i==2){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==3){
                if(i==3){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==4){
                if(i==4){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==5){
                if(i==5){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==6){
                if(i==6){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
        }
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
        for(i=0; i<pickedCommanders.length; i++){
            if(playerIndex==0){
                if(i==0){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==1){
                if(i==1){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==2){
                if(i==2){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==3){
                if(i==3){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==4){
                if(i==4){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==5){
                if(i==5){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==6){
                if(i==6){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                    }
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
        }
    });
}

dec1PlayerIndexComIndex('dec1Player0Com0', 0, 0);
dec1PlayerIndexComIndex('dec1Player0Com1', 0, 1);
dec1PlayerIndexComIndex('dec1Player0Com2', 0, 2);
dec1PlayerIndexComIndex('dec1Player0Com3', 0, 3);
dec1PlayerIndexComIndex('dec1Player0Com4', 0, 4);
dec1PlayerIndexComIndex('dec1Player0Com5', 0, 5);

dec1PlayerIndexComIndex('dec1Player1Com0', 1, 0);
dec1PlayerIndexComIndex('dec1Player1Com1', 1, 1);
dec1PlayerIndexComIndex('dec1Player1Com2', 1, 2);
dec1PlayerIndexComIndex('dec1Player1Com3', 1, 3);
dec1PlayerIndexComIndex('dec1Player1Com4', 1, 4);
dec1PlayerIndexComIndex('dec1Player1Com5', 1, 5);

dec1PlayerIndexComIndex('dec1Player2Com0', 2, 0);
dec1PlayerIndexComIndex('dec1Player2Com1', 2, 1);
dec1PlayerIndexComIndex('dec1Player2Com2', 2, 2);
dec1PlayerIndexComIndex('dec1Player2Com3', 2, 3);
dec1PlayerIndexComIndex('dec1Player2Com4', 2, 4);
dec1PlayerIndexComIndex('dec1Player2Com5', 2, 5);

dec1PlayerIndexComIndex('dec1Player3Com0', 3, 0);
dec1PlayerIndexComIndex('dec1Player3Com1', 3, 1);
dec1PlayerIndexComIndex('dec1Player3Com2', 3, 2);
dec1PlayerIndexComIndex('dec1Player3Com3', 3, 3);
dec1PlayerIndexComIndex('dec1Player3Com4', 3, 4);
dec1PlayerIndexComIndex('dec1Player3Com5', 3, 5);

dec1PlayerIndexComIndex('dec1Player4Com0', 4, 0);
dec1PlayerIndexComIndex('dec1Player4Com1', 4, 1);
dec1PlayerIndexComIndex('dec1Player4Com2', 4, 2);
dec1PlayerIndexComIndex('dec1Player4Com3', 4, 3);
dec1PlayerIndexComIndex('dec1Player4Com4', 4, 4);
dec1PlayerIndexComIndex('dec1Player4Com5', 4, 5);

dec1PlayerIndexComIndex('dec1Player5Com0', 5, 0);
dec1PlayerIndexComIndex('dec1Player5Com1', 5, 1);
dec1PlayerIndexComIndex('dec1Player5Com2', 5, 2);
dec1PlayerIndexComIndex('dec1Player5Com3', 5, 3);
dec1PlayerIndexComIndex('dec1Player5Com4', 5, 4);
dec1PlayerIndexComIndex('dec1Player5Com5', 5, 5);



inc1PlayerIndexComIndex('inc1Player0Com0', 0, 0);
inc1PlayerIndexComIndex('inc1Player0Com1', 0, 1);
inc1PlayerIndexComIndex('inc1Player0Com2', 0, 2);
inc1PlayerIndexComIndex('inc1Player0Com3', 0, 3);
inc1PlayerIndexComIndex('inc1Player0Com4', 0, 4);
inc1PlayerIndexComIndex('inc1Player0Com5', 0, 5);

inc1PlayerIndexComIndex('inc1Player1Com0', 1, 0);
inc1PlayerIndexComIndex('inc1Player1Com1', 1, 1);
inc1PlayerIndexComIndex('inc1Player1Com2', 1, 2);
inc1PlayerIndexComIndex('inc1Player1Com3', 1, 3);
inc1PlayerIndexComIndex('inc1Player1Com4', 1, 4);
inc1PlayerIndexComIndex('inc1Player1Com5', 1, 5);

inc1PlayerIndexComIndex('inc1Player2Com0', 2, 0);
inc1PlayerIndexComIndex('inc1Player2Com1', 2, 1);
inc1PlayerIndexComIndex('inc1Player2Com2', 2, 2);
inc1PlayerIndexComIndex('inc1Player2Com3', 2, 3);
inc1PlayerIndexComIndex('inc1Player2Com4', 2, 4);
inc1PlayerIndexComIndex('inc1Player2Com5', 2, 5);

inc1PlayerIndexComIndex('inc1Player3Com0', 3, 0);
inc1PlayerIndexComIndex('inc1Player3Com1', 3, 1);
inc1PlayerIndexComIndex('inc1Player3Com2', 3, 2);
inc1PlayerIndexComIndex('inc1Player3Com3', 3, 3);
inc1PlayerIndexComIndex('inc1Player3Com4', 3, 4);
inc1PlayerIndexComIndex('inc1Player3Com5', 3, 5);

inc1PlayerIndexComIndex('inc1Player4Com0', 4, 0);
inc1PlayerIndexComIndex('inc1Player4Com1', 4, 1);
inc1PlayerIndexComIndex('inc1Player4Com2', 4, 2);
inc1PlayerIndexComIndex('inc1Player4Com3', 4, 3);
inc1PlayerIndexComIndex('inc1Player4Com4', 4, 4);
inc1PlayerIndexComIndex('inc1Player4Com5', 4, 5);

inc1PlayerIndexComIndex('inc1Player5Com0', 5, 0);
inc1PlayerIndexComIndex('inc1Player5Com1', 5, 1);
inc1PlayerIndexComIndex('inc1Player5Com2', 5, 2);
inc1PlayerIndexComIndex('inc1Player5Com3', 5, 3);
inc1PlayerIndexComIndex('inc1Player5Com4', 5, 4);
inc1PlayerIndexComIndex('inc1Player5Com5', 5, 5);



dec5PlayerIndexComIndex('dec5Player0Com0', 0, 0);
dec5PlayerIndexComIndex('dec5Player0Com1', 0, 1);
dec5PlayerIndexComIndex('dec5Player0Com2', 0, 2);
dec5PlayerIndexComIndex('dec5Player0Com3', 0, 3);
dec5PlayerIndexComIndex('dec5Player0Com4', 0, 4);
dec5PlayerIndexComIndex('dec5Player0Com5', 0, 5);

dec5PlayerIndexComIndex('dec5Player1Com0', 1, 0);
dec5PlayerIndexComIndex('dec5Player1Com1', 1, 1);
dec5PlayerIndexComIndex('dec5Player1Com2', 1, 2);
dec5PlayerIndexComIndex('dec5Player1Com3', 1, 3);
dec5PlayerIndexComIndex('dec5Player1Com4', 1, 4);
dec5PlayerIndexComIndex('dec5Player1Com5', 1, 5);

dec5PlayerIndexComIndex('dec5Player2Com0', 2, 0);
dec5PlayerIndexComIndex('dec5Player2Com1', 2, 1);
dec5PlayerIndexComIndex('dec5Player2Com2', 2, 2);
dec5PlayerIndexComIndex('dec5Player2Com3', 2, 3);
dec5PlayerIndexComIndex('dec5Player2Com4', 2, 4);
dec5PlayerIndexComIndex('dec5Player2Com5', 2, 5);

dec5PlayerIndexComIndex('dec5Player3Com0', 3, 0);
dec5PlayerIndexComIndex('dec5Player3Com1', 3, 1);
dec5PlayerIndexComIndex('dec5Player3Com2', 3, 2);
dec5PlayerIndexComIndex('dec5Player3Com3', 3, 3);
dec5PlayerIndexComIndex('dec5Player3Com4', 3, 4);
dec5PlayerIndexComIndex('dec5Player3Com5', 3, 5);

dec5PlayerIndexComIndex('dec5Player4Com0', 4, 0);
dec5PlayerIndexComIndex('dec5Player4Com1', 4, 1);
dec5PlayerIndexComIndex('dec5Player4Com2', 4, 2);
dec5PlayerIndexComIndex('dec5Player4Com3', 4, 3);
dec5PlayerIndexComIndex('dec5Player4Com4', 4, 4);
dec5PlayerIndexComIndex('dec5Player4Com5', 4, 5);

dec5PlayerIndexComIndex('dec5Player5Com0', 5, 0);
dec5PlayerIndexComIndex('dec5Player5Com1', 5, 1);
dec5PlayerIndexComIndex('dec5Player5Com2', 5, 2);
dec5PlayerIndexComIndex('dec5Player5Com3', 5, 3);
dec5PlayerIndexComIndex('dec5Player5Com4', 5, 4);
dec5PlayerIndexComIndex('dec5Player5Com5', 5, 5);



inc5PlayerIndexComIndex('inc5Player0Com0', 0, 0);
inc5PlayerIndexComIndex('inc5Player0Com1', 0, 1);
inc5PlayerIndexComIndex('inc5Player0Com2', 0, 2);
inc5PlayerIndexComIndex('inc5Player0Com3', 0, 3);
inc5PlayerIndexComIndex('inc5Player0Com4', 0, 4);
inc5PlayerIndexComIndex('inc5Player0Com5', 0, 5);

inc5PlayerIndexComIndex('inc5Player1Com0', 1, 0);
inc5PlayerIndexComIndex('inc5Player1Com1', 1, 1);
inc5PlayerIndexComIndex('inc5Player1Com2', 1, 2);
inc5PlayerIndexComIndex('inc5Player1Com3', 1, 3);
inc5PlayerIndexComIndex('inc5Player1Com4', 1, 4);
inc5PlayerIndexComIndex('inc5Player1Com5', 1, 5);

inc5PlayerIndexComIndex('inc5Player2Com0', 2, 0);
inc5PlayerIndexComIndex('inc5Player2Com1', 2, 1);
inc5PlayerIndexComIndex('inc5Player2Com2', 2, 2);
inc5PlayerIndexComIndex('inc5Player2Com3', 2, 3);
inc5PlayerIndexComIndex('inc5Player2Com4', 2, 4);
inc5PlayerIndexComIndex('inc5Player2Com5', 2, 5);

inc5PlayerIndexComIndex('inc5Player3Com0', 3, 0);
inc5PlayerIndexComIndex('inc5Player3Com1', 3, 1);
inc5PlayerIndexComIndex('inc5Player3Com2', 3, 2);
inc5PlayerIndexComIndex('inc5Player3Com3', 3, 3);
inc5PlayerIndexComIndex('inc5Player3Com4', 3, 4);
inc5PlayerIndexComIndex('inc5Player3Com5', 3, 5);

inc5PlayerIndexComIndex('inc5Player4Com0', 4, 0);
inc5PlayerIndexComIndex('inc5Player4Com1', 4, 1);
inc5PlayerIndexComIndex('inc5Player4Com2', 4, 2);
inc5PlayerIndexComIndex('inc5Player4Com3', 4, 3);
inc5PlayerIndexComIndex('inc5Player4Com4', 4, 4);
inc5PlayerIndexComIndex('inc5Player4Com5', 4, 5);

inc5PlayerIndexComIndex('inc5Player5Com0', 5, 0);
inc5PlayerIndexComIndex('inc5Player5Com1', 5, 1);
inc5PlayerIndexComIndex('inc5Player5Com2', 5, 2);
inc5PlayerIndexComIndex('inc5Player5Com3', 5, 3);
inc5PlayerIndexComIndex('inc5Player5Com4', 5, 4);
inc5PlayerIndexComIndex('inc5Player5Com5', 5, 5);

/*---------------------------------- COMMANDER BUTTONS----------------------------------*/

/*---------------------------------- HP BUTTONS----------------------------------*/

function dec1HpPlayerIndex(name, index){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[index] = hp[index] - 1;
        if(hp[index] <= 0){
            $('.tableDiv'+index).css("display", "none");
            placementArr.unshift(players[index]);
        }

        $('.tbody'+index).empty();
        $('.tbody'+index).append($("<tr></tr>").addClass('tableRowBody'+index));
        $('.tableRowBody'+index).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+index).append($("<td></td>").text(hp[index]));
        for(i=0; i<pickedCommanders.length; i++){
            if(index==0){
                if(i==0){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==1){
                if(i==1){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==2){
                if(i==2){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==3){
                if(i==3){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==4){
                if(i==4){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==5){
                if(i==5){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==6){
                if(i==6){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
        }
    });
}

function inc1HpPlayerIndex(name, index){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[index] = hp[index] + 1;
        if(hp[index]>=30){
            hp[index]=30;
        }
        $('.tbody'+index).empty();
        $('.tbody'+index).append($("<tr></tr>").addClass('tableRowBody'+index));
        $('.tableRowBody'+index).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+index).append($("<td></td>").text(hp[index]));
        for(i=0; i<pickedCommanders.length; i++){
            if(index==0){
                if(i==0){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==1){
                if(i==1){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==2){
                if(i==2){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==3){
                if(i==3){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==4){
                if(i==4){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==5){
                if(i==5){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==6){
                if(i==6){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
        }
    });
}

function dec5HpPlayerIndex(name, index){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[index] = hp[index] - 5;
        if(hp[index] <= 0){
            $('.tableDiv'+index).css("display", "none");
            placementArr.unshift(players[index]);
        }
        $('.tbody'+index).empty();
        $('.tbody'+index).append($("<tr></tr>").addClass('tableRowBody'+index));
        $('.tableRowBody'+index).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+index).append($("<td></td>").text(hp[index]));
        for(i=0; i<pickedCommanders.length; i++){
            if(index==0){
                if(i==0){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==1){
                if(i==1){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==2){
                if(i==2){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==3){
                if(i==3){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==4){
                if(i==4){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==5){
                if(i==5){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==6){
                if(i==6){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
        }
    });
}

function inc5HpPlayerIndex(name, index){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[index] = hp[index] + 5;
        if(hp[index]>=30){
            hp[index]=30;
        }
        $('.tbody'+index).empty();
        $('.tbody'+index).append($("<tr></tr>").addClass('tableRowBody'+index));
        $('.tableRowBody'+index).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+index).append($("<td></td>").text(hp[index]));
        for(i=0; i<pickedCommanders.length; i++){
            if(index==0){
                if(i==0){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==1){
                if(i==1){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==2){
                if(i==2){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==3){
                if(i==3){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==4){
                if(i==4){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==5){
                if(i==5){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==6){
                if(i==6){
                    i++;
                    if(i<pickedCommanders.length) {
                        $('.tableRowBody' + index).append($("<td></td>").text(commanderHp[index][i]));
                    }
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
        }
    });
}

dec1HpPlayerIndex('dec1HpPlayer0', 0);
dec1HpPlayerIndex('dec1HpPlayer1', 1);
dec1HpPlayerIndex('dec1HpPlayer2', 2);
dec1HpPlayerIndex('dec1HpPlayer3', 3);
dec1HpPlayerIndex('dec1HpPlayer4', 4);
dec1HpPlayerIndex('dec1HpPlayer5', 5);

inc1HpPlayerIndex('inc1HpPlayer0', 0);
inc1HpPlayerIndex('inc1HpPlayer1', 1);
inc1HpPlayerIndex('inc1HpPlayer2', 2);
inc1HpPlayerIndex('inc1HpPlayer3', 3);
inc1HpPlayerIndex('inc1HpPlayer4', 4);
inc1HpPlayerIndex('inc1HpPlayer5', 5);

dec5HpPlayerIndex('dec5HpPlayer0', 0);
dec5HpPlayerIndex('dec5HpPlayer1', 1);
dec5HpPlayerIndex('dec5HpPlayer2', 2);
dec5HpPlayerIndex('dec5HpPlayer3', 3);
dec5HpPlayerIndex('dec5HpPlayer4', 4);
dec5HpPlayerIndex('dec5HpPlayer5', 5);

inc5HpPlayerIndex('inc5HpPlayer0', 0);
inc5HpPlayerIndex('inc5HpPlayer1', 1);
inc5HpPlayerIndex('inc5HpPlayer2', 2);
inc5HpPlayerIndex('inc5HpPlayer3', 3);
inc5HpPlayerIndex('inc5HpPlayer4', 4);
inc5HpPlayerIndex('inc5HpPlayer5', 5);

/*---------------------------------- /HP BUTTONS----------------------------------*/

/*---------------------------------- PLACEMENT MODAL----------------------------------*/



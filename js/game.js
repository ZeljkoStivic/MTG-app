/*---------------------------------- VARIABLES----------------------------------*/
var players = $.cookie('players');
var colors = $.cookie('colors');
var pickedCommanders = $.cookie('pickedCommanders');
var hp=[];
var commanderHp=[];

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

for(j=0; j<players.length; j++){
    $('#tables').append($("<div></div>").addClass('tableDiv'+j));
    $('.tableDiv'+j).append($("<table></table>").addClass('table'+j));
    $('.table'+j).append($("<thead></thead>").addClass('thead'+j));
    $('.thead'+j).append($("<tr></tr>").addClass('tableRow'+j));
    $('.tableRow'+j).append($("<th></th>"));
    $('.tableRow'+j).append($("<th></th>").text(players[j]));
    for(i=0; i<pickedCommanders.length; i++){
        if(j==0){
            if(i==0){
            i++;
                $('.tableRow'+j).append($("<th></th>").text(pickedCommanders[i]));
            } else {
                $('.tableRow'+j).append($("<th></th>").text(pickedCommanders[i]));
            }
        }
        if(j==1){
            if(i==1){
                i++;
                $('.tableRow'+j).append($("<th></th>").text(pickedCommanders[i]));
            } else {
                $('.tableRow'+j).append($("<th></th>").text(pickedCommanders[i]));
            }
        }
        if(j==2){
            if(i==2){
                i++;
                $('.tableRow'+j).append($("<th></th>").text(pickedCommanders[i]));
            } else {
                $('.tableRow'+j).append($("<th></th>").text(pickedCommanders[i]));
            }
        }
        if(j==3){
            if(i==3){
                i++;
                $('.tableRow'+j).append($("<th></th>").text(pickedCommanders[i]));
            } else {
                $('.tableRow'+j).append($("<th></th>").text(pickedCommanders[i]));
            }
        }

    }
    $('.table'+j).append($("<tbody></tbody>").addClass('tbody'+j));
    $('.tbody'+j).append($("<tr></tr>").addClass('tableRowBody'+j));
    $('.tableRowBody'+j).append($("<th></th>").attr( "scope", "row" ));
    $('.tableRowBody'+j).append($("<td></td>").text(hp[j]));
    for(i=0; i<pickedCommanders.length; i++){
        if(j==0){
            if(i==0){
                i++;
                $('.tableRowBody'+j).append($("<td></td>").text(commanderHp[j][i]));
            } else {
                $('.tableRowBody'+j).append($("<td></td>").text(commanderHp[j][i]));
            }
        }
        if(j==1){
            if(i==1){
                i++;
                $('.tableRowBody'+j).append($("<td></td>").text(commanderHp[j][i]));
            } else {
                $('.tableRowBody'+j).append($("<td></td>").text(commanderHp[j][i]));
            }
        }
        if(j==2){
            if(i==2){
                i++;
                $('.tableRowBody'+j).append($("<td></td>").text(commanderHp[j][i]));
            } else {
                $('.tableRowBody'+j).append($("<td></td>").text(commanderHp[j][i]));
            }
        }
        if(j==3){
            if(i==3){
                i++;
                $('.tableRowBody'+j).append($("<td></td>").text(commanderHp[j][i]));
            } else {
                $('.tableRowBody'+j).append($("<td></td>").text(commanderHp[j][i]));
            }
        }
    }

    $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1HpPlayer'+j).text('- 1'));
    $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1HpPlayer'+j).text('+ 1'));
    $('.tableDiv'+j).append($("<div></div>"));
    $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5HpPlayer'+j).text('- 5'));
    $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5HpPlayer'+j).text('+ 5'));
    for(i=0; i<pickedCommanders.length; i++){
        if(j==0){
            if(i==0){
                i++;
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player'+j+'Com'+i).text('- 1C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player'+j+'Com'+i).text('+ 1C'+(i+1)));
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player'+j+'Com'+i).text('- 5C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player'+j+'Com'+i).text('+ 5C'+(i+1)));
            } else {
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player'+j+'Com'+i).text('- 1C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player'+j+'Com'+i).text('+ 1C'+(i+1)));
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player'+j+'Com'+i).text('- 5C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player'+j+'Com'+i).text('+ 5C'+(i+1)));
            }
        }
        if(j==1){
            if(i==1){
                i++;
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player'+j+'Com'+i).text('- 1C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player'+j+'Com'+i).text('+ 1C'+(i+1)));
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player'+j+'Com'+i).text('- 5C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player'+j+'Com'+i).text('+ 5C'+(i+1)));
            } else {
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player'+j+'Com'+i).text('- 1C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player'+j+'Com'+i).text('+ 1C'+(i+1)));
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player'+j+'Com'+i).text('- 5C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player'+j+'Com'+i).text('+ 5C'+(i+1)));
            }
        }
        if(j==2){
            if(i==2){
                i++;
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player'+j+'Com'+i).text('- 1C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player'+j+'Com'+i).text('+ 1C'+(i+1)));
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player'+j+'Com'+i).text('- 5C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player'+j+'Com'+i).text('+ 5C'+(i+1)));
            } else {
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player'+j+'Com'+i).text('- 1C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player'+j+'Com'+i).text('+ 1C'+(i+1)));
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player'+j+'Com'+i).text('- 5C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player'+j+'Com'+i).text('+ 5C'+(i+1)));
            }
        }
        if(j==3){
            if(i==3){
                i++;
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player'+j+'Com'+i).text('- 1C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player'+j+'Com'+i).text('+ 1C'+(i+1)));
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player'+j+'Com'+i).text('- 5C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player'+j+'Com'+i).text('+ 5C'+(i+1)));
            } else {
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec1Player'+j+'Com'+i).text('- 1C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc1Player'+j+'Com'+i).text('+ 1C'+(i+1)));
                $('.tableDiv'+j).append($("<div></div>"));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm dec5Player'+j+'Com'+i).text('- 5C'+(i+1)));
                $('.tableDiv'+j).append($("<button></button>").addClass('btn btn-primary btn-sm inc5Player'+j+'Com'+i).text('+ 5C'+(i+1)));
            }
        }

    }
}


/*---------------------------------- /TABLE CREATION----------------------------------*/

/*---------------------------------- COMMANDER BUTTONS----------------------------------*/
/*---------------------------------- COMMANDER1 BUTTONS----------------------------------*/
function dec1PlayerIndexComIndex(name, playerIndex, commanderIndex){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[playerIndex] = hp[playerIndex] - 1;
        commanderHp[playerIndex][commanderIndex]= commanderHp[playerIndex][commanderIndex] - 1;
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
        for(i=0; i<pickedCommanders.length; i++){
            if(playerIndex==0){
                if(i==0){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==1){
                if(i==1){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==2){
                if(i==2){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==3){
                if(i==3){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
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
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==1){
                if(i==1){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==2){
                if(i==2){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==3){
                if(i==3){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
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
        commanderHp[playerIndex][commanderIndex]= commanderHp[playerIndex][commanderIndex] - 5;
        $('.tbody'+playerIndex).empty();
        $('.tbody'+playerIndex).append($("<tr></tr>").addClass('tableRowBody'+playerIndex));
        $('.tableRowBody'+playerIndex).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+playerIndex).append($("<td></td>").text(hp[playerIndex]));
        for(i=0; i<pickedCommanders.length; i++){
            if(playerIndex==0){
                if(i==0){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==1){
                if(i==1){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==2){
                if(i==2){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==3){
                if(i==3){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
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
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==1){
                if(i==1){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==2){
                if(i==2){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                } else {
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
                }
            }
            if(playerIndex==3){
                if(i==3){
                    i++;
                    $('.tableRowBody'+playerIndex).append($("<td></td>").text(commanderHp[playerIndex][i]));
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

dec1PlayerIndexComIndex('dec1Player1Com0', 1, 0);
dec1PlayerIndexComIndex('dec1Player1Com1', 1, 1);
dec1PlayerIndexComIndex('dec1Player1Com2', 1, 2);
dec1PlayerIndexComIndex('dec1Player1Com3', 1, 3);

dec1PlayerIndexComIndex('dec1Player2Com0', 2, 0);
dec1PlayerIndexComIndex('dec1Player2Com1', 2, 1);
dec1PlayerIndexComIndex('dec1Player2Com2', 2, 2);
dec1PlayerIndexComIndex('dec1Player2Com3', 2, 3);

dec1PlayerIndexComIndex('dec1Player3Com0', 3, 0);
dec1PlayerIndexComIndex('dec1Player3Com1', 3, 1);
dec1PlayerIndexComIndex('dec1Player3Com2', 3, 2);
dec1PlayerIndexComIndex('dec1Player3Com3', 3, 3);



inc1PlayerIndexComIndex('inc1Player0Com0', 0, 0);
inc1PlayerIndexComIndex('inc1Player0Com1', 0, 1);
inc1PlayerIndexComIndex('inc1Player0Com2', 0, 2);
inc1PlayerIndexComIndex('inc1Player0Com3', 0, 3);

inc1PlayerIndexComIndex('inc1Player1Com0', 1, 0);
inc1PlayerIndexComIndex('inc1Player1Com1', 1, 1);
inc1PlayerIndexComIndex('inc1Player1Com2', 1, 2);
inc1PlayerIndexComIndex('inc1Player1Com3', 1, 3);

inc1PlayerIndexComIndex('inc1Player2Com0', 2, 0);
inc1PlayerIndexComIndex('inc1Player2Com1', 2, 1);
inc1PlayerIndexComIndex('inc1Player2Com2', 2, 2);
inc1PlayerIndexComIndex('inc1Player2Com3', 2, 3);

inc1PlayerIndexComIndex('inc1Player3Com0', 3, 0);
inc1PlayerIndexComIndex('inc1Player3Com1', 3, 1);
inc1PlayerIndexComIndex('inc1Player3Com2', 3, 2);
inc1PlayerIndexComIndex('inc1Player3Com3', 3, 3);



dec5PlayerIndexComIndex('dec5Player0Com0', 0, 0);
dec5PlayerIndexComIndex('dec5Player0Com1', 0, 1);
dec5PlayerIndexComIndex('dec5Player0Com2', 0, 2);
dec5PlayerIndexComIndex('dec5Player0Com3', 0, 3);

dec5PlayerIndexComIndex('dec5Player1Com0', 1, 0);
dec5PlayerIndexComIndex('dec5Player1Com1', 1, 1);
dec5PlayerIndexComIndex('dec5Player1Com2', 1, 2);
dec5PlayerIndexComIndex('dec5Player1Com3', 1, 3);

dec5PlayerIndexComIndex('dec5Player2Com0', 2, 0);
dec5PlayerIndexComIndex('dec5Player2Com1', 2, 1);
dec5PlayerIndexComIndex('dec5Player2Com2', 2, 2);
dec5PlayerIndexComIndex('dec5Player2Com3', 2, 3);

dec5PlayerIndexComIndex('dec5Player3Com0', 3, 0);
dec5PlayerIndexComIndex('dec5Player3Com1', 3, 1);
dec5PlayerIndexComIndex('dec5Player3Com2', 3, 2);
dec5PlayerIndexComIndex('dec5Player3Com3', 3, 3);



inc5PlayerIndexComIndex('inc5Player0Com0', 0, 0);
inc5PlayerIndexComIndex('inc5Player0Com1', 0, 1);
inc5PlayerIndexComIndex('inc5Player0Com2', 0, 2);
inc5PlayerIndexComIndex('inc5Player0Com3', 0, 3);

inc5PlayerIndexComIndex('inc5Player1Com0', 1, 0);
inc5PlayerIndexComIndex('inc5Player1Com1', 1, 1);
inc5PlayerIndexComIndex('inc5Player1Com2', 1, 2);
inc5PlayerIndexComIndex('inc5Player1Com3', 1, 3);

inc5PlayerIndexComIndex('inc5Player2Com0', 2, 0);
inc5PlayerIndexComIndex('inc5Player2Com1', 2, 1);
inc5PlayerIndexComIndex('inc5Player2Com2', 2, 2);
inc5PlayerIndexComIndex('inc5Player2Com3', 2, 3);

inc5PlayerIndexComIndex('inc5Player3Com0', 3, 0);
inc5PlayerIndexComIndex('inc5Player3Com1', 3, 1);
inc5PlayerIndexComIndex('inc5Player3Com2', 3, 2);
inc5PlayerIndexComIndex('inc5Player3Com3', 3, 3);

$('.inc1Com0').click(function() {
    event.preventDefault();
    hp[0] = hp[0] + 1;
    if(hp[0]>=30){
        hp[0]=30;
    }
    commanderHp[0][0]= commanderHp[0][0] + 1;
    if(commanderHp[0][0]>=15){
        commanderHp[0][0]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.dec5Com0').click(function() {
    event.preventDefault();
    hp[0] = hp[0] - 5;
    commanderHp[0][0]= commanderHp[0][0] - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.inc5Com0').click(function() {
    event.preventDefault();
    hp[0] = hp[0] + 5;
    if(hp[0]>=30){
        hp[0]=30;
    }
    commanderHp[0][0]= commanderHp[0][0] + 5;
    if(commanderHp[0][0]>=15){
        commanderHp[0][0]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});
/*---------------------------------- COMMANDER2 BUTTONS----------------------------------*/
$('.dec1Com1').click(function() {
    event.preventDefault();
    hp[0] = hp[0] - 1;
    commanderHp[0][1]= commanderHp[0][1] - 1;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.inc1Com1').click(function() {
    event.preventDefault();
    hp[0] = hp[0] + 1;
    if(hp[0]>=30){
        hp[0]=30;
    }
    commanderHp[0][1]= commanderHp[0][1] + 1;
    if(commanderHp[0][1]>=15){
        commanderHp[0][1]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.dec5Com1').click(function() {
    event.preventDefault();
    hp[0] = hp[0] - 5;
    commanderHp[0][1]= commanderHp[0][1] - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.inc5Com1').click(function() {
    event.preventDefault();
    hp[0] = hp[0] + 5;
    if(hp[0]>=30){
        hp[0]=30;
    }
    commanderHp[0][1]= commanderHp[0][1] + 5;
    if(commanderHp[0][1]>=15){
        commanderHp[0][1]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

/*---------------------------------- COMMANDER3 BUTTONS----------------------------------*/
$('.dec1Com2').click(function() {
    event.preventDefault();
    hp[0] = hp[0] - 1;
    commanderHp[0][2]= commanderHp[0][2] - 1;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.inc1Com2').click(function() {
    event.preventDefault();
    hp[0] = hp[0] + 1;
    if(hp[0]>=30){
        hp[0]=30;
    }
    commanderHp[0][2]= commanderHp[0][2] + 1;
    if(commanderHp[0][2]>=15){
        commanderHp[0][2]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.dec5Com2').click(function() {
    event.preventDefault();
    hp[0] = hp[0] - 5;
    commanderHp[0][2]= commanderHp[0][2] - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.inc5Com2').click(function() {
    event.preventDefault();
    hp[0] = hp[0] + 5;
    if(hp[0]>=30){
        hp[0]=30;
    }
    commanderHp[0][2]= commanderHp[0][2] + 5;
    if(commanderHp[0][2]>=15){
        commanderHp[0][2]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

/*---------------------------------- COMMANDER4 BUTTONS----------------------------------*/
$('.dec1Com3').click(function() {
    event.preventDefault();
    hp[0] = hp[0] - 1;
    commanderHp[0][3]= commanderHp[0][3] - 1;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.inc1Com3').click(function() {
    event.preventDefault();
    hp[0] = hp[0] + 1;
    if(hp[0]>=30){
        hp[0]=30;
    }
    commanderHp[0][3]= commanderHp[0][3] + 1;
    if(commanderHp[0][3]>=15){
        commanderHp[0][3]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.dec5Com3').click(function() {
    event.preventDefault();
    hp[0] = hp[0] - 5;
    commanderHp[0][3]= commanderHp[0][3] - 5;
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});

$('.inc5Com3').click(function() {
    event.preventDefault();
    hp[0] = hp[0] + 5;
    if(hp[0]>=30){
        hp[0]=30;
    }
    commanderHp[0][3]= commanderHp[0][3] + 5;
    if(commanderHp[0][3]>=15){
        commanderHp[0][3]=15;
    }
    row++;
    $('tbody').append($("<tr></tr>").addClass('tableRow'+row));
    $('.tableRow'+row).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row).append($("<td></td>").text(hp[0]));
    for(i=1; i<pickedCommanders.length; i++){
        $('.tableRow'+row).append($("<td></td>").text(commanderHp[0][i]));
    }
});
/*---------------------------------- COMMANDER BUTTONS----------------------------------*/

/*---------------------------------- HP BUTTONS----------------------------------*/

function dec1HpPlayerIndex(name, index){
    $('.'+name).click(function() {
        event.preventDefault();
        hp[index] = hp[index] - 1;

        $('.tbody'+index).empty();
        $('.tbody'+index).append($("<tr></tr>").addClass('tableRowBody'+index));
        $('.tableRowBody'+index).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+index).append($("<td></td>").text(hp[index]));
        for(i=0; i<pickedCommanders.length; i++){
            if(index==0){
                if(i==0){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==1){
                if(i==1){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==2){
                if(i==2){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==3){
                if(i==3){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
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
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==1){
                if(i==1){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==2){
                if(i==2){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==3){
                if(i==3){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
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

        $('.tbody'+index).empty();
        $('.tbody'+index).append($("<tr></tr>").addClass('tableRowBody'+index));
        $('.tableRowBody'+index).append($("<th></th>").attr( "scope", "row" ));
        $('.tableRowBody'+index).append($("<td></td>").text(hp[index]));
        for(i=0; i<pickedCommanders.length; i++){
            if(index==0){
                if(i==0){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==1){
                if(i==1){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==2){
                if(i==2){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==3){
                if(i==3){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
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
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==1){
                if(i==1){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==2){
                if(i==2){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                } else {
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
                }
            }
            if(index==3){
                if(i==3){
                    i++;
                    $('.tableRowBody'+index).append($("<td></td>").text(commanderHp[index][i]));
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

inc1HpPlayerIndex('inc1HpPlayer0', 0);
inc1HpPlayerIndex('inc1HpPlayer1', 1);
inc1HpPlayerIndex('inc1HpPlayer2', 2);
inc1HpPlayerIndex('inc1HpPlayer3', 3);

dec5HpPlayerIndex('dec5HpPlayer0', 0);
dec5HpPlayerIndex('dec5HpPlayer1', 1);
dec5HpPlayerIndex('dec5HpPlayer2', 2);
dec5HpPlayerIndex('dec5HpPlayer3', 3);

inc5HpPlayerIndex('inc5HpPlayer0', 0);
inc5HpPlayerIndex('inc5HpPlayer1', 1);
inc5HpPlayerIndex('inc5HpPlayer2', 2);
inc5HpPlayerIndex('inc5HpPlayer3', 3);

/*---------------------------------- /HP BUTTONS----------------------------------*/

/*

for(j=0; j<players.length; j++){

    $('.table'+j).append($("<tbody></tbody>").addClass('tbody'+j));
    $('.tbody'+j).append($("<tr></tr>").addClass('tableRow'+row+j));
    $('.tableRow'+row+j).append($("<th></th>").text(row).attr( "scope", "row" ));
    $('.tableRow'+row+j).append($("<td></td>").text(hp[j]));
    for(i=0; i<pickedCommanders.length; i++){
        if(j==0){
            if(i==0){
                i++;
                $('.tableRow'+row+j).append($("<td></td>").text(commanderHp[j][i]));
            } else {
                $('.tableRow'+row+j).append($("<td></td>").text(commanderHp[j][i]));
            }
        }
        if(j==1){
            if(i==1){
                i++;
                $('.tableRow'+row+j).append($("<td></td>").text(commanderHp[j][i]));
            } else {
                $('.tableRow'+row+j).append($("<td></td>").text(commanderHp[j][i]));
            }
        }
        if(j==2){
            if(i==2){
                i++;
                $('.tableRow'+row+j).append($("<td></td>").text(commanderHp[j][i]));
            } else {
                $('.tableRow'+row+j).append($("<td></td>").text(commanderHp[j][i]));
            }
        }
        if(j==3){
            if(i==3){
                i++;
                $('.tableRow'+row+j).append($("<td></td>").text(commanderHp[j][i]));
            } else {
                $('.tableRow'+row+j).append($("<td></td>").text(commanderHp[j][i]));
            }
        }
    }

*/
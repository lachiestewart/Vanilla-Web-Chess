show_coords = false;
values = {
    "queen": 9,
    "king": 0,
    "knight": 3,
    "rook": 5,
    "bishop": 3,
    "pawn": 1
};
moves = {
    "queen": [
        //forwards
        [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7]
        ],
        //backwards
        [
            [0, -1],
            [0, -2],
            [0, -3],
            [0, -4],
            [0, -5],
            [0, -6],
            [0, -7]
        ],
        //right
        [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0]
        ],
        //left
        [
            [-1, 0],
            [-2, 0],
            [-3, 0],
            [-4, 0],
            [-5, 0],
            [-6, 0],
            [-7, 0]
        ],
        //left forwards
        [
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
            [6, 6],
            [7, 7]
        ],
        //left backwards
        [
            [1, -1],
            [2, -2],
            [3, -3],
            [4, -4],
            [5, -5],
            [6, -6],
            [7, -7]
        ],
        //right backwards
        [
            [-1, -1],
            [-2, -2],
            [-3, -3],
            [-4, -4],
            [-5, -5],
            [-6, -6],
            [-7, -7]
        ],
        //forwards right
        [
            [-1, 1],
            [-2, 2],
            [-3, 3],
            [-4, 4],
            [-5, 5],
            [-6, 6],
            [-7, 7]
        ]
    ],
    "king": [
        [
            [0, 1]
        ],
        [
            [1, 0]
        ],
        [
            [0, -1]
        ],
        [
            [-1, 0]
        ],
        [
            [1, 1]
        ],
        [
            [1, -1]
        ],
        [
            [-1, 1]
        ],
        [
            [-1, -1]
        ]
    ],
    "knight": [
        [
            [1, 2]
        ],
        [
            [-1, 2]
        ],
        [
            [1, -2]
        ],
        [
            [-1, -2]
        ],
        [
            [2, 1]
        ],
        [
            [2, -1]
        ],
        [
            [-2, 1]
        ],
        [
            [-2, -1]
        ]
    ],
    "rook": [
        //forwards
        [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7]
        ],
        //backwards
        [
            [0, -1],
            [0, -2],
            [0, -3],
            [0, -4],
            [0, -5],
            [0, -6],
            [0, -7]
        ],
        //right
        [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0]
        ],
        //left
        [
            [-1, 0],
            [-2, 0],
            [-3, 0],
            [-4, 0],
            [-5, 0],
            [-6, 0],
            [-7, 0]
        ]
    ],
    "bishop": [
        //left forwards
        [
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
            [6, 6],
            [7, 7]
        ],
        //left backwards
        [
            [1, -1],
            [2, -2],
            [3, -3],
            [4, -4],
            [5, -5],
            [6, -6],
            [7, -7]
        ],
        //right backwards
        [
            [-1, -1],
            [-2, -2],
            [-3, -3],
            [-4, -4],
            [-5, -5],
            [-6, -6],
            [-7, -7]
        ],
        //forwards right
        [
            [-1, 1],
            [-2, 2],
            [-3, 3],
            [-4, 4],
            [-5, 5],
            [-6, 6],
            [-7, 7]
        ]
    ],
    "pawn": [
        [
            [0, 1, {
                "colour": "white",
                "piece": [
                    [0, 1], false
                ]
            }],
            [0, 2, {
                "position": 1,
                "piece": [
                    [0, 2], false
                ]
            }]
        ],
        [
            [-1, 1, {
                "colour": "white",
                "piece": [
                    [-1, 1], true
                ]
            }]
        ],
        [
            [1, 1, {
                "colour": "white",
                "piece": [
                    [1, 1], true
                ]
            }]
        ],
        [
            [0, -1, {
                "colour": "black",
                "piece": [
                    [0, -1], false
                ]
            }],
            [0, -2, {
                "position": 6,
                "piece": [
                    [0, -2], false
                ]
            }]
        ],
        [
            [-1, -1, {
                "colour": "black",
                "piece": [
                    [-1, -1], true
                ]
            }]
        ],
        [
            [1, -1, {
                "colour": "black",
                "piece": [
                    [1, -1], true
                ]
            }]
        ]
    ]
};
active_pieces = {};
captured_pieces = {};
start_setup = [
    ["pawn", "white",
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 1],
            [5, 1],
            [6, 1],
            [7, 1]
        ]
    ],
    ["rook", "white",
        [
            [0, 0],
            [7, 0]
        ]
    ],
    ["bishop", "white",
        [
            [2, 0],
            [5, 0]
        ]
    ],
    ["knight", "white",
        [
            [1, 0],
            [6, 0]
        ]
    ],
    ["king", "white",
        [
            [4, 0]
        ]
    ],
    ["queen", "white",
        [
            [3, 0]
        ]
    ],
    ["pawn", "black",
        [
            [0, 6],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [6, 6],
            [7, 6]
        ]
    ],
    ["rook", "black",
        [
            [0, 7],
            [7, 7]
        ]
    ],
    ["bishop", "black",
        [
            [2, 7],
            [5, 7]
        ]
    ],
    ["knight", "black",
        [
            [1, 7],
            [6, 7]
        ]
    ],
    ["king", "black",
        [
            [4, 7]
        ]
    ],
    ["queen", "black",
        [
            [3, 7]
        ]
    ]
];
promotion_options = [
    "options:",
    "queen",
    "bishop",
    "rook",
    "knight"
];
profile_pictures = [
    ["king", 10],
    ["queen", 8],
    ["rook", 6],
    ["bishop", 4],
    ["knight", 2],
    ["pawn", 0]
];
members = [{
    "name": "Fred",
    "wins": 4,
    "losses": 5
}, {
    "name": "Jeff",
    "wins": 0,
    "losses": 0
}, {
    "name": "Albert",
    "wins": 0,
    "losses": 0
}];


function on_click(click_location) {
    if (pause_game == false) {
        //find piece if on square
        clicked_piece = find_piece_by_square(click_location);

        //if a piece is there and is not the same as the last piece clicked or last piece clicked is null
        if ((clicked_piece != undefined && (clicked_piece == last_piece_selected || last_piece_selected == null)) && active_pieces[clicked_piece]["colour"] == next_turn) {

            piece_type = active_pieces[clicked_piece]["type"];
            for (var a = 0; a < moves[piece_type].length; a++) {

                allow_move = true;
                for (var b = 0; b < moves[piece_type][a].length; b++) {

                    if (moves[piece_type][a][b][2] != undefined) {

                        if (moves[piece_type][a][b][2]["colour"] != undefined && moves[piece_type][a][b][2]["colour"] != active_pieces[clicked_piece]["colour"]) {
                            allow_move = false;
                        }
                        if (moves[piece_type][a][b][2]["position"] != undefined && moves[piece_type][a][b][2]["position"] != active_pieces[clicked_piece]["position"][1]) {
                            allow_move = false;
                        }

                        if (moves[piece_type][a][b][2]["piece"] != undefined && find_piece_by_square([active_pieces[clicked_piece]["position"][0] + moves[piece_type][a][b][2]["piece"][0][0], active_pieces[clicked_piece]["position"][1] + moves[piece_type][a][b][2]["piece"][0][1]]) != undefined != moves[piece_type][a][b][2]["piece"][1]) {
                            allow_move = false;
                        }

                    }

                    if (allow_move == true) {
                        x = active_pieces[clicked_piece]["position"][0] + moves[piece_type][a][b][0];
                        y = active_pieces[clicked_piece]["position"][1] + moves[piece_type][a][b][1];
                        try {
                            piece_found = find_piece_by_square([x, y]);
                            if (piece_found == undefined) {
                                document.getElementById([x, y]).className = "move_to_square";
                            } else {
                                if (active_pieces[piece_found]["colour"] != active_pieces[clicked_piece]["colour"]) {
                                    document.getElementById([x, y]).className = "move_to_square";
                                }
                                break
                            }
                        } catch {}
                    }

                }
            }
            last_piece_selected = clicked_piece;
            promotion_check(last_piece_selected);
        }

        //if square is move option for last piece clicked
        else if (document.getElementById(click_location).className == "move_to_square") {
            if (active_pieces[clicked_piece] != undefined) {
                if (active_pieces[clicked_piece]["type"] == "king") {
                    game_end(active_pieces[clicked_piece]["colour"]);
                }
                //add piece to acptured pieces
                captured_pieces[clicked_piece] = active_pieces[clicked_piece];
                //remove from active
                delete active_pieces[clicked_piece];
            }
            //change pieces location variable
            active_pieces[last_piece_selected]["position"] = click_location;
            //append pieces move to history variable
            active_pieces[last_piece_selected]["history"].push(click_location);
            //refresh the board
            refresh_board();
            promotion_check(last_piece_selected);
            last_piece_selected = null;
            if (next_turn == "white") {
                next_turn = "black";
            } else {
                next_turn = "white";
            }
        }
        //if square has nothing on it
        else {
            //refresh the board
            refresh_board();
            last_piece_selected = null;
        }
    }
}

function game_end(loser_colour) {
    pause_game = true;
    if (loser_colour == "black") {
        winner = white_player;
        loser = black_player;
    } else {
        winner = black_player;
        loser = white_player;
    }
    members[get_members().indexOf(winner)]["wins"] += 1;
    console.log(members[get_members().indexOf(winner)]["wins"]);
    members[get_members().indexOf(loser)]["losses"] += 1;
    console.log(members[get_members().indexOf(loser)]["losses"]);
    refresh_leaderboard();
    document.getElementById("white_resign").style.display = "none";
    document.getElementById("black_resign").style.display = "none";
    document.getElementById("restart").style.display = "inline-block";
}

function restart(){
    document.getElementById("white_name").value = "";
    document.getElementById("black_name").value = "";
    document.getElementById("pregame").style.display = "block";
    document.getElementById("game").style.display = "none";
}

function refresh_board() {
    //set all squares to black or white classes
    for (var a = 7; a >= 0; a--) {
        for (var b = 0; b <= 7; b++) {
            square = document.getElementById([b, a]);
            if (show_coords == true) {
                square.innerHTML = [b, a];
            } else {
                square.innerHTML = "";
            }
            if ((a + b) % 2 == 0) {
                square.className = "black_square";
            } else {
                square.className = "white_square";
            }
        }
    }
    //set squares with pieces to taken_square
    for (piece in active_pieces) {
        colour = active_pieces[piece]["colour"]
        type = active_pieces[piece]["type"]
        position = active_pieces[piece]["position"]

        image = document.createElement("img");
        image.id = piece;
        image.src = "images/pieces/" + colour + "/" + type + ".png";
        image.alt = colour + " " + type;
        image.width = 80;
        image.height = 76;
        document.getElementById(position).appendChild(image);
    }

    /*document.getElementById("White_score").innerHTML = 0;
    document.getElementById("Black_score").innerHTML = 0;
    pieces = Object.keys(active_pieces);
    for (var i = 0; i < pieces.length; i++) {
        document.getElementById(active_pieces[pieces[i]]["Colour"] + "_score").innerHTML = parseInt(document.getElementById(active_pieces[pieces[i]]["Colour"] + "_score").innerHTML) + values[active_pieces[pieces[i]]["Type"]];
    }*/
}

function find_piece_by_square(piece_location) {
    for (piece in active_pieces) {
        if (piece_location[0] == active_pieces[piece]["position"][0] && piece_location[1] == active_pieces[piece]["position"][1]) {
            return piece;
        }
    }
}

function toggle_board_coords() {
    if (show_coords == true) {
        show_coords = false;
    } else {
        show_coords = true;
    }
    refresh_board();
}

function get_members() {
    member_list = [];
    for (var v = 0; v < members.length; v++) {
        member_list.push(members[v]["name"]);
    }
    return member_list;
}

function start_game() {
    document.getElementById("white_resign").style.display = "inline-block";
    document.getElementById("black_resign").style.display = "inline-block";
    document.getElementById("restart").style.display = "none";
    member_list = get_members();
    white_name = document.getElementById("white_name").value;
    black_name = document.getElementById("black_name").value;
    if (white_name != "" && black_name != "") {
        white_player = capitalize(white_name);
        black_player = capitalize(black_name);
        if (member_list.includes(white_player) && member_list.includes(black_player) && white_player != black_player) {
            document.getElementById("pregame").style.display = "none";
            document.getElementById("game").style.display = "block";
            pause_game = false;
            next_turn = "white";
            last_piece_selected = null;
            piece_count = {
                "queen": 0,
                "king": 0,
                "knight": 0,
                "rook": 0,
                "bishop": 0,
                "pawn": 0
            };
            active_pieces = {};
            captured_pieces = {};
            for (var i = 0; i < start_setup.length; i++) {
                piece_type = start_setup[i][0];
                piece_colour = start_setup[i][1];
                for (var b = 0; b < start_setup[i][2].length; b++) {
                    location1 = start_setup[i][2][b][0];
                    location2 = start_setup[i][2][b][1];
                    piece_count[piece_type]++;
                    piece_name = piece_type + piece_count[piece_type];
                    active_pieces[piece_name] = {
                        "type": piece_type,
                        "colour": piece_colour,
                        "position": [location1, location2],
                        "history": [
                            [location1, location2]
                        ]
                    };

                }
            }
            refresh_board();
        }
    }
}

function promotion_check(piece) {
    if (active_pieces[piece]["type"] == "pawn" && ((active_pieces[piece]["position"][1] == 0 && active_pieces[piece]["colour"] == "black") || (active_pieces[piece]["position"][1] == 7 && active_pieces[piece]["colour"] == "white"))) {
        promote_location = active_pieces[piece]["position"];
        promote_select = document.createElement("select");
        promote_select.onchange = promote_choice;
        promote_select.id = "promote_select";
        for (var i = 0; i < promotion_options.length; i++) {
            option = document.createElement("option");
            option.innerHTML = promotion_options[i];
            option.value = promotion_options[i];
            promote_select.appendChild(option);
        }
        pause_game = true;
        square = document.getElementById(promote_location);
        document.getElementById(piece).remove();
        square.appendChild(promote_select);
    }
}

function promote_choice() {
    place = document.getElementById("promote_select").parentElement.id;
    piece = find_piece_by_square([place[0], place[2]]);
    piece_chosen = document.getElementById("promote_select").value;
    active_pieces[piece]["type"] = piece_chosen;
    pause_game = false;
    refresh_board();
}

function page_change(display_page) {
    pages = document.getElementsByClassName("content");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    display_page.style.display = "block";
}

function show_add() {
    document.getElementById("user_input").className = "show";
    document.getElementById("show_add").className = "hide";
}

function capitalize(string) {
    result = string[0].toUpperCase();
    for (var i = 1; i < string.length; i++) {
        result += string[i];
    }
    return result;
}

function add_new_member() {
    name_input = document.getElementById("name");
    wins_input = document.getElementById("wins");
    losses_input = document.getElementById("losses");
    if (name_input.value == "" || wins_input.value == "" || losses_input.value == "") {} else {
        name = capitalize(name_input.value);
        name_input.value = "";
        wins = parseInt(wins_input.value);
        wins_input.value = "";
        losses = parseInt(losses_input.value);
        losses_input.value = "";
        members.push({
            "name": name,
            "wins": wins,
            "losses": losses
        });
        document.getElementById("user_input").className = "hide";
        document.getElementById("show_add").className = "show";
        refresh_leaderboard();
    }
}

function refresh_leaderboard() {
    table = document.getElementById("leaderboard");
    table.innerHTML = "";
    for (var i = 0; i < members.length; i++) {
        record = table.insertRow();
        profile = document.createElement("div");
        profile.className = "profile";
        photo = document.createElement("img");
        losses = members[i]["losses"];
        wins = members[i]["wins"];
        if (losses == 0) {
            losses = 1;
        }
        if (wins == 0) {
            wins = 1;
        }
        ratio = wins / losses;
        for (var f = 0; f < profile_pictures.length; f++) {
            if (ratio > profile_pictures[f][1]) {
                piece = profile_pictures[f][0];
                break
            }
        }
        photo.src = "images/pieces/white/" + piece + ".png";
        photo.alt = piece;
        profile.appendChild(photo);
        record.insertCell().appendChild(profile);
        dropdown = document.createElement("div");
        dropdown.className = "dropdown";
        name = members[i]["name"];
        dropdown.append(name);
        stats = document.createElement("div");
        stats.className = "stats";
        wins = members[i]["wins"];
        losses = members[i]["losses"];
        s = "";
        if (wins != 1) {
            s = "s";
        }
        es = "";
        if (losses != 1) {
            es = "es";
        }
        br = document.createElement("br");
        stats.append(wins + " win" + s);
        stats.append(br);
        stats.append(losses + " loss" + es);
        dropdown.appendChild(stats);
        record.insertCell().appendChild(dropdown);
    }
}

function name_search(colour) {
    input_box = document.getElementById(colour + "_name")
    dropbox = document.getElementById(input_box.id + "_drop");
    while (dropbox.firstChild) {
        dropbox.removeChild(dropbox.lastChild);
    }
    if (input_box.value != "") {
        input = capitalize(input_box.value);
        if (get_members().includes(input) == false) {
            for (var i = 0; i < members.length; i++) {
                if (members[i]["name"].includes(input)) {
                    name_option = document.createElement("p");
                    name_show = document.createTextNode(members[i]["name"]);
                    name_option.appendChild(name_show);
                    name_option.onclick = person_chosen.bind(this, [members[i]["name"], colour]);
                    dropbox.appendChild(name_option);
                }
            }
        }
    }
}

function person_chosen(info) {
    input_box = document.getElementById(info[1] + "_name");
    input_box.value = info[0];
    dropbox = document.getElementById(info[1] + "_name_drop");
    while (dropbox.firstChild) {
        dropbox.removeChild(dropbox.lastChild);
    }
}
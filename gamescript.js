/**
 * Created by Ricky on 11/8/2016.
 */

var start_button = document.getElementById("start_button");
var key_button_dict = {"keyRed": 65, "keyBlue": 83, "keyGreen": 68, "keyYellow": 70, "keyLightBlue": 74, "keyLightGreen": 75,"keyOrange": 76,"keyPink": 186};

function removeMenuState() {
    document.getElementById("menuState").style.display = "none";
}
start_button.onclick = function() {

    game = new Phaser.Game(815, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

    function preload() {
        game.load.audio("song1", "songs/Scott_Holmes_Paint_By_Numbers.mp3");
        game.load.image("keyRed", "images/keyRed.png");
        game.load.image("keyBlue", "images/keyBlue.png");
        game.load.image("keyGreen", "images/keyGreen.png");
        game.load.image("keyYellow", "images/keyYellow.png");
        game.load.image("keyLightBlue", "images/keyLightBlue.png");
        game.load.image("keyLightGreen", "images/keyLightGreen.png");
        game.load.image("keyOrange", "images/keyOrange.png");
        game.load.image("keyPink", "images/keyPink.png");
        game.load.image("notePad", "images/notePad.png");
    }

    function create() {
        removeMenuState();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        document.onkeydown = keyChange;
        document.onkeyup = keyChange;

        game.stage.backgroundColor = '#B4CDCD';

        var song1 = game.add.audio("song1");

        songs = [song1];
        notes = game.add.group();
        keys = game.add.group();
        var keys_array = ["keyRed", "keyBlue", "keyGreen", "keyYellow",
            "keyLightBlue","keyLightGreen","keyOrange","keyPink"];
        for (var key_index = 0; key_index < keys_array.length; key_index++) {
            var key = notes.create(10 + key_index * 100 , game.world.height-110, keys_array[key_index]);
            key.scale.setTo(.2, .2);
            key.immovable = true;
        }

        game.sound.setDecodedCallback(songs, startGame, this);
    }

    function update() {
        //var hitPlatform = game.physics.arcade.overlap(notes, keys, ensure_same_type, note_hit);
    }
}

function startGame() {
    var song1 = songs.shift();
    song1.play();
}

function ensure_same_type() {

}

function note_hit() {

}

function keyChange(event) {
    console.log(event.type);
    switch (event.keyCode) {
        //65 = a
        case 65:
            break;
        //83 = s
        case 83:
            break;
        //68 = d
        case 68:
            break;
        //70 = f
        case 70:
            break;
        //74 = j
        case 74:
            break;
        //75 = k
        case 75:
            break;
        //76 = l
        case 76:
            break;
        //186 = ;
        case 186:
            break;
        //13 = enter
        case 13:
            break;
    }
}
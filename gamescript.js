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
        /*var keys_array = ["keyRed", "keyBlue", "keyGreen", "keyYellow",
            "keyLightBlue","keyLightGreen","keyOrange","keyPink"];
        keys_array.forEach(function(key){
            var key = notes.create(20 + (keys_array.indexOf(key) * 100) , game.world.height-110, key);
            key.scale.setTo(.15, .15);
            key.immovable = true;
        });*/

        notePad = game.add.sprite(0, game.world.height-70, "notePad");
        notePad.immovable = true;

        game.sound.setDecodedCallback(songs, startGame, this);
    }

    function update() {

    }
}

function startGame() {
    var song1 = songs.shift();
    song1.play();
}

function ensure_same_type() {
    //key_button_dict[0];
}

function note_hit() {

}

function keyChange(event) {
    //var hitPlatform = game.physics.arcade.overlap(notes, keys, ensure_same_type, note_hit);
    //console.log(event.type);
    //13 = enter
}
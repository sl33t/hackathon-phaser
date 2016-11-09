/**
 * Created by Ricky on 11/8/2016.
 */

var start_button = document.getElementById("start_button");

function removeMenuState() {
    document.getElementById("menuState").style.display = "none";
}
start_button.onclick = function() {

    game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

    function preload() {
        game.load.audio("song1", "Scott_Holmes_Paint_By_Numbers.mp3");
        game.load.image("keyRed", "keyRed.png");
        game.load.image("keyBlue", "keyBlue.png");
        game.load.image("keyGreen", "keyGreen.png");
        game.load.image("keyYellow", "keyYellow.png");
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

        var keyRed = notes.create(10, game.world.height-110, "keyRed");
        keyRed.scale.setTo(.2, .2);
        keyRed.immovable = true;

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
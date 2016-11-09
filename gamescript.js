/**
 * Created by Ricky on 11/8/2016.
 */

var start_button = document.getElementById("start_button");

start_button.onclick = function() {

    game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

    function preload() {
        game.load.audio("song1", "Scott_Holmes_Paint_By_Numbers.mp3");
    }

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#FFFFFF';

        var song1 = game.add.audio("song1");

        songs = [song1];

        game.sound.setDecodedCallback(songs, startGame, this);
    }

    function update() {

    }
}

function startGame() {
    var song1 = songs.shift();
    song1.play();
}
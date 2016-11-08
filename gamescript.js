/**
 * Created by Ricky on 11/8/2016.
 */

var start_button = document.getElementById("start_button");

start_button.onclick = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create});

    function preload() {
        game.load.audio("song1", "Scott_Holmes_Paint_By_Numbers.mp3");
    }

    function create() {

    }
}
// Code Practice: Making a Scene
// Name: Alexander Halim
// Date: 1/18/24

"use strict";

let config = {
  type: Phaser.AUTO,
  render: {
    pixelArt: true,
  },
  scene: [MainMenu, Play],
};

let game = new Phaser.Game(config);

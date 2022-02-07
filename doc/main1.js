let gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scale: {
        // Fit to window
        mode: Phaser.Scale.FIT,
        // Center vertically and horizontally
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [],
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);

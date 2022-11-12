let config = {
	type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
    	preload: preload,
        create: create,
        update: update
    }
};
const game = new Phaser.Game(config);
function preload(){
  this.load.image("pumpkin", "images/pumpkin.png");
  this.load.image("knife", "images/knife.png");
  this.load.image("eraser", "images/eraser.png");
  this.load.image("dot", "images/dot.png")
}

function create(){
  this.cameras.main.setBackgroundColor('#FF8C44');
  this.add.sprite(640, 360, 'pumpkin');
  this.add.sprite(200, 600, 'eraser');
  this.add.sprite(1080, 600, 'knife');

  this.input.on('pointermove', function (pointer) {
    if (pointer.isDown) {
      this.add.image(pointer.x, pointer.y, 'dot', Phaser.Math.Between(0, 5));
    }
  }, this);
}

function update(){
  
}
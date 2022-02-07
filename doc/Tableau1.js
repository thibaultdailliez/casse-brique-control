var keyRight;
var keyLeft;

class Tableau1 extends Phaser.Scene{


    preload (){
            this.load.image('carré', 'assets/carre.png');
            this.load.image('cercle', 'assets/cercle.png');
            this.load.image('fond', 'assets/fond.png');

    }
    create(){
            this.hauteur = 800
            this.largeur = 800
            this.fond = this.add.image(0 , 0, 'fond').setOrigin(0,0);


        //mur du haut
            this.haut = this.physics.add.image(0,0,'carré').setOrigin(0,0);
            this.haut.setDisplaySize(this.largeur,20);
            this.haut.body.setAllowGravity(false);
            this.haut.setImmovable(true);
        //mur du bas
            this.bas = this.physics.add.image(0,'carré').setOrigin(0,0);
            this.bas.setDisplaySize(this.largeur,20);
            this.bas.body.setAllowGravity(false);
            this.bas.setImmovable(true);
        //Balle
            this.balle = this.physics.add.image(this.largeur/2, this.hauteur/2,'cercle').setOrigin(0,0);
            this.balle.setDisplaySize(20,20);
            this.balle.body.setBounce(1,1);
            this.balle.setVelocityX(Phaser.Math.Between(100,-100));
            this.balle.setVelocityY(100);
            this.balle.body.setMaxVelocity(1000,1000);
        //Joueur
            this.joueur = this.physics.add.image(this.largeur-995,200,'carré').setOrigin(0,0);
            this.joueur.body.setAllowGravity(false);
            this.joueur.setDisplaySize(10,90);
            this.joueur.setImmovable(true);



            let me = this;

            this.physics.add.collider(this.balle,this.bas);
            this.physics.add.collider(this.balle,this.haut);
            this.physics.add.collider(this.balle,this.joueur,  function(){
                console.log('touche droite');
                me.rebond(me.joueur)
            });


        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.right);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.left);

    }
    rebond(raquette){
        let me = this;

        console.log(raquette.x);
        console.log(me.balle.x);
        console.log(me.balle.x-raquette.x)
    }


    update(){

        if(this.balle.x > this.largeur){
            this.balle.x = 200
        }

        if(this.balle.x < this.largeur-this.largeur){
            this.balle.x = this.largeur
        }

        if(this.balle.y > this.hauteur){
            this.balle.y = this.hauteur
        }

        if(this.balle.y <0){
            this.balle.y = 0
        }

        if (keyLeft.isDown)
        {
            this.joueur.x -= 10
        }
        if (keyRight.isDown)
        {
            this.joueur.x += 10
        }

        //Debug




    }
}
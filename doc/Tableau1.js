var keyS;
var keyX;
var keyJ;
var keyN;
class Tableau1 extends Phaser.Scene{


    preload (){
            this.load.image('carré', 'assets/carre.png');
            this.load.image('cercle', 'assets/cercle.png');
            this.load.image('katana', 'assets/katana.png');
            this.load.image('katanaJ1', 'assets/katanaJ1.png');
            this.load.image('katanaJ2', 'assets/katanaJ2.png');
            this.load.image('shuriken', 'assets/shuriken.png');
            this.load.image('fond', 'assets/fond.png');
            this.load.image('nuage', 'assets/nuage.png');
    }
    create(){
            this.hauteur = 500
            this.largeur = 1000
            this.fond = this.add.image(0 , 0, 'fond').setOrigin(0,0);


        //mur du haut
            this.haut = this.physics.add.image(0,0,'nuage').setOrigin(0,0);
            this.haut.setDisplaySize(this.largeur,20);
            this.haut.body.setAllowGravity(false);
            this.haut.setImmovable(true);
        //mur du bas
            this.bas = this.physics.add.image(0,this.hauteur-20,'nuage').setOrigin(0,0);
            this.bas.setDisplaySize(this.largeur,20);
            this.bas.body.setAllowGravity(false);
            this.bas.setImmovable(true);
        //Balle
            this.balle = this.physics.add.image(this.largeur/2, this.hauteur/2,'shuriken').setOrigin(0,0);
            this.balle.setDisplaySize(20,20);
            this.balle.body.setBounce(1,1);
            this.balle.setVelocityX(Phaser.Math.Between(100,-100));
            this.balle.setVelocityY(100);
            this.balle.body.setMaxVelocity(1000,1000);
        //J1
            this.gauche = this.physics.add.image(this.largeur-995,200,'katanaJ1').setOrigin(0,0);
            this.gauche.body.setAllowGravity(false);
            this.gauche.setDisplaySize(10,90);
            this.gauche.setImmovable(true);

        //J2
            this.droite = this.physics.add.image(this.largeur-15,200,'katanaJ2').setOrigin(0,0);
            this.droite.body.setAllowGravity(false);
            this.droite.setDisplaySize(10,90);
            this.droite.setImmovable(true);

            let me = this;

            this.physics.add.collider(this.balle,this.bas);
            this.physics.add.collider(this.balle,this.haut);
            this.physics.add.collider(this.balle,this.droite,  function(){
                console.log('touche droite');
                me.rebond(me.droite)
            });
            this.physics.add.collider(this.balle,this.gauche, function(){
                console.log('touche gauche');
                me.rebond(me.gauche)
            });

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
    }
    rebond(raquette){
        let me = this;

        console.log(raquette.y);
        console.log(me.balle.y);
        console.log(me.balle.y-raquette.y)
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

        if (keyS.isDown)
        {
            this.gauche.y -= 10
        }
        if (keyX.isDown)
        {
            this.gauche.y += 10
        }
        if (keyJ.isDown)
        {
            this.droite.y -= 10
        }
        if (keyN.isDown)
        {
            this.droite.y += 10
        }

        //Debug




    }
}
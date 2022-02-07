var keyRight;
var keyLeft;
var bricks;
var newBrick;
var brickInfo;

class Tableau1 extends Phaser.Scene{


    preload (){
            this.load.image('square', 'assets/elem/carre.png');
            this.load.image('ball', 'assets/elem/cercle.png');


    }
    create(){
            this.hauteur = 800
            this.largeur = 800



        //mur du haut
            this.haut = this.physics.add.image(0,0,'square').setOrigin(0,0);
            this.haut.setDisplaySize(this.largeur,20);
            this.haut.body.setAllowGravity(false);
            this.haut.setImmovable(true);
        //mur du gauche
            this.gauche = this.physics.add.image(0,0,'square').setOrigin(0,0);
            this.gauche.setDisplaySize(20,this.largeur);
            this.gauche.body.setAllowGravity(false);
            this.gauche.setImmovable(true);


        //mur du droite
            this.droite = this.physics.add.image(780,0,'square').setOrigin(0,0);
            this.droite.setDisplaySize(20,this.largeur);
            this.droite.body.setAllowGravity(false);
            this.droite.setImmovable(true);

        //Balle
            this.balle = this.physics.add.image(this.largeur/2, this.hauteur/2,'ball').setOrigin(0,0);
            this.balle.setDisplaySize(20,20);
            this.balle.body.setBounce(1,1);
            this.balle.setVelocityX(Phaser.Math.Between(100,-100));
            this.balle.setVelocityY(100);
            this.balle.body.setMaxVelocity(1000,1000);
        //Joueur
            this.raquette = this.physics.add.image(this.largeur-500,760,'square').setOrigin(0,0);
            this.raquette.body.setAllowGravity(false);
            this.raquette.setDisplaySize(200,20);
            this.raquette.setImmovable(true);


            this.creationRaquetteVerte();




            let me = this;

            this.physics.add.collider(this.balle,this.droite);
            this.physics.add.collider(this.balle,this.gauche);
            this.physics.add.collider(this.balle,this.haut);
            this.physics.add.collider(this.balle,this.raquette,  function(){
                console.log('touche droite');
                me.rebond(me.raquette)
            });


        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }
    creationRaquetteVerte(){
        let me = this;
        let rect;
        this.obstacles=[];
        let xValue = 0;
        let yy = 0;

        for(let y=0;y<5;y++){
            for(let x=0;x<9;x++){
                console.log("rect",x,y)
                rect = this.physics.add.sprite((60*x)+130, (30*y)+150, 'square').setOrigin(0,0);
                rect.setDisplaySize(60,30);
                rect.body.setAllowGravity(false);
                rect.setImmovable(true);
                this.obstacles.push(rect);
                this.physics.add.collider(this.balle, rect, function () {
                    console.log("touche ");
                    me.rebond(me.obstacles[i]);
                    me.disparait(me.obstacles[i]);

                });
            }
        }

        for(let i=0;i<5;i++){

            if (i<9){
                xValue = 65;
                yy = 150;

            }
            else {
                xValue = 70;
                yy= 25+(i-9)*35;
            }








        }
    }

    disparait(obstacle){

        obstacle.body.setEnable(false);
        obstacle.setVisible(false);

    }


    rebond(raquette){

        let me=this;

        console.log(raquette.x)
        console.log(me.balle.x)
        console.log((me.balle.x)-(raquette.x))

        let hauteurRaquette = raquette.displayHeight;

        let positionRelativeRaquette =(this.balle.x-raquette.x);

        positionRelativeRaquette = (positionRelativeRaquette/hauteurRaquette);

        positionRelativeRaquette = (positionRelativeRaquette*2-1);
        console.log(positionRelativeRaquette);

        this.balle.setVelocityX( this.balle.body.velocity.x + positionRelativeRaquette * hauteurRaquette)

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
            this.raquette.x += 10
        }
        if (keyRight.isDown)
        {
            this.raquette.x -= 10
        }

        if (this.raquette.x > this.largeur-220){
            this.raquette.x = this.largeur-220;
        }
        if (this.raquette.x < 20){
            this.raquette.x = 20;
        }





        //Debug




    }
}
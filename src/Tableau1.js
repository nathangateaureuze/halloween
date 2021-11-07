/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        for(let i=1;i<=3;i++){
            this.load.image('bg2-tree'+i, 'assets/level/background-2/bg2-tree-'+i+'.png');
        }

        //bg 1 (gris légèrement flou)
        this.load.image('bg-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        for(let i=1;i<=3;i++){
            this.load.image('bg-tree'+i, 'assets/level/background-1/bg-tree-'+i+'.png');
        }

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        for(let i=1;i<=3;i++){
            this.load.image('gTree'+i, 'assets/level/ground/g-tree-'+i+'.png');
        }
        this.load.image('gmushroom1','assets/level/ground/g-mushroom1.png');
        this.load.image('gstone1','assets/level/ground/g-stone-1.png');
        this.load.image('gstone4','assets/level/ground/g-stone-4.png');
        for (let i=1;i<=3;i++){
            this.load.image('gvine'+i,'assets/level/ground/g-vine-'+i+'.png');
        }
        this.load.image('gspike1','assets/level/ground/g-spike-1.png');
        this.load.image('gspike2','assets/level/ground/g-spike-2.png');
        this.load.image('gwater','assets/level/ground/g-water.png');
        this.load.image('gbridge','assets/level/ground/g-wooden-bridge.png');
        this.load.image('gcrate','assets/level/ground/g-box-2.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++){
            this.load.image('filterFilm'+i, 'assets/level/filters/film/frame-'+i+'.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let i=1;i<=3;i++){
            this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }


    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        let bg2Terrain1=this.add.image(400,100, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(400,-50, 'bg2-tree1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
        let bg2Tree2=this.add.image(300,-50, 'bg2-tree2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        let bg2Tree3=this.add.image(600,-50, 'bg2-tree3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-8; //pencher l'arbre de -5 degrès

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bgContainer=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bgTerrain3=this.add.image(-300,200, 'bg-terrain-3').setOrigin(0,0);
        this.bgContainer.add(bgTerrain3);
        let bgTerrain1=this.add.image(200,200, 'bg-terrain-1').setOrigin(0,0);
        this.bgContainer.add(bgTerrain1);
        let bgTree1=this.add.image(500,0, 'bg-tree1').setOrigin(0,0);
        this.bgContainer.add(bgTree1);
        let bgTree2=this.add.image(300,0, 'bg-tree2').setOrigin(0,0);
        this.bgContainer.add(bgTree2);
        let bgTree3=this.add.image(400,0, 'bg-tree3').setOrigin(0,0);
        this.bgContainer.add(bgTree3);

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        let gwater1=this.add.image(400,500, 'gwater');
        this.groundContainer.add(gwater1);
        let gwater2=this.add.image(gwater1.x+gwater1.width,500, 'gwater');
        this.groundContainer.add(gwater2);
        let gtree1=this.add.image(300,350, 'gTree1').setOrigin(0,1);
        gtree1.setTintFill(0xA1A1A1); // pratique pour dbugger
        this.groundContainer.add(gtree1);
        let gtree2=this.add.image(100,350, 'gTree2').setOrigin(0,1);
        gtree2.setTintFill(0xA1A1A1); // pratique pour dbugger
        this.groundContainer.add(gtree2);
        let gtree3=this.add.image(850,350, 'gTree3').setOrigin(0,1);
        gtree3.setTintFill(0xA1A1A1); // pratique pour dbugger
        this.groundContainer.add(gtree3);
        let gstone1=this.add.image(800,300, 'gstone1').setOrigin(0,1);
        this.groundContainer.add(gstone1);
        let gstone4=this.add.image(860,300, 'gstone4').setOrigin(0,1);
        this.groundContainer.add(gstone4);
        let gbridge=this.add.image(750,300, 'gbridge');
        this.groundContainer.add(gbridge);
        let gmushroom1=this.add.image(700,300, 'gmushroom1');
        this.groundContainer.add(gmushroom1);
        let gcrate=this.add.image(620,300, 'gcrate');
        this.groundContainer.add(gcrate);
        let gvine1=this.add.image(600,100, 'gvine1');
        //lianes
        this.groundContainer.add(gvine1);
        let gvine2=this.add.image(550,100, 'gvine2');
        this.groundContainer.add(gvine2);
        let gvine3=this.add.image(500,100, 'gvine3');
        this.groundContainer.add(gvine3);
        /**
         * Terrain droite
         * @type {Phaser.GameObjects.Image}
         */
        let gLeft=this.add.image(756,350, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft);
        /**
         * Terrain milieu
         * @type {Phaser.GameObjects.Image}
         */
        let gMid=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid);
        /**
         * Terrain droite
         * @type {Phaser.GameObjects.Image}
         */
        let gRight=this.add.image(gMid.x+gMid.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass1=this.add.tileSprite(0,370,gRight.x+gRight.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass1);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gRight.x+gRight.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * l'herbe mais à droite
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass3=this.add.tileSprite(756,370,gLeft.x-gLeft.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass3);
        let grass4=this.add.tileSprite(756,370,gLeft.x-gLeft.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass4);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}

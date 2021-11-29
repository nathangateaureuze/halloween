/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //zombies
        this.load.image('z1','assets/level/zombies/z3.png');
        this.load.image('z2','assets/level/zombies/z6.png');
        this.load.image('z3','assets/level/zombies/z10.png');

        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-terrain-3','assets/level/background-2/bg2-terrain-4.png');
        for(let i=1;i<=3;i++){
            this.load.image('bg2-tree'+i, 'assets/level/background-2/bg2-tree-'+i+'.png');
        }

        //bg 1 (gris légèrement flou)
        this.load.image('bg-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg-terrain-2', 'assets/level/background-1/bg-terrain-2.png');
        this.load.image('bg-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg-bridge','assets/level/background-1/bg-wooden-bridge.png');
        this.load.image('bg-rock','assets/level/background-1/bg-stone-3.png');
        for(let i=1;i<=4;i++){
            this.load.image('bggrass'+i,'assets/level/background-1/bg-grass-'+i+'.png')
        }
        for(let i=1;i<=3;i++){
            this.load.image('bg-tree'+i, 'assets/level/background-1/bg-tree-'+i+'.png');
        }

        //ground (premier plan noir)
        this.load.image('gfellentree','assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        for(let i=1;i<=3;i++){
            this.load.image('gTree'+i, 'assets/level/ground/g-tree-'+i+'.png');
        }
        this.load.image('gmushroom1','assets/level/ground/g-mushroom1.png');
        this.load.image('gstone1','assets/level/ground/g-stone-1.png');
        this.load.image('gstone4','assets/level/ground/g-stone-4.png');
        this.load.image('gstone5','assets/level/ground/g-stone-5.png');
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
            this.load.image('filterFilm'+i, 'assets/level/filters/bloody/frame'+i+'.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let i=1;i<=3;i++){
            this.load.image('bg-animation-a'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }

        //neige
        for(let i=1;i<=5;i++){
            this.load.image('snow'+i, 'assets/level/weather/snow/frame'+i+'.png');
        }

        //pluie
        for(let i=1;i<=3;i++){
            this.load.image('rain'+i, 'assets/level/weather/rain/frame'+i+'.png');
        }


    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA
        this.bganimation = this.add.sprite(0, 0, 'bg-animation-a').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'bg-animation',
            frames: [
                {key:'bg-animation-a1'},
                {key:'bg-animation-a2'},
                {key:'bg-animation-a3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bganimation.play('bg-animation');

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
        bg2Terrain2.setScale(0.9);
        let bg2Terrain1=this.add.image(650,200, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        bg2Terrain1.setScale(0.6);
        let bg2Terrain3=this.add.image(1100,200,'bg2-terrain-3').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain3);
        bg2Terrain3.setScale(0.7);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(50,-50, 'bg2-tree1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
        let bg2Tree2=this.add.image(675,-50, 'bg2-tree2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        let bg2Tree3=this.add.image(275,-50, 'bg2-tree3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        let bg2Tree5=this.add.image(1220,-50, 'bg2-tree1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree5);
        let bg2Tree4=this.add.image(1500,-50, 'bg2-tree2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree4);

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
        let bgbridge=this.add.image(1200,230, 'bg-bridge').setOrigin(0,0);
        this.bgContainer.add(bgbridge);
        bgbridge.setAngle(3);
        let bgTerrain3=this.add.image(-500,200, 'bg-terrain-3').setOrigin(0,0);
        this.bgContainer.add(bgTerrain3);
        let bgTerrain4=this.add.image(600,230, 'bg-terrain-4').setOrigin(0,0);
        this.bgContainer.add(bgTerrain4);
        bgTerrain4.setScale(0.8);
        let bgTerrain2=this.add.image(1500,230, 'bg-terrain-2').setOrigin(0,0);
        this.bgContainer.add(bgTerrain2);
        let bgrock=this.add.image(1650,265,'bg-rock').setOrigin(0,0);
        this.bgContainer.add(bgrock);
        bgrock.setAngle(-8);
        let bgTree1=this.add.image(900,-10, 'bg-tree1').setOrigin(0,0);
        this.bgContainer.add(bgTree1);
        bgTree1.setScale(0.6);
        let bgTree2=this.add.image(-30,-20, 'bg-tree2').setOrigin(0,0);
        this.bgContainer.add(bgTree2);
        bgTree2.setScale(0.6);
        let bgTree3=this.add.image(100,-20, 'bg-tree3').setOrigin(0,0);
        this.bgContainer.add(bgTree3);
        bgTree3.setScale(0.6);

        let bgTree4=this.add.image(1050,-20, 'bg-tree3').setOrigin(0,0);
        this.bgContainer.add(bgTree4);
        bgTree4.setScale(0.6);
        let bgTree5=this.add.image(1650,-60, 'bg-tree2').setOrigin(0,0);
        this.bgContainer.add(bgTree5);
        bgTree5.setScale(0.6);
        let bgTree6=this.add.image(1800,-20, 'bg-tree2').setOrigin(0,0);
        this.bgContainer.add(bgTree6);
        bgTree6.setScale(0.6);


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

        let spike1=this.add.image(320,540,'gspike1').setOrigin(0,1);
        this.groundContainer.add(spike1);
        spike1.setScale(1.1);
        let spike12=this.add.image(spike1.x+spike1.width,540,'gspike1').setOrigin(0,1);
        this.groundContainer.add(spike12);
        spike12.setScale(1.1);
        let spike2=this.add.image(320,540,'gspike2').setOrigin(0,1);
        this.groundContainer.add(spike2);
        spike2.setScale(1.1);
        let spike22=this.add.image(spike2.x+spike2.width,540,'gspike2').setOrigin(0,1);
        this.groundContainer.add(spike22);
        spike22.setScale(1.1);
        let gwater1=this.add.image(400,500, 'gwater');
        this.groundContainer.add(gwater1);
        let gwater2=this.add.image(gwater1.x+gwater1.width,500, 'gwater');
        this.groundContainer.add(gwater2);
        let gtree1=this.add.image(900,360, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(gtree1);
        gtree1.angle=-10
        gtree1.setScale(0.7);
        let gtree2=this.add.image(225,360, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(gtree2);
        gtree2.setScale(0.7);
        let gtree6=this.add.image(1100,350, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(gtree6);
        gtree6.setScale(0.7);
        let gtree3=this.add.image(25,360, 'gTree3').setOrigin(0,1);
        this.groundContainer.add(gtree3);
        gtree3.setScale(0.7);
        let gstone1=this.add.image(300,355, 'gstone1').setOrigin(0,1);
        this.groundContainer.add(gstone1);
        let gstone5=this.add.image(1100,358, 'gstone5').setOrigin(0,1);
        this.groundContainer.add(gstone5);
        let gstone4=this.add.image(780,355, 'gstone4').setOrigin(0,1);
        this.groundContainer.add(gstone4);
        let gbridge=this.add.image(330,375, 'gbridge').setOrigin(0,1);
        this.groundContainer.add(gbridge);
        gbridge.angle=-2
        let gmushroom1=this.add.image(150,355, 'gmushroom1').setOrigin(0,1);
        this.groundContainer.add(gmushroom1);
        let gmushroom2=this.add.image(1350,355, 'gmushroom1').setOrigin(0,1);
        this.groundContainer.add(gmushroom2);
        gmushroom2.setScale(0.6);
        let gcrate=this.add.image(500,290, 'gcrate');
        this.groundContainer.add(gcrate);
        gcrate.setScale(0.8);
        let gfellentree=this.add.image(1520,350, 'gfellentree').setOrigin(0,1);
        this.groundContainer.add(gfellentree);
        gfellentree.setAngle(8);
        gfellentree.setScale(0.8);
        let spike31=this.add.image(1700,540,'gspike1').setOrigin(0,1);
        this.groundContainer.add(spike31);
        let spike32=this.add.image(1500,540,'gspike2').setOrigin(0,1);
        this.groundContainer.add(spike32);

        //lianes
        let vine11=this.add.image(500,0,'gvine1');
        this.groundContainer.add(vine11);
        vine11.setScale(0.655);
        let vine12=this.add.image(500,30,'gvine2');
        this.groundContainer.add(vine12);
        vine12.setScale(0.655);
        let vine13=this.add.image(500,60,'gvine3');
        this.groundContainer.add(vine13);
        vine13.setScale(0.655);
        let vine14=this.add.image(500,90,'gvine1');
        this.groundContainer.add(vine14);
        vine14.setScale(0.655);
        let vine15=this.add.image(500,120,'gvine2');
        this.groundContainer.add(vine15);
        vine15.setScale(0.655);
        let vine16=this.add.image(500,150,'gvine3');
        this.groundContainer.add(vine16);
        vine16.setScale(0.655);

        let vine21=this.add.image(550,0,'gvine1');
        this.groundContainer.add(vine21);
        vine21.setScale(0.655);
        let vine22=this.add.image(550,30,'gvine2');
        this.groundContainer.add(vine22);
        vine22.setScale(0.655);
        let vine23=this.add.image(550,60,'gvine3');
        this.groundContainer.add(vine23);
        vine23.setScale(0.655);
        let vine24=this.add.image(550,90,'gvine1');
        this.groundContainer.add(vine24);
        vine24.setScale(0.7);

        //zombies
        let z1=this.add.image(600,195,'z1').setOrigin(0,0);
        this.groundContainer.add(z1);
        z1.setScale(0.8);
        z1.setAngle(-5);

        let z2=this.add.image(930,370,'z2').setOrigin(0,1);
        this.groundContainer.add(z2);
        z2.setScale(0.6);
        z2.setAngle(-1);

        let z3=this.add.image(1600,320,'z3').setOrigin(0,1);
        this.groundContainer.add(z3);
        z3.setAngle(-2);

        /**
         * Terrain gauche
         * @type {Phaser.GameObjects.Image}
         */
        let gMid=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid);
        let gRight=this.add.image(gMid.x+gMid.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight);
        /**
         * Terrain droite
         * @type {Phaser.GameObjects.Image}
         */
        let gLeft=this.add.image(756,350, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft);
        let gMid2=this.add.image(gLeft.x+gLeft.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid2);
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        let gRight2=this.add.image(gMid3.x+gMid3.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight2);
        /**
         * Terrain vraiment à droite
         * @type {Phaser.GameObjects.Image}
         */
        let gLeft2=this.add.image(1830,380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft2);
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
        let grass3=this.add.tileSprite(780,370,gLeft.x-gLeft.width-120,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass3);
        let grass4=this.add.tileSprite(780,370,gLeft.x-gLeft.width-120,50,'g-grass-3').setOrigin(0,1)
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

        //neige
        this.snow = this.add.sprite(0, 0, 'snow').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'snow',
            frames: [
                {key:'snow1'},
                {key:'snow2'},
                {key:'snow3'},
                {key:'snow4'},
                {key:'snow5'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.snow.play('snow');

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
        this.bganimation.scrollFactorX=0;
        this.snow.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.7;
        this.bgContainer.scrollFactorX=0.9;
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
        this.cameras.main.scrollX+=this.speed*10; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}

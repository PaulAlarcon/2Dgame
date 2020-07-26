    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        // this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', './test/rome.jpg');
        this.load.image('mario', '/test/mario.png');
        this.load.image('mush', '/test/mush.png');
        this.load.image('cute', '/test/cute.png');
        this.load.image('sky2', '/test/bg.jpg');
        this.load.image('red', 'http://labs.phaser.io/assets/particles/white.png');
    }

    function create ()
    {
        this.add.image(400, 300, 'sky2');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(0,0 , 'cute');

        logo.setVelocity(100, 100);
        logo.setBounce(1,1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
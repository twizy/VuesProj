

new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        pl:"",mo:"",
    },
    methods: {

        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        launchGame: function () {
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },

        myAttack: function () {
            var damage = Math.max(Math.floor(Math.random() * 10), 3);
            this.monsterHealth -= damage;
            this.monsterAttack()

            this.mo = "Monster punched " + damage + " punch(es)";
            this.turns.unshift({
                text: this.mo,
            });

            if (this.monsterHealth <= 5) {
                this.monsterHealth = 0;
                alert("Continue");
                this.startGame();
                this.turns = [];
            }
        },

        monsterAttack: function () {
            var damage = Math.max(Math.floor(Math.random() * 10), 3);
            this.playerHealth -= damage;

            this.pl = "Player punched " + damage + " punch(es)";
            this.turns.unshift({
                text: this.pl,
            });
        
            if (this.playerHealth <= 5) {
                this.playerHealth = 0;
                alert("Game over");
                this.launchGame();
            }
        },

        specialAttack: function () {
            var damage = Math.max(Math.floor(Math.random() * 13), 5);
            this.monsterHealth -= damage;

            this.mo = "Monster punched " + damage + " punch(es)";
            this.turns.unshift({
                text: this.mo,
            });

            this.monsterAttack();
 
            if (this.monsterHealth <= 5) {
                this.monsterHealth = 0;
                alert("Continue")
                this.turns = [];
                this.startGame();
            }
              
        },

        heal: function () {
            var damage = Math.max(Math.floor(Math.random() * 10), 3);
            this.playerHealth += damage;
            if (this.playerHealth >= 90) {
                this.playerHealth -= 10;
            }
        },

        giveUp: function () {
            this.launchGame()
        },

    }
});
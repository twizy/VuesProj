

new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        pl: "", mo: "",
        pStatus: "Full health !",
        mStatus:"Full health !",
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
            

            this.mo = "Monster punched " + damage + " punch(es)";
            this.turns.unshift({
                text: this.mo,
            });

            this.monsterAttack();

            this.healthPStatus();

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
                isPlayer: true,
                text: this.pl,
            });

            this.healthMStatus();
        
            if (this.playerHealth <= 5) {
                this.playerHealth = 0;
                alert("Game over");
                this.turns = [];
                this.launchGame();
            }
        },

        specialAttack: function () {
            var damage = Math.max(Math.floor(Math.random() * 13), 5);
            this.monsterHealth -= damage;

            this.monsterAttack();

            this.mo = "Monster punched " + damage + " punch(es)";
            this.turns.unshift({
                text: this.mo,
            });

            
            this.healthPStatus();
 
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
            this.healthPStatus();
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            };

            
        },

        giveUp: function () {
            this.launchGame()
        },

        healthPStatus: function () {
            if (this.playerHealth == 100) {
                this.pStatus = "Full health !";
            }else if (this.playerHealth >= 75) {
                this.pStatus = "Very good health !";
            }else if (this.playerHealth >= 50) {
                this.pStatus = "Good health !";
            }else if (this.playerHealth >= 25) {
                this.pStatus = "Low health !";
            }else {
                this.pStatus = "Critical health !";
            }
        },

        healthMStatus: function () {
            if (this.playerHealth == 100) {
                this.mStatus = "Full health !";
            }else if (this.playerHealth >= 75) {
                this.mStatus = "Very good health !";
            }else if (this.playerHealth >= 50) {
                this.mStatus = "Good health !";
            }else if (this.playerHealth >= 25) {
                this.mStatus = "Low health !";
            }else {
                this.mStatus = "Critical health !";
            }
        },

    }
});
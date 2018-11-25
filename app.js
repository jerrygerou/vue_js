// Features
  // Health bars
  // Buttons (start, actions)
  // Generate random numbers
  // Status


new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this. monsterHealth = 100;
    },
    attack: function() {
      // Damage needs to be a random number with a max and min possible
      // Give monster more damage than player
      var max = 10;
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        alert('You won!');
        this.gameIsRunning = false;
        return;
      }

      max = 12;
      min = 3;
      damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        alert('You lost!');
        this.gameIsRunning = false;
        return;
      }
    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    }
  }
});

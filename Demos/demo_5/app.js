function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      } else if (this.monsterHealth > 100) {
        return { width: "100%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      } else if (this.playerHealth > 100) {
        return { width: "100%" };
      }
      return { width: this.playerHealth + "%" };
    },
    isSpecialAttackAvailable() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    atackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.addLogMsg("player", "attack", attackValue);
      this.atackPlayer();
    },
    atackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
      this.addLogMsg("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(25, 10);
      this.monsterHealth -= attackValue;
      this.addLogMsg("player", "attack", attackValue);
      atackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(20, 8);
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMsg("player", "heal", healValue);
      this.atackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMsg(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");

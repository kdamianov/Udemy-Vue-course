function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterHealthBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      return { width: this.playerHealth + "%" };
    },
    isSpecialAttackAvailable() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    atackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.atackPlayer();
    },
    atackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(25, 10);
      this.monsterHealth -= attackValue;
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(20, 8);
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.atackPlayer();
    },
  },
});

app.mount("#game");

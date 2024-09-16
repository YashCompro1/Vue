function generateRandomValue(low = 1, high = 10) {
	return Math.floor(Math.random() * (high - low) + low);
}

Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			attackCounter: 0,
		};
	},
	computed: {},
	methods: {
		handleAttack() {
			this.monsterHealth = Math.max(0, this.monsterHealth - generateRandomValue(5, 10));
			this.playerHealth = Math.max(0, this.playerHealth - generateRandomValue(8, 16));
			this.attackCounter++;
		},
		handleSpecialAttack() {
			this.monsterHealth = Math.max(0, this.monsterHealth - generateRandomValue(5, 10));
			this.playerHealth = Math.max(0, this.playerHealth - generateRandomValue(15, 30));
			this.attackCounter = 0;
		},
		healPlayer() {
			this.playerHealth = Math.max(0, this.playerHealth - generateRandomValue(8, 16));
			this.playerHealth = Math.min(100, this.playerHealth + generateRandomValue(15, 25));
		},
	},
}).mount("#game");

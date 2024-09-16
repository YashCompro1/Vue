function generateRandomValue(low = 1, high = 10) {
	return Math.floor(Math.random() * (high - low) + low);
}

function getWinner(playerHealth, monsterHealth) {
	if (playerHealth <= 0 && monsterHealth <= 0) {
		return "draw";
	} else if (playerHealth <= 0) {
		return "monster";
	} else if (monsterHealth <= 0) {
		return "player";
	}

	return null;
}

Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			attackCounter: 0,
			winner: null,
			logs: [],
		};
	},
	computed: {
		playerHealthStyle() {
			return { width: Math.max(0, this.playerHealth) + "%" };
		},
		monsterHealthStyle() {
			return { width: Math.max(0, this.monsterHealth) + "%" };
		},
	},
	watch: {
		playerHealth() {
			this.winner = getWinner(this.playerHealth, this.monsterHealth);
		},
		monsterHealth() {
			this.winner = getWinner(this.playerHealth, this.monsterHealth);
		},
	},
	methods: {
		attackPlayer(low, high) {
			const value = generateRandomValue(low, high);
			this.playerHealth -= value;
			this.addLog("monster", "attacked for", value);
		},
		attackMonster(low, high) {
			const value = generateRandomValue(low, high);
			this.monsterHealth -= value;
			this.addLog("player", "attacked for", value);
		},
		handleAttack() {
			this.attackPlayer(8, 16);
			this.attackMonster(5, 10);
			this.attackCounter++;
		},
		handleSpecialAttack() {
			this.attackPlayer(8, 16);
			this.attackMonster(15, 30);
			this.attackCounter = 0;
		},
		healPlayer() {
			const value = generateRandomValue(15, 25);
			this.playerHealth = Math.min(100, this.playerHealth + value);
			this.addLog("player", "healed for", value);
			setTimeout(() => {
				this.attackPlayer(8, 16);
			}, 100);
			this.attackCounter++;
		},
		startNewGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.attackCounter = 0;
			this.winner = null;
			this.logs = [];
		},
		surrender() {
			this.winner = "monster";
		},
		addLog(who, what, value) {
			this.logs.push(`${who} ${what} ${value}`);
		},
	},
}).mount("#game");

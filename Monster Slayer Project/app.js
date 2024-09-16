function generateAttackDamage(low = 1, high = 10) {
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
			this.monsterHealth = Math.max(0, this.monsterHealth - generateAttackDamage(5, 10));
			this.playerHealth = Math.max(0, this.playerHealth - generateAttackDamage(8, 16));
			this.attackCounter++;
		},
		handleSpecialAttack() {
			this.monsterHealth = Math.max(0, this.monsterHealth - generateAttackDamage(5, 10));
			this.playerHealth = Math.max(0, this.playerHealth - generateAttackDamage(15, 30));
			this.attackCounter = 0;
		},
	},
}).mount("#game");

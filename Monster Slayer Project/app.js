Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
		};
	},
	computed: {},
	methods: {
		handleAttack() {
			this.playerHealth -= this.generateAttackDamage(1, 5);
			this.monsterHealth -= this.generateAttackDamage(1, 5);
		},
		generateAttackDamage(low = 1, high = 10) {
			return ((Math.random() * 100) % high) + low;
		},
	},
}).mount("#game");

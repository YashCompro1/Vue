Vue.createApp({
	data() {
		return {
			goal1: "Goal 1",
			goal2: "Goal 2",
			vueLink: "https://vuejs.org",
		};
	},
	methods: {
		getGoal() {
			if (Math.random() < 0.5) {
				return this.goal1;
			}
			return this.goal2;
		},
	},
}).mount("#user-goal");

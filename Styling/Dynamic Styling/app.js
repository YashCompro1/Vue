Vue.createApp({
	data() {
		return {
			boxSelected: false,
		};
	},
	computed: {
		getBoxClasses() {
			return { active: this.boxSelected };
		},
	},
	methods: {
		selectBox() {
			this.boxSelected = !this.boxSelected;
		},
	},
}).mount("#styling");

const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			fullName: "",
		};
	},
	watch: {
		name() {
			this.fullName = "Hello1" + " " + this.name;
		},
	},
	computed: {
		//fullName() {
		//	if (!this.name) return "";
		//	return "Hello" + " " + this.name;
		//},
	},
	methods: {
		add(data) {
			console.log(data);
			this.counter += data;
		},
		remove(data) {
			this.counter -= data;
		},
		resetName() {
			this.name = "";
		},
	},
}).mount("#events");

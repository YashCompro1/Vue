const app = Vue.createApp({
	data() {
		return {
			currentUserInput: "",
			message: "Vue is great!",
		};
	},
	methods: {
		setText() {
			this.message = this.$refs.inputRef.value;
		},
	},
	beforeCreate() {
		console.log("beforeCreate");
		console.log("app not created yet");
	},
	created() {
		console.log("created");
		console.log("app created but not mounted");
	},
	beforeMount() {
		console.log("beforeMount");
		console.log("app initialized and just before mount. data not seen on screen");
	},
	mounted() {
		console.log("mounted");
		console.log("data is seen on the screen");
	},
	beforeUpdate() {
		console.log("beforeUpdate");
		console.log("update not processed");
	},
	updated() {
		console.log("updated");
		console.log("update seen on screen");
	},
	beforeUnmount() {
		console.log("beforeUnmount");
		console.log("just before unmounting");
	},
	unmounted() {
		console.log("unmounted");
		console.log("app unmounted");
	},
});

app.mount("#app");
setTimeout(() => {
	app.unmount();
}, 10000);

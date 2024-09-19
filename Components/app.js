const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "012345678991",
					email: "manuel@localhost.com",
				},
				{
					id: "julie",
					name: "Julie Jones",
					phone: "09876543221",
					email: "julie@localhost.com",
				},
			],
		};
	},
});

app.component("friend-contact", {
	props: ["friend"],
	template: `
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails">{{detailsVisible ? 'Hide' : 'Show'}} Details</button>
            <ul v-if="detailsVisible">
                <li><strong>Phone:</strong> {{friend.phone}}</li>
                <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
    `,
	data() {
		return {
			detailsVisible: false, // Initialize detailsVisible correctly
		};
	},
	methods: {
		toggleDetails() {
			this.detailsVisible = !this.detailsVisible;
		},
	},
});

app.mount("#app");

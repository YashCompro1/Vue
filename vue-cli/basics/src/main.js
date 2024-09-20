import { createApp } from "vue";
import App from "./App.vue";
import FriendComponent from "./components/FriendComponent.vue";

const app = createApp(App);
app.component("friend-contact", FriendComponent);
app.mount("#app");

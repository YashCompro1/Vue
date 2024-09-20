import { createApp } from "vue";
import App from "./App.vue";
import FriendComponent from "./components/FriendComponent.vue";
import AddFriend from "./components/AddFriend.vue";

const app = createApp(App);
app.component("friend-contact", FriendComponent);
app.component("add-friend", AddFriend);
app.mount("#app");

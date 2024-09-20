<template>
    <section class="add-friend">
        <header>
            <h1>Add new Friend</h1>
        </header>
        <form>
            <div>
                <label>Name:</label>
                <input type="text" v-model="nameInput">
            </div>
            <div>

                <label>Phone:</label>
                <input type="text" v-model="phoneInput">
            </div>

            <div>

                <label>Email:</label>
                <input type="text" v-model="emailInput">
            </div>

            <button @click="addFriend">Add Friend</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            nameInput: "",
            phoneInput: "",
            emailInput: "",
        };
    },
    props: [],
    emits: ['add-friend'],
    methods: {
        addFriend(event) {
            event.preventDefault();
            let friend={id: this.nameInput,name: this.nameInput,phone: this.phoneInput,email: this.emailInput};
            this.nameInput="";
            this.phoneInput="";
            this.emailInput="";
            this.$emit('add-friend',friend);
        }
    },
};
</script>
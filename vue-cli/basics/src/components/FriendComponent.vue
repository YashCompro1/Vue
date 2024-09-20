<template>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
</template>

<script>
export default {
    props: ["friend"],
    data() {
        return {
            detailsVisible: false
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible=!this.detailsVisible;
        }
    }
};
</script>
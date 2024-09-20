<template>
    <h2>{{ friend.name }} {{ friend.isFavourite ? "<3" : "" }}</h2>
            <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>&nbsp;
            <button @click="toggleFavourite(friend.id)">{{ friend.isFavourite ? 'Favourite' : 'Unfavourite' }}</button>
            <ul v-if="detailsVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
</template>

<script>
export default {
    props: ['friend'],
    data() {
        return {
            detailsVisible: false,
        };
    },
    emits: ['toggle-favourite'],
    methods: {
        toggleDetails() {
            this.detailsVisible=!this.detailsVisible;
        },
        toggleFavourite(id) {
            this.$emit('toggle-favourite',id);
        }
    }
};
</script>
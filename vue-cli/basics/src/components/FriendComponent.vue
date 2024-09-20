<template>
    <h2>{{ friend.name }} {{ isFavourite ? "<3" : "" }}</h2>
            <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>&nbsp;
            <button @click="toggleFavourite">{{ isFavourite ? 'Favourite' : 'Unfavourite' }}</button>
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
            isFavourite: this.friend.isFavourite
        };
    },
    methods: {
        toggleDetails() {
            console.log(this.friend)
            console.log(this.isFavourite)
            this.detailsVisible=!this.detailsVisible;
        },
        toggleFavourite() {
            this.isFavourite=!this.isFavourite;
        }
    }
};
</script>
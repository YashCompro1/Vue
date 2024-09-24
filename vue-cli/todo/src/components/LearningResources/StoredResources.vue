<template>
    <ul>
        <learning-resources v-for="resource in resources" :key="resource.id" :resource="resource"></learning-resources>
    </ul>
</template>

<script>
import LearningResources from './LearningResources.vue';

export default {
    components: {
        'learning-resources': LearningResources,
    },
    props: ['resources']
}

</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>
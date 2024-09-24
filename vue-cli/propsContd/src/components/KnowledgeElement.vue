<template>
    <li>
        <h3>{{ topicName }}</h3>
        <p>{{ description }}</p>
        <button @click="activateTopic(id)">Learn More</button>
    </li>
</template>

<script>
export default {
    props: ['id', 'topicName', 'description'],
    inject: ['activateTopic'],
};
</script>
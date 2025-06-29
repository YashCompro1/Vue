<template>
    <the-header :title="'My Header'"></the-header>
    <stored-resources :resources="resources"></stored-resources>
</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue';
import StoredResources from './components/LearningResources/StoredResources.vue'

export default {
    components: {
        'stored-resources': StoredResources,
        'the-header': TheHeader
    },
    data() {
        return {

            resources: [
                {
                    id: '1',
                    title: 'Official Docs',
                    description: "Official Docs for Vue Js",
                    link: "https://vuejs.org"
                },
                {
                    id: '2',
                    title: 'Google',
                    description: "Learn to Google",
                    link: "https://google.com"
                }
            ]
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>
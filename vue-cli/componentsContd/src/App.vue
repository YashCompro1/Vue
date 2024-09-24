<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.data }}</h2>
        <h3>{{ slotProps.newBind.data }}</h3>
      </template>
    </course-goals>
  </div>
</template>

<script>

import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    'the-header': TheHeader,
    'badge-list': BadgeList,
    'course-goals': CourseGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
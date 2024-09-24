<template>
  <div>
    <the-header></the-header>
    <div>
      <button @click="setSelectedComponent('active-goals')">Active Goals</button>
      <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    </div>
    <!-- <active-goals v-if="selectedComponent == 'active'"></active-goals>
    <manage-goals v-if="selectedComponent == 'manage'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>

import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    'the-header': TheHeader,
    'active-goals': ActiveGoals,
    'manage-goals': ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component
    }
  }
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
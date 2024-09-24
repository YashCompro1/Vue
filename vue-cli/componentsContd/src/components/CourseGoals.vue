<template>
    <ul>
        <li v-for="(goal, index) in goals" :key="goal">
            <slot :data="goal" :newBind="{ data: 'value ' + index }"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Goal 1', 'Goal 2']
        }
    }
}
</script>
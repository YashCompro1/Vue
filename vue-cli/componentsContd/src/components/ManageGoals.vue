<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
        <ErrorAlert v-if="isError">
            <template v-slot:header>Some Error Occured</template>
            <p>Input is required</p>
            <button @click="closeDialog">OK</button>
        </ErrorAlert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            isError: false
        }
    },
    methods: {
        closeDialog() { this.isError = false },
        setGoal() {
            const enteredGoal = this.$refs.goal.value

            if (enteredGoal == "") {
                this.isError = true
                return
            }
            this.isError = false
        }
    }
}
</script>
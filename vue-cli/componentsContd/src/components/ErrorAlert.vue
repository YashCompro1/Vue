<template>
    <dialog>
        <header>
            <slot name="header"></slot>
        </header>
        <slot></slot>
    </dialog>
</template>

<script>
export default {

}
</script>

<style>
dialog {
    display: block;
    position: fixed;
    top: 20vh;
    left: 50%;
    width: 50%;
    transform: translate(-50%);
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    height: fit-content;
    padding: 8px;
}
</style>
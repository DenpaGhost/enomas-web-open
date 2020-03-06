<template>
    <div>
        <h1>{{helloWorld}}</h1>
        <h2>{{env}}</h2>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator';

    @Component
    export default class Index extends Vue {
        get helloWorld(): string {
            return 'Hello world!';
        }

        get env(): string {
            return process.env.NODE_ENV ?? 'undefined';
        }
    }
</script>

<style scoped>

</style>
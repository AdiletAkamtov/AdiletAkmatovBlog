<template>
    <div class="post-list">
        <SinglePost v-for="post in posts" :key="post" :post="post"/>
    </div>
</template>

<script>
    import {ref, reactive} from "@vue/reactivity"
    import SinglePost from "@/components/SinglePost";
    export default {
        props: ['posts'],
        components:{SinglePost},
    }
</script>

<style scoped>
    .post-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width:745px) {
        .post-list {
            max-width: 500px;
            grid-template-columns: 1fr;
        }
    }
</style>
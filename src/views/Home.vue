<template>
    <div v-if="posts.length" class="grid">
    
        <PostsList :posts="posts"/>
        <TagsCloud :posts="posts"/>
    </div>

    <template v-else>
        <Spinner />
    </template>

</template>

<script>
    import { onMounted } from "@vue/runtime-core";
    import PostsList from "@/components/PostsList";
    import TagsCloud from "@/components/TagsCloud";
    import { getPosts } from "../composables/getPosts"
    import Spinner from "@/components/Spinner";
    
    export default {
        components: { PostsList, Spinner, TagsCloud },
        setup() {
            const {posts, error, fetchPosts} = getPosts()
            onMounted(() => {
                fetchPosts()
            })
            return {posts, error, fetchPosts}
        }
    }
</script>

<style lang="scss">
    .grid {
    display: grid;
    grid-template-columns: 3fr 1fr;

    }
    .grid a {
    color: #Ff8800;
    text-decoration: none;
    }
    @media (max-width:745px) {
        .grid{
            display: flex;
            flex-direction: column-reverse;
        }
    }
</style>
<template>
    <div class="post">
        <router-link :to="`/post/${post.id}`"><h3>{{post.title}}</h3></router-link>
         <div class="post-img">
            <img class="post-title-img" v-if="post.imgUrl" :src="post.imgUrl" :alt="post.title">
        </div>
        <p>{{slicedWords}}</p>
        <router-link  v-for="tag in post.tags" :key="tag" :to="`/tags/${tag}`">
              <span> #{{ tag }}</span>
        </router-link>
    </div>
</template>

<script>
    import {computed} from "@vue/runtime-core";

    export default {
        props: ['post'],
        setup(props) {
            const slicedWords = computed(() => {
                return props.post.description.slice(0, 100) + "..."
            })
            return { slicedWords }
        }
    }
</script>

<style lang="scss">
    .post {
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-radius: 1px dashed #e7e7e7;
    }
    .post p{
        max-width: 400px;
    }
    .post h3{
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        min-width: 400px;
    }

    .post h3:before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1deg);
    }
        @media (max-width:745px) {
        .post h3:before{
        content: "";
        display: block;
        width:33vh;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1deg);
        }
        .post p{
            width:33vh;
            text-align: center;
        }
    }
    .post-title-img{
        width: 300px;
        height: 300px;
        object-fit: cover
    }
</style>
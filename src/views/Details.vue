<template>
    <div v-if="error"><h3>{{error}}</h3></div>
    <div v-if="post">
        <div class="post">
            
            <h3>{{post.title}}</h3>
             <div class="post__img">
                <img class="post__img-size" v-if="post.imgUrl" :src="post.imgUrl" :alt="post.title">
            </div>
            <p class="post__desc-detals">{{post.description}}</p>
        </div>
    </div>
    <div v-else>
        <Spiner/>
    </div>
</template>

<script>
    import {getPost} from "@/composables/getPost";
    import {onMounted} from "@vue/runtime-core";
    import Spiner from '@/components/Spinner'
    export default {
        props: ['id'],
        components: {Spiner},
        setup(props) {
            const {post, error, fetchPost} = getPost(props.id)
            onMounted(()=>{
                fetchPost()
            })
            return {post, error}
        }
    }
</script>

<style lang="scss" scoped>
    .post {
        max-width: 1200px;
        margin: 0 auto;
        &
        h3 {
            display: inline-block;
            position: relative;
            font-size: 26px;
            color: #fff;
            margin-bottom: 5vh;
            max-width: 400px;
        }

        &
        h3::before {
            content: '';
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

        &
        span {
            cursor: pointer;
            margin-right: 30px;
        }
        &__img-size{
            width: 100%;
            height: 100%;

        }
        &__desc-detals{
            max-width: 100%;
        }

        @media (max-width:745px) {
            .post{
                display: flex;
                justify-content: center;
                max-width: 400px;
                margin: 0 auto;

                &__desc-detals{
                    margin: 0 auto;
                }
            }


        }

    }
</style>
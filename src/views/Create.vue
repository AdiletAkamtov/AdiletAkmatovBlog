<template>
    <div class="create container">
        <form @submit.prevent="handleCreatePost" action="">
            <label for="">Title</label>
            <input required v-model="title" type="text">
            <label for="">Description</label>
            <textarea required v-model="description"></textarea>
            <label for="">Tags</label>
            <div class="form__wrapper">
                <input @keydown.prevent.enter="handleAddTag" type="text" v-model="tmpTag">
                <button type="button" @click="handleAddTag">create tag</button>
            </div>
            <div class="wrapper__pill">
                <div class="pill" v-for="tag in tags" :key="tag">
                    <span @click="handleDelete(tag)">#{{tag}}</span>
                </div>
            </div>
            <label for="">Picture for your post</label>
            <div class="form__wrapper">
                <input class="imgInput" required type="file" @change="handleChangeImage">
            </div>
            <button v-if="!isPending" class="form__submitBtn" type="submit">create</button>
            <button v-else class="form__submitBtn" disabled>creating post...</button>
        </form>
    </div>
</template>

<script>
    import {ref, reactive} from "@vue/reactivity"
    import {useRouter} from "vue-router"
    import {usePost} from "@/composables/usePost";
    import {useStorage} from "@/composables/useStorage";
    export default {
        setup() {
            const router = useRouter()
            let tags = ref([])
            let title = ref('')
            let description = ref('')
            let tmpTag = ref('')
            const image = ref(null)
            const isPending = ref(false)
            const {createPost} = usePost()
            const {uploadImage} = useStorage()
            const handleAddTag = () => {
                tmpTag.value = tmpTag.value.slice(0, 25)
                if (!tmpTag.value.length || tags.value.includes(tmpTag.value.toLowerCase())) null
                else tags.value.push(tmpTag.value.toLowerCase())
                tmpTag.value = ''
            }
            const handleDelete = (value) => {
                tags.value = tags.value.filter(tag => tag !== value)
            }
            const handleChangeImage = (event) => {
                const selectedFile = event.target.files[0]
                if (selectedFile && selectedFile.type.includes("image")) {
                    image.value = selectedFile
                    return
                } else alert('invalid img')
            }
            const handleCreatePost = async () => {
                isPending.value = true
                const imgUrl = await uploadImage('posts', image.value)
                const newPost = {
                    title: title.value,
                    tags: tags.value,
                    description: description.value,
                    imgUrl
                }
                await createPost(newPost)
                isPending.value = false
                router.push("/")
            }
            return {
                tags,
                tmpTag,
                title,
                description,
                isPending,
                handleAddTag,
                handleDelete,
                handleCreatePost,
                handleChangeImage
            }
        }
    }
</script>


<style>
  form{
    max-width: 480px;
    margin: 0 auto;
    text-align: left;

  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea{
    height: 160px;
  }
  label{
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: #fff;
    margin-bottom: 10px;
    padding: 2px 0;

  }
  label::before{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    top: 0;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
  button{
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
  }
  .pill{
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;

  }
  span{
    cursor: pointer;
  }
</style>
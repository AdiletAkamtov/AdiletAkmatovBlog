<template>
  <div class="tags-cloud">
    Обллако тегов
    <div v-for="tag in tags" :key="tag">
      <router-link :to="`/tags/${tag}`"> #{{ tag }} </router-link>
    </div>
  </div>
</template>

<script>
import { useTags } from "@/composables/useTags";

export default {
  props: ["posts"],
  setup(props){
    const { tags } = useTags(props.posts);
    return { tags };
  },
};
</script>

<style lang="scss">
  .tags-cloud{
    max-width: 200px;
    margin: 0 auto;

  }
  .tags-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;

  }
  .tags-cloud div {
    display: inline-block;
    padding: 0 10px;
    

  }
  .tags-cloud a {
    color: #ccc;
    text-decoration: none;
  }
  .tags-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }

  @media (max-width: 745px) {
    .tags-cloud{
      display: flex;
      justify-content: center;
      max-width: 90vh;
      flex-wrap: wrap;
    }
  }
</style>
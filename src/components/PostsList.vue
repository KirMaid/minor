<template>
  <div>
    <Post_item v-for="post in posts"  :key="post.id" :post="post"></Post_item >
  </div>
</template>

<script>
import Post_item from "./Post_item";
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    Post_item,
  },
};
</script>

<style>
</style>
<template>
  <div>
    <form @submit.prevent>
      <input type="text" class="form-control" v-model="post.title" />
      <input type="text" class="form-control" v-model="post.text" />
      <input class="form-control" type="file" id="formFile" />
      <common-btn style="margin-bottom: 1rem" @click="addPost">Добавить пост</common-btn>
    </form>
  </div>
</template>

<script>
// import CommonButton from "./UI/CommonButton";
export default {
  components: {},
  data() {
    return {
      post: {
      },
    };
  },
  methods: {
    addPost() {
      this.$emit("add", this.post);
      this.post.title = "";
      this.post.text = "";
    },
  },
};
</script>
<style>
input {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.form-control {
  margin-bottom: 1rem;
}
</style>
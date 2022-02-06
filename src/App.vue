<template>
  <div class="container">
    <header>
      <nav class="navbar navbar-light navbar-expand-lg bg-light">
        <a class="navbar-brand">Minor</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link">Лента</a></li>
            <li class="nav-item"><a class="nav-link">Личный кабинет</a></li>
            <li class="nav-item"><a class="nav-link">Добавить пост</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <AddPost @add="addPost"></AddPost>
      <PostsList :posts="posts"></PostsList>
    </main>
  </div>
</template>

<style>
</style>

<script>
import PostsList from "@/components/PostsList.vue";
import AddPost from "@/components/AddPost.vue";
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        text: post.text,
      });
    },
    addTitle(event) {
      this.title = event.target.value;
    },
    addText(event) {
      this.text = event.target.value;
    },
  },
  components: {
    PostsList,
    AddPost,
  },
};
</script>

<template>
    <div class="card">
<!--      <img src="..." class="card-img-top" alt="...">-->
      <div class="card-body">
        <h3 class="card-title">{{post.title}}</h3>
        <p class="card-text">{{post.text}}</p>
        <div style="display:flex;justify-content: space-between;"> <div style ="display: flex;flex-direction: column">
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-caret-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
          </svg>
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
          </svg>
        </div>
          <common-btn>Удалить</common-btn>
        </div>
      </div>
    </div>
</template>

<script>
// import CommonButton from "./UI/CommonButton";
export default {
  name: "post_item",
  components: {},
  props: {
  post:{
    type: Object,
    required: true,
  },
  },
}
</script>

<style scoped>

</style>
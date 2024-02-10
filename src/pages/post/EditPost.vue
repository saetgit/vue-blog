<template>
  <h1>Edit Post</h1>
  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="col-md-6">
    <PostForm @formData="updatePost" :button-loading="loading" button-text="Edit Post" :post="post" />
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import PostForm from '@/components/post/FormComponent.vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    PostForm
  },
  setup() {

    const loading = ref(false)
    const route = useRoute()
    const post = ref({});
    const pageLoading = ref(true);
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          pageLoading.value = false
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getPost();
    function updatePost(formData) {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1
        })
        .then(function (response) {
          console.log(response.data)
          loading.value = false;

          Swal.fire({
            title: 'Thanks!',
            text: 'Edit Post',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        })
    }
    return { updatePost, loading, post, pageLoading }

  }
}
</script>

<style></style>
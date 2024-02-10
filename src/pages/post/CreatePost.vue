<template>
  <h1>Create Post</h1>
  <div class="col-md-6">
    <PostForm @formData="createPost" :button-loading="loading" button-text="Create Post" />
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import PostForm from '@/components/post/FormComponent.vue'
export default {
  components: {
    PostForm
  },
  setup() {

    const loading = ref(false)


    function createPost() {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          title: FormData.title,
          body: FormData.body,
          userId: 1
        })
        .then(function () {
          Swal.fire({
            title: 'Thanks!',
            text: 'create post',
            icon: 'success',
            confirmButtonText: 'ok'
          })
          loading.value = false;
        })
    }
    return { loading, createPost }

  }
}
</script>

<style></style>
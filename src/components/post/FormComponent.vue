<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" v-model.lazy.trim="form.title">
      <div id="emailHelp" class="form-text">{{ form.titleError }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model.lazy.trim="form.body"></textarea>
      <div id="emailHelp" class="form-text">{{ form.bodyError }}</div>
    </div>
    <button type="submit" class="btn btn-primary" :disabled="buttonLoading">
      <div v-if="buttonLoading" class="spinner-border spinner-border-sm" role="status">
      </div> {{ buttonText }}
    </button>
  </form>
</template>

<script>
import { reactive } from 'vue'

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,

  },
  setup(props, { emit }) {
    const form = reactive({
      title: "",
      titleError: "",
      body: "",
      bodyError: ""
    })
    function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    setInput()
    function validate() {
      if (form.title === "") {
        form.titleError = "title is empty"
      }
      else {
        form.titleError = ""
      }
      if (form.body === "") {
        form.bodyError = "body is empty"
      }
      else {
        form.bodyError = ""
      }
      if (form.title !== "" && form.body !== "") {
        emit("formData", form);
      }
    }
    return { form, validate, setInput }

  }
}
</script>

<style></style>
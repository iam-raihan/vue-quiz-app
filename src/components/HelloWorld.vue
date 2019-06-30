<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="clicked" class="btn btn-danger">Test Button</button>
    <br />
    <b-button variant="outline-primary">Another Test Button</b-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    clicked() {
      console.log("clicked");
      this.$toast.error({
        message: "Wrong Answer!"
      });
      this.$toast.success({
        message: "Correct Answer!"
      });
    }
  }
};
</script>

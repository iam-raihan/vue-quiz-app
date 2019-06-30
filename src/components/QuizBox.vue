<template>
  <div>
    <b-jumbotron>
      <template slot="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque animi
        accusamus vitae dolores ratione?
      </template>
      <hr class="my-4" />
      <b-list-group>
        <b-list-group-item button>Answer 1</b-list-group-item>
        <b-list-group-item button>Answer 2</b-list-group-item>
        <b-list-group-item button>Answer 3</b-list-group-item>
        <b-list-group-item button>Answer 4</b-list-group-item>
      </b-list-group>

      <div class="mt-3"></div>

      <b-button variant="primary">Submit</b-button>
      <b-button variant="success" class="ml-2">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.answer-btn:hover {
  background-color: #b3e5fc;
}
</style>

<template>
  <div>
    <h3>Some User Details</h3>
    <p>User ID: {{ id }}</p>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    }
  }
};
</script>

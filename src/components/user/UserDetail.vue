<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ id }}</p>
    <router-link class="btn btn-primary" tag="button" :to="link"
      >Edit User</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.id },
        query: { locale: "en", q: 100 }
      }
    };
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  }
};
</script>

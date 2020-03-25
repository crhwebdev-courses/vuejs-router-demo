<template>
  <div>
    <p>Loaded ID: {{ id }}</p>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to, from) {
      //update id property when id param changes
      // we must do this because routing does not recreate the page
      // and therefore will not update the id property
      this.id = to.params.id;
    }
  },
  methods: {
    navigateToHome() {
      //programatically route to home
      this.$router.push({ path: "/" });
    }
  }
};
</script>

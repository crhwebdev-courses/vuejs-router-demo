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
  methods: {
    navigateToHome() {
      //programatically route to home
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<template>
  <div>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      //programatically route to home
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<template>
  <div>
    <p>Loaded ID: {{ id }}</p>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldId: this.$route.params.id
    };
  },
  //now exporting param to prop using option set in router.js
  // this ensures it updates correctly when switiching between users
  // we use this instead of the wath method below
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  //   watch: {
  //     $route(to, from) {
  //       //update id property when id param changes
  //       // we must do this because routing does not recreate the page
  //       // and therefore will not update the id property
  //       this.id = to.params.id;
  //     }
  //   },
  methods: {
    navigateToHome() {
      //programatically route to home
      this.$router.push({ path: "/" });
    }
  }
};
</script>

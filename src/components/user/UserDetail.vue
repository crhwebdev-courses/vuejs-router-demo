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
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  beforeRouteEnter(to, from, next) {
    //setup route guard using beforeRouteEnter lifecycle method from router
    //note: cannot enter any data or properties on this component here becuase
    // it has not been loaded.  Must instead call
    // next(vm => vm.link)
    if (true) {
      next();
    }

    next(false);
  }
};
</script>

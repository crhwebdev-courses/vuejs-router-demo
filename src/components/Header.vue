<template>
  <ul class="nav nav-pills">
    <router-link class="nav-item" to="/" tag="li" active-class="active" exact
      ><a class="nav-link">Home</a></router-link
    >
    <router-link to="/user/1" class="nav-item" tag="li" active-class="active"
      ><a class="nav-link">User 1</a></router-link
    >
    <router-link to="/user/2" class="nav-item" tag="li" active-class="active"
      ><a class="nav-link">User 2</a></router-link
    >
  </ul>
</template>

<script>
export default {};
</script>

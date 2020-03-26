<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ id }}</p>
    <router-link
      class="btn btn-primary"
      tag="button"
      :to="{
        name: 'userEdit',
        params: { id },
        query: { locale: 'en', q: 100 }
      }"
      >Edit User</router-link
    >
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

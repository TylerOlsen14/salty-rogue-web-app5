<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <router-link to="phoneRecords">Phone Records</router-link>
      <router-link to="prospects">Property Prospects</router-link>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

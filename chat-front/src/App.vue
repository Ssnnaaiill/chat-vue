<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height aacontainer>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>

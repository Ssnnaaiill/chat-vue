<template>
  <v-flex>
    <v-text-field
      v-model="userName"
      label="대화명"
      required
      v-on:keyup.enter="joinSubmit"
    ></v-text-field>
    <div class="text-xs-center">
      <v-btn v-on:click="joinSubmit" rounded color="teal" dark>JOIN</v-btn>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: 'LoginForm',
  props: ['join'],
  data: () => ({
    userName: '',
  }),
  methods: {
    joinSubmit() {
      this.$emit('joinSubmit', this.userName);
    },
  },
};
</script>

<style scoped lang="scss">
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

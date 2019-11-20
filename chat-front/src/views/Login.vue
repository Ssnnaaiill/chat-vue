<template>
  <div class="inner-wrap">
    <Loginform-component v-on:joinSubmit="joinSubmit"></Loginform-component>
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue';

export default {
  data: () => ({}),
  components: {
    'Loginform-component': LoginForm,
  },
  methods: {
    joinSubmit(userName) {
      this.$router.push(`/chat-room/${userName}`);
    },
  },
};
</script>

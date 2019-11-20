<template>
  <div class="inner-wrap">
    <v-text-field
      v-model="msg"
      label="chat"
      placeholder="Chat with your friend with any topic!"
      solo
      @keyup.13="submitMessageFunc"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: '',
  }),
  methods: {
    submitMessageFunc() {
      if (this.msg.length === 0) return false;
      this.$emit('submitMessage', this.msg);
      this.msg = '';
      return true;
    },
  },
};
</script>

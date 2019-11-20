<template>
  <v-list v-auto-bottom="msgs">
    <transition-group name="list">
      <div v-for="(msg, index) in msgs" v-bind:key="index">
        <v-list-title>
          <v-list-title-action>
            <span>{{ msg.from.name }}</span>
          </v-list-title-action>
        </v-list-title>
        <v-divider inset></v-divider>
      </div>
    </transition-group>
  </v-list>
</template>

<script>
export default {
  props: ['msgs'],
};
</script>

<style scoped lang="scss">
.list-item {
  display: inline-block;
  margin-right: 10px;

  .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>

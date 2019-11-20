module.exports = Vue => {
  // move scroll to bottom when DOM update
  Vue.directive('auto-bottom', {
    update: el => {
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 0);
    },
  });
};

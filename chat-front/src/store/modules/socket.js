import Constant from '@/Constant';

const state = {
  msgDatas: [],
};

const getters = {};

const actions = {};

const mutations = {
  [Constant.PUSH_MSG_DATA]: ($state, $payload) => {
    $state.msgDatas.push($payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

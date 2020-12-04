<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form action="">
      <div class="mb-3">
        <label class="form-lable">邮箱地址</label>
        <validata-input :rules="emailRules" v-model="emailVal"></validata-input>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
//import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ValidataInput, { RulesProp } from "./components/ValidateInput.vue";

// 测试数据
const currentUser: UserProps = {
  isLogin: true,
  name: "Eddie"
};
// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: "Salute",
//     description: "我向你敬礼！Salute！",
//     avatar: "https://www.keaimeitu.com/uploads/allimg/20200207/22524615966.jpg",
//   },
//   {
//     id: 2,
//     title: "Salute",
//     description: "我向你敬礼！Salute！",
//     avatar:
//       "https://img01.dimtown.com/uploads/2020/07/1593862032-3c285582a5e54edca9bd1300b9689bdd400x400.jpg",
//   },
// ];
export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GlobalHeader,
    ValidataInput
  },
  setup() {
    const emailVal = ref("salute");
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" }
    ];
    return {
      //      list: testData,
      currentUser,
      emailRules,
      emailVal
    };
  }
});
</script>

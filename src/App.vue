<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-lable">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal"></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-lable">密码</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordVal"
        ></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
//import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";

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
    ValidateInput,
    ValidateForm
  },
  setup() {
    const emailVal = ref("");
    const passwordVal = ref("");
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" }
    ];
    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
      { type: "password", message: "密码格式不正确（最短6位，最长16位）" }
    ];
    const onFormSubmit = (result: boolean) => {
      console.log("1234", result);
    };
    return {
      //      list: testData,
      currentUser,
      emailVal,
      emailRules,
      passwordVal,
      passwordRules,
      onFormSubmit
    };
  }
});
</script>

<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-lable">邮箱地址</label>
      <validate-input
        type="email"
        :rules="emailRules"
        v-model="emailVal"
        placeholder="请输入邮箱"
      ></validate-input>
    </div>
    <div class="mb-3">
      <label class="form-lable">密码</label>
      <validate-input
        type="password"
        :rules="passwordRules"
        v-model="passwordVal"
        placeholder="请输入密码"
      ></validate-input>
    </div>
    <template #submit>
      <span class="btn btn-danger">Submit</span>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const emailVal = ref("");
    const passwordVal = ref("");
    const router = useRouter();
    const store = useStore();
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" }
    ];
    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
      { type: "password", message: "密码格式不正确（最短6位，最长16位）" }
    ];
    const onFormSubmit = (result: boolean) => {
      if (result) {
        router.push("/");
        store.commit("login");
      }
    };
    return {
      emailVal,
      emailRules,
      passwordVal,
      passwordRules,
      onFormSubmit
    };
  }
});
</script>

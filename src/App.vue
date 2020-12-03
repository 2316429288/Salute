<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";

// 测试数据
const currentUser: UserProps = {
  isLogin: true,
  name: "Eddie"
};
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "Salute",
    description: "我向你敬礼！Salute！",
    avatar: "https://www.keaimeitu.com/uploads/allimg/20200207/22524615966.jpg"
  },
  {
    id: 2,
    title: "Salute",
    description: "我向你敬礼！Salute！",
    avatar:
      "https://img01.dimtown.com/uploads/2020/07/1593862032-3c285582a5e54edca9bd1300b9689bdd400x400.jpg"
  }
];
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

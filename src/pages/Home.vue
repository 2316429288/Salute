<template>
  <column-list :list="list"></column-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "../components/ColumnList.vue";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "Salute",
    description: "我向你敬礼！Salute！",
    avatar: "http://m.imeitou.com/uploads/allimg/2020062609/30veg53ulvd.jpeg"
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
  name: "Home",
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    };
  }
});
</script>

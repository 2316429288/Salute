<template>
  <column-list :list="list"></column-list>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import ColumnList from "../components/ColumnList.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store";

export default defineComponent({
  name: "Home",
  components: {
    ColumnList
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    onMounted(() => {
      store.dispatch("fetchColumns");
    });
    const list = computed(() => store.state.columns);
    return {
      list
    };
  }
});
</script>

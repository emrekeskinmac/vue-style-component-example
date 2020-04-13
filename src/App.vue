<template>
  <theme-provider :theme="theme">
    <div id="app">
      <Page msg="Welcome to Your Vue.js App" />
    </div>
  </theme-provider>
</template>

<script>
import Page from "./components/Page.vue";
import { ThemeProvider } from "vue-styled-components";
import theme from "./theme";

export default {
  name: "App",
  components: {
    Page,
    "theme-provider": ThemeProvider,
  },
  data: () => {
    return {
      theme: theme,
    };
  },
};
</script>

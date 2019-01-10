<template>
  <div class="hello">
    <h1>Welcome to {{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
Vue.component("hello-word", HelloWorld);
export default HelloWorld;
</script>

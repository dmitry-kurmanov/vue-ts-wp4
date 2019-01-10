<template>
  <div id="app">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export class App extends Vue {
  @Prop() private msg!: string;
}
Vue.component("app", App);
export default App;
</script>

<template>
  <div class="home">
    <Head />
    <List />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
 
<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'
import Head from '@/components/Head.vue'
import List from '@/components/List.vue'
@Component({
  components: {
    HelloWorld,
    Head,
    List
  },
})
export default class Home extends Vue {
 
}
</script>

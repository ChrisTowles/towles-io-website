<template>
  <div>
        
    <h2>Right Angled Triangle Solver</h2>
    

    <p>
      <a href="https://play.google.com/store/apps/details?id=com.ChrisTowles.RightAngledTriangleSolver" >
        <img style="width: 300px" src="@/assets/google-play-badge.png"> 
      </a>
    </p>

    <router-view/>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {},
})
export default class Index extends Vue {}
</script>

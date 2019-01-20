<template>
  <div >

<b-container>
        <b-jumbotron header="Towles.io"
                     lead="We are twin brothers that have worked as Programmers, Full Stack Development and Game Development for the last 16 years. This is a new venture to let us persue our own interest together using the technology we want to use."
        >
          <b-btn variant="primary" href="https://bootstrap-vue.js.org/">About Us</b-btn>
        </b-jumbotron>
      </b-container>
    

    <section >
      <h2>Who we are</h2>

      <p>We are twin brothers that have worked in System Administration, Full Stack Development and Game Development for the last 16 years. This is a new venture to let us persue our own interest together using the technology we want to use.</p>

      <h2>Currnet Apps</h2>


      <router-link to="/right-angled-triangle-solver">
        <h3 id="right-angled-triangle-solver">Right Angled Triangle Solver</h3>
      </router-link>
 
      <p>
        <a
          href="https://play.google.com/store/apps/details?id=com.ChrisTowles.RightAngledTriangleSolver"
        >
          <img style="width: 300px" src="@/assets/google-play-badge.png">
        </a>
      </p>
 
 
     

      <h3 id="hangman">Hangman</h3>

      <p>
        <a href="https://play.google.com/store/apps/details?id=io.towles.hangman">
          <img style="width: 300px" src="@/assets/google-play-badge.png">
        </a>
      </p>
 
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
//    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

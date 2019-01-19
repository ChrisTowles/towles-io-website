<template>
  <div>
    <section>
      <v-layout align-center justify-center class="my-5">
        <v-card>
          <h2 class="mb-3 pt-3 justify-center">Right Angle Triangle Solver</h2>

          <v-img
            :src="require('@/assets/apps/right-angled-triangle-solver-screen-shot-2.png')"
            aspect-ratio="2"
            contain
          />

          <v-card-text>
            A simple calculator project recently rewriten in
            <a href="https://flutter.io/">Flutter</a> yet with over
            <strong>1,786</strong> reviews and
            <strong>300,000</strong> thousand installs!
            <p>
              <i>(PS. I know i was shocked too!)</i>
            </p>
          </v-card-text>
        </v-card>
      </v-layout>
    </section>
    <section>
      <v-layout row align-center justify-center class="my-5">
        <v-container grid-list-lg>
          <v-layout row class="wrap justify-center">
            <div class="flex my-3 text-xs-center xs12 md6 lg4">
              <v-card class>
                <h2 class="mb-3 pt-3 justify-center">Easy</h2>
                <v-responsive>
                  <v-icon color="darken-2 large-icon">business</v-icon>
                </v-responsive>
                <v-card-title
                  class="subheading"
                >On Screen Keyboard makes entering values easy and fast without the android keyboard popping up and down to get in your way.</v-card-title>
              </v-card>
            </div>
            <div class="flex my-3 text-xs-center xs12 md6 lg4">
              <v-card class>
                <h2 class="mb-3 pt-3 justify-center">Calculate</h2>
                <v-responsive>
                  <v-icon color="darken-2 large-icon">perm_data_setting</v-icon>
                </v-responsive>
                <v-card-title
                  class="subheading"
                >Enter any 2 known variables (2 sides or a side and angle) to have this calculator figure out the rest of the missing values.</v-card-title>
              </v-card>
            </div>
            <div class="flex my-3 text-xs-center xs12 md6 lg4">
              <v-card class>
                <h2 class="mb-3 pt-3 justify-center">Visibility</h2>
                <v-responsive>
                  <v-icon color="darken-2 large-icon">visibility</v-icon>
                </v-responsive>
                <v-card-title
                  class="subheading"
                >Colored text boxes show you which values you entered while the white one's show the calculated values.</v-card-title>
              </v-card>
            </div>
          </v-layout>
        </v-container>
      </v-layout>
    </section>
    <v-btn to="/right-angled-triangle-solver/privacy-policy" color="info">Privacy Policy</v-btn>
    <v-btn to="/right-angled-triangle-solver/terms-and-conditions" color="info">Terms and Conditions</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class RightAngledTriangleSolver extends Vue {}
</script>
<style lang="css" scoped>
.text--large-icon {
  font-size: 80px;
}
</style>

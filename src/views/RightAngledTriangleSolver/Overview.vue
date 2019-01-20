<template>
  <div>
    <section>

          <h2 class="mb-3 pt-3 justify-center">Right Angle Triangle Solver</h2>

          <img class="img-fluid" alt="Right Angle Triangle Solver image"
            src="@/assets/apps/right-angled-triangle-solver-screen-shot-2.png"
          />
            A simple calculator project recently rewriten in
            <a href="https://flutter.io/">Flutter</a> yet with over
            <strong>1,786</strong> reviews and
            <strong>300,000</strong> thousand installs!
            <p>
              <i>(PS. I know i was shocked too!)</i>
            </p>



    </section>
    <section>

<p>
  
      Easy

                     <i class="material-icons">business</i>
         On Screen Keyboard makes entering values easy and fast without the android keyboard popping up and down to get in your way.
   </p>     
<p>

Calculate
              <i class="material-icons">perm_data_setting</i>
                Enter any 2 known variables (2 sides or a side and angle) to have this calculator figure out the rest of the missing values.
   </p>     
<p>
                Visibility
                

                  
<i class="material-icons">visibility</i>
                
                Colored text boxes show you which values you entered while the white one's show the calculated values.
                   </p>     

    </section>
    <b-btn to="/right-angled-triangle-solver/privacy-policy" color="info">Privacy Policy</b-btn>
    <b-btn to="/right-angled-triangle-solver/terms-and-conditions" color="info">Terms and Conditions</b-btn>
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

<template>
    <div class="row">
        <div class="col-md-6">
            <h6 class="font-weight-bold">استان :</h6>
            <select class="custom-select" v-model="selectedState" @change="getSpecificCourses()" name="state">
                <option disabled selected>استان خود را انتخاب کنید</option>
                <option v-for="state in states" :value="state.id">{{ state.name }}</option>
            </select>
        </div>
        <div class="col-md-6">
            <h6 class="font-weight-bold">شهر :</h6>
            <select class="custom-select" @change="getSpecificCourses()" name="city">
                <option disabled selected>شهر خود را انتخاب کنید</option>
                <option v-for="city in cities" :value="city.id">{{ city.name }}</option>
            </select>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      states: null,
      selectedState: null,
      cities: null
    };
  },
  mounted() {
    this.getStates();
  },
  methods: {
    getStates() {
      axios
        .get(Url + "/api/states")
        .then(res => {
          this.states = res.data;
        })
        .catch(err => console.warn(err));
    },
    getSpecificCourses() {
      console.log("fasf", this.selectedState);
      this.states.map(state => {
        if (state.id == this.selectedState) {
            this.cities = state.cities;
        }
      });
    }
  }
};
</script>

<template>
    <div class="row mt-2">
        <div class="col-md-4">
            <h6 class="font-weight-bold">استان :</h6>
            <select class="custom-select" @change="getSpecificCities()" name="state" id="state">
                <option disabled>استان خود را انتخاب کنید</option>
                <option v-for="state in states" :value="state.id" :selected="state.id == selectedState">{{ state.name }}</option>
            </select>
        </div>
        <div class="col-md-4">
            <h6 class="font-weight-bold">شهر :</h6>
            <select class="custom-select" @change="getSpecificCities()" name="city" id="city">
                <option disabled selected>شهر خود را انتخاب کنید</option>
                <option v-for="city in cities" :value="city.id" :selected="city.id == selectedCity">{{ city.name }}</option>
            </select>
        </div>
        <div class="col-md-4">
            <h6>روستا :‌</h6>
            <input type="text"  class="form-control" name="village" id="village" placeholder="روستا همیار (ضروری نیست)">
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  props: ['state_id','city_id'],
  data() {
    return {
      states: null,
      selectedState: null,
      cities: null,
      selectedCity: null,
    };
  },
  mounted() {
    this.getStates();
    this.selectedState = this.state_id;
    this.selectedCity = this.city_id;
  },
  methods: {
    getStates() {
      axios
        .get(Url + "/api/states")
        .then(res => {
          this.states = res.data;
          this.getSpecificCities();
        })
        .catch(err => console.warn(err));
    },
    getSpecificCities() {
      // console.log("fasf", document.getElementById('state').value);
      let stateSelectBoxValue = Number(document.getElementById('state').value);
      if(stateSelectBoxValue == 0)
      {
        this.selectedState = this.state_id;
      }else{
        this.selectedState = stateSelectBoxValue;
      }
      this.states.map(state => {
        if (state.id == this.selectedState) {
          this.cities = state.cities;
        }
      });
    }
  },
};
</script>

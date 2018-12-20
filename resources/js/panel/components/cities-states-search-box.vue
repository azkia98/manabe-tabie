<template>
  <div class="d-inline-block">
    <select name="state" v-model="state_id" class="custom-select">
      <option disabled selected>استان</option>
      <option :value="state.id" v-for="state in states" v-text="state.name"></option>
    </select>
    <select name="city" class="custom-select">
      <option disabled selected>شهر</option>
      <option :value="city.id" v-for="city in cities" v-text="city.name"></option>
    </select>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      states: null,
      //   cities: [],
      state_id: null
    };
  },
  mounted() {
    console.log("this fucking shit mounted");
    this.getStates();
  },
  methods: {
    getStates() {
      axios.get(`${Url}/api/states`).then(res => {
        this.states = res.data;
      });
    }
  },
  computed: {
    cities() {
      if (!this.state_id) {
        return [];
      }

      let state = this.states.filter(state => {
          return this.state_id == state.id;
      });
      return state[0].cities;
    }
  }
};
</script>

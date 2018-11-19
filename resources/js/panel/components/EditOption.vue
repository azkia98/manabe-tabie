<template>
    <div class="d-flex">
        <button class="btn btn-danger btn-sm rounded-0" @click="closeFormSection()" v-show="!showEditButton"><i class="fa fa-close"></i></button>
        <button class="btn btn-primary btn-sm" @click="showFormSection()" v-show="showEditButton"><i class="fa fa-edit"></i></button>
        <input type="text" v-model="valueForOption" :placeholder="option.label" v-show="showInput">
        <button class="btn btn-success btn-sm rounded-0" @click="sendFormData()" v-show="!showEditButton"><i class="fa fa-send"></i></button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ["option"],
  data(){
      return {
          showEditButton : true,
          showInput: false,
          valueForOption : null
      };
  },
  mounted() {
  },
  methods : {
      showFormSection(){
          this.showEditButton = false;
          this.showInput = true;
      },
      closeFormSection(){
          this.showEditButton = true;
          this.showInput = false;
      },
      sendFormData(){
          if (this.valueForOption == "" || this.valueForOption == null) {
              swal('فیلد شما خالی است !!', 'لطفا فیل را پرکند سپس روی گزینه ارسال کلیک کنید','warning');
              return false;
          }
          axios.patch(`${Url}/panell/options/${this.option.id}`,{value: this.valueForOption}).then(res =>{
              console.log(res);
              let data = res.data;
              if(data.msg == true)
              {
                  window.location.reload();
              }
          });
      }
  }
};
</script>

<template>
  <div class="mr-auto" v-show="isMembersExist">
    <form :action="getAction" method="get" class="d-inline-block" id="showSpecificMembersCards">
        <input type="hidden" name="Ids" v-model="members">
        
        <button class="btn btn-warning d-flex justify-content-center align-items-center">
            <i class="fa fa-print"></i>
        </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMembersExist: false,
      members: null
    };
  },
  mounted() {
    this.checkMembersIsExist();
    this.takeMembersData();
    this.$root.$on('show-print-button',() =>{
        this.checkMembersIsExist();
        this.takeMembersData();
    });
  },
  methods: {
    checkMembersIsExist() {
      if (!sessionStorage.membersForPrint || sessionStorage.membersForPrint == '[]') {
        this.isMembersExist = false;
        return false;
      }

      this.isMembersExist = true;
      
      return true;
    },
    takeMembersData(){
        this.members = JSON.parse(sessionStorage.membersForPrint);
    }
  },
  computed:{
      getAction(){
          return `${Url}/panell/members/show-specific-members-cards`;
      }
  }
};
</script>

<template>
  <div class="mr-auto" v-show="isMembersExist">
    <button class="btn btn-warning d-flex justify-content-center align-items-center">
      <i class="fa fa-print"></i>
    </button>
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
  },
  methods: {
    checkMembersIsExist() {
      if (!sessionStorage.membersForPrint || sessionStorage.membersForPrint == '[]') {
        this.isMembersExist = false;
        return false;
      }

      this.isMembersExist = true;
      this.members = JSON.parse(sessionStorage.membersForPrint);
      return true;
    }
  }
};
</script>

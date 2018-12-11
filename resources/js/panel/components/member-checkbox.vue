<template>
  <div class="d-inline-block">
    <input type="checkbox" class="custom-control-input" :checked="isSelected" :id="getId">
    <label class="custom-control-label custom-checkbox-1" @click="saveStorage()" :for="getId"></label>
  </div>
</template>

<script>
export default {
  props: ["member_id"],
  mounted() {
    console.log("Component mounted.");
  },
  computed: {
    getId() {
      return `checkbox${this.member_id}`;
    },
    isSelected() {
      if (!this.getMembers()) {
        return false;
      }

      let members = this.getMembers();

      if (!members.includes(this.member_id)) {
        return false;
      }

      return true;
    }
  },
  methods: {
    saveStorage() {
      let members = [];
      if (this.getMembers()) {
        members = this.getMembers();
        if (members.includes(this.member_id)) {
          var index = members.indexOf(this.member_id);
          if (index > -1) {
            members.splice(index, 1);
          }
          console.log(members);
        } else {
          members.push(this.member_id);
        }
        this.saveToSessionStorage(members);
      } else {
        members = [this.member_id];
        this.saveToSessionStorage(members);
      }
      // sessionStorage.removeItem('membersForSearch');
    },
    saveToSessionStorage(members) {
      sessionStorage.membersForPrint = JSON.stringify(members);
    },
    getMembers() {
      if (!sessionStorage.membersForPrint) {
        return false;
      }
      return JSON.parse(sessionStorage.membersForPrint);
    }
  }
};
</script>

<template>
   <div>
		<div class="form">
			<div class="form-group has-search">
				<span class="fa fa-search form-control-feedback" v-on:click="makeFilter()"></span> <!--  makeFilter() - not parameter -> v-model -->
				<input type="text" class="form-control search-value" placeholder="Search" v-model="searchValue"> <!--  v-model="searchValue" -->
			</div>
		</div>	
   </div>
</template>

<script>
  export default {
    data: function() { //!!!
      return { //!!! 
		searchValue: '', //!!!
      }
    },
	methods: {
		makeFilter() {
			let app = this;

			let usersFilter = JSON.parse(localStorage.users).filter((user) => user.name.indexOf(app.searchValue) != -1);
							  //|| user.email.indexOf(searchValue) != -1); //?email	
		 
			//createContentUsers(usersFilter);
			//app.users = usersFilter; //!!!
			app.$root.$refs.refListComponent.users = usersFilter; //!!!	
		},		
	}
 };
 </script>

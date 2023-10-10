<template>
   <div>
		<div class="row">
			<div class="col font-weight-bold">Image</div>	
			<div class="col font-weight-bold">Name</div>
			<div class="col font-weight-bold">Email</div>
			<div class="col font-weight-bold">Status</div>
			<div class="col"></div>
	    </div>	
	    <div class="users">
			<div class="row" v-for="item, index in users">
				<div class="col"></div>	
				<div class="col">{{item.name}}</div>
				<div class="col"></div>
				<div class="col"></div>
				<div class="col"><button class="btn btn-link" v-on:click="makeRemove(item.indexOriginal)">remove</button></div>
			</div>			
	    </div>	
   </div>
</template>

<script>
  export default {
    data: function() { //!!!
      return { //!!!
		API: 'https://pokeapi.co/api/v2/pokemon/',
		parentElement: document.querySelector('.users'), 
		users: [], //!!!    
      }
    },	
	mounted() {
		this.getAPI(); //!!! 
	},   
	methods: {
	    getAPI() {
            let app = this; //!!!

			if (! localStorage.users || ! JSON.parse(localStorage.users).length) {
				fetch(this.API)
					.then(responce => {
						return responce.json();
					})
					.then(data => {
						let users = data.results;
		
						users.map(function(user, index) {
						   user.indexOriginal = index;
						});
		
						console.log(users);
		
						localStorage.users = JSON.stringify(users);
		
						//createContentUsers(users);
						app.users = users; //!!!
					});
			} else {
				//createContentUsers(JSON.parse(localStorage.users));	
				app.users = JSON.parse(localStorage.users); //!!!
			} 
		},
		
		makeRemove(id) {
			let app = this;
	
			console.log(id);	
	
			let users = JSON.parse(localStorage.users);
	
			users.splice(id, 1); 
		 
			users.map(function(user, index) {
			   user.indexOriginal = index;
			});
		 
			localStorage.users = JSON.stringify(users);
		 
			//createContentUsers(users);
			app.users = users; //!!!
		},
	}
 };
 </script>

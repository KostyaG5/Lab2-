import Vue from 'vue'

/*
const API = 'https://pokeapi.co/api/v2/pokemon/';
const parentElement = document.querySelector('.users');

function getAPI() {
	if (! localStorage.users || ! JSON.parse(localStorage.users).length) {
		fetch(API)
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

				createContentUsers(users);
			});
	} else {
		createContentUsers(JSON.parse(localStorage.users));	
	} 
}

function createContentUsers(users) {
    console.log(users);

	parentElement.innerHTML = '';

    for (let i = 0; i < users.length; ++i) {
		let rowElement = document.createElement('div');
		rowElement.setAttribute('class', 'row');
		
		let colElementImg = document.createElement('div');
		colElementImg.setAttribute('class', 'col');
		//...?img

		let colElementName = document.createElement('div');
		colElementName.setAttribute('class', 'col');
		colElementName.innerText = users[i].name;

		let colElementEmail = document.createElement('div');
		colElementEmail.setAttribute('class', 'col');	
		//...?email

		let colElementStatus = document.createElement('div');
		colElementStatus.setAttribute('class', 'col');	
		//...?status(Admin, Editor)		 

		let colElementRemove = document.createElement('div');
		colElementRemove.setAttribute('class', 'col text-center');	
		colElementRemove.innerHTML = '<button class="btn btn-link" value="' + users[i].indexOriginal + '">remove</button>';
        colElementRemove.addEventListener('click', (e) => {
           makeRemove(e.target.getAttribute('value'), JSON.parse(localStorage.users));
		});

		rowElement.appendChild(colElementImg);
		rowElement.appendChild(colElementName);
		rowElement.appendChild(colElementEmail);
		rowElement.appendChild(colElementStatus);
		rowElement.appendChild(colElementRemove);

		parentElement.appendChild(rowElement);
    }
}

function makeRemove(index, users) {
   console.log(index);	

   users.splice(index, 1); 

   users.map(function(user, index) {
	  user.indexOriginal = index;
   });

   localStorage.users = JSON.stringify(users);

   createContentUsers(users);
}

function makeFilter(searchValue) {
   let usersFilter = JSON.parse(localStorage.users).filter((user) => user.name.indexOf(searchValue) != -1);
                     //|| user.email.indexOf(searchValue) != -1); //?email	

    createContentUsers(usersFilter);
}

document.querySelector('.fa-search').addEventListener('click', () => {
	makeFilter(document.querySelector('.search-value').value);
 });

getAPI();
*/

let app = new Vue({
	el: '.container',
	data: {
		API: 'https://pokeapi.co/api/v2/pokemon/',
		parentElement: document.querySelector('.users'), 
		users: [], //!!!  
		searchValue: '', //!!! 
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
		
		makeFilter() {
			let app = this;

			let usersFilter = JSON.parse(localStorage.users).filter((user) => user.name.indexOf(app.searchValue) != -1);
							  //|| user.email.indexOf(searchValue) != -1); //?email	
		 
			//createContentUsers(usersFilter);
			app.users = usersFilter; //!!!	
		},				
	}
 });
 
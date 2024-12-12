export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

export interface Geo {
	lat: string;
	lng: string;
}

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}


const apiList = document.getElementById("apiList") as HTMLUListElement


/* fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json())
.then((users:User[])=>{
    console.log(users)
    users.forEach((user) =>{
        console.log(user)
       const liElement = document.createElement("li")
       liElement.textContent =  `${user.name} - ${user.email} - ${user.address.city}- ${user.company.name}`;
       apiList.appendChild(liElement)
    })
})
 */

fetch("https://jsonplaceholder.typicode.com/users")
.then( async (response) =>{
    const users = await response.json();
    users.forEach((user:User)=>{
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email} - ${user.address.city}- ${user.company.name}`;
        apiList.appendChild(li);
    })
} )

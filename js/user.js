const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => creatUser(data))
}
loadUsers();

const creatUser = dataIN => {
    const users = dataIN.results;
    // console.log(user);
    const profileContainer = document.getElementById('profile-container');
    for (const user of users) {
        let { gender, name, location, dob, email, login, picture } = user;
        const { title, first, last } = name;
        const { age } = dob;
        const { street, city, country } = location;
        const { username, password } = login;
        const { large } = picture;


        const div = document.createElement('div');
        div.classList.add('user-container');

        div.innerHTML = ` <img src="${large}">
        <h3>Name: ${title} ${first} ${last}</h3>
        <h4>Email: ${email}</h4>
        <h4>Gender: ${gender}  |  Age: ${age}</h4>
        <span>Location: ${street.name}, ${city}, ${country}.</span>
        <p>Username: ${username} | Password: ${password}
        <p>
        `;

        profileContainer.appendChild(div);

        // console.log(medium);

        // console.log(city, country);

    }
    /*  
      */

    // console.log(result);

}
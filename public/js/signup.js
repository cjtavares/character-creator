const signupButton = document.getElementById("signupBtn")
async function addNewUser(event) {
    event.preventDefault();
    const newUser = document.querySelector('.newUser').value;
    const password = document.querySelector('.password').value;
    const rPassword = document.querySelector('.rPassword').value;

    console.log(newUser)
    console.log(password)
    console.log(rPassword)
   

    if(rPassword != password) {
        alert("Your passwords do not match!")

    } else{

        console.log("newUser")

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password,
                new_user: newUser
                
                
        }),
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create new user');
    }
};
}

signupButton.addEventListener('click', addNewUser);
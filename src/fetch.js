const uD = fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/users")
.then(response => response.json())
.then(data => console.log(data))

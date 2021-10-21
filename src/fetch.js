const fetchUsers = () => {
  return fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/users")
    .then(response => response.json())
}

const fetchHydration = () => {
  return fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/hydration')
    .then(response => response.json())
    .then(data => console.log(data))
}

const fetchSleep = () => {
  return fetch('https://pacific-badlands-43237.herokuapp.com/api/v1/sleep')
    .then(response => response.json())
}

module.exports = fetchUsers, fetchHydration, fetchSleep;

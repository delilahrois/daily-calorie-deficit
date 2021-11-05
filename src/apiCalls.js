// const fetchData = (data) => {
//   return fetch(`http://localhost:3001/api/v1/${data}`)
//     .then(response => response.json())
// }
// //
//
// const fetchUsers = () => {
//   return fetch("http://localhost:3001/api/v1/users")
//     .then(response => response.json())
// }
//
// const fetchHydration = () => {
//   return fetch('http://localhost:3001/api/v1/hydration')
//     .then(response => response.json())
// }
//
// const fetchSleep = () => {
//   return fetch('http://localhost:3001/api/v1/sleep')
//     .then(response => response.json())
// }
//
// const fetchActivityData = () => {
//   return fetch('http://localhost:3001/api/v1/activity')
//     .then(response => response.json())
// }

const fetchUsers = fetch('http://localhost:3001/api/v1/users')
const fetchHydration = fetch('http://localhost:3001/api/v1/hydration')
const fetchSleep = fetch('http://localhost:3001/api/v1/sleep')
const fetchActivityData = fetch('http://localhost:3001/api/v1/activity')

module.exports = { fetchUsers, fetchHydration, fetchSleep, fetchActivityData};

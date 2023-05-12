const apiKey = 'nGJrZtNBG_tCRd_SZukQZ3bRJ2Dfy_wMbFnkdUshFAU';
const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;

axios.get(url)
.then(response => {
  console.log(response)
})
.catch(error => {
  console.error(error);
});

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getData(data))
}
loadData();
let users = []
function getData(data){
    for (let i = 0; i < data.length; i++) {
        let user = data[i];
        users.push(user);
    }
}



export default users;





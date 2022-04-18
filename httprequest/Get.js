
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://reqres.in/api/users');
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    };
    
    xhr.send();

}

const sendData = () => {


}
//Attaching click event to button
getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', sendData)
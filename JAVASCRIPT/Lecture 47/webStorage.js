document.getElementById("btn").addEventListener("click", (e) => {
    let name = document.getElementById('name').value 
    let rollNo = document.getElementById('rollNo').value 

    localStorage.setItem('data' , JSON.stringify({name : name , rollNo : rollNo}))
    document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name
    document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollNo
      
});
document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name 
document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollNo

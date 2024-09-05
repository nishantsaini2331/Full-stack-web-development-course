
async function getTodo() {

    // const [ input , setInputs] = useState({title :"" , desc : ""})

    let body = {
        method : "GET",
        headers: {
            "Content-Type": "application/json",
        }
    } 

    let res = await fetch("http://localhost:3000/todos", body)
    let json = await res.json()
    console.log(json);
}

getTodo()
// async function api() {
//     let response = fetch("https://apicodethread.cyclic.app")
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);
//         });
// }
// api();



async function api(num1 , num2) {
    try {
        let response = await fetch(
            `https://apicodethread.cyclic.app/sub?a=${num1}&b=${num2}`
        );
        let result = await response.json();
        document.getElementById("total").innerHTML = result.sub
    } catch (err) {
        console.log(err);
    }
}


document.getElementById("btn").addEventListener('click' , () => {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    // document.getElementById("total").innerHTML = Number(num1) + Number(num2)
    api(num1 , num2)
})
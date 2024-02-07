

// const mainDIv = document.getElementById("mainDiv")
// const box = document.getElementById("div1")

// box.addEventListener('click' , (e) => {
//     e.stopPropagation()
//     console.log("Box")
// })

// mainDIv.addEventListener('click' , () => {
//     console.log("Main Div")
// })


// document.body.addEventListener('click' , () => {
//     console.log("body");
// })




const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const items = document.getElementsByClassName("item")


for(let item of items){
    item.addEventListener('dragstart', (e) => {
        // console.log(e.target)
        let data = e.target
        console.log(data)

        box2.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
        })
        box2.addEventListener("drop" ,() =>{
            box2.append(data)
            data = '';
        })

        box1.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
        })
        box1.addEventListener("drop" ,() =>{
            box1.append(data)
            data = ''
        })

    })





    // item.addEventListener('dragend', () => {
    //     console.log("dragover dragend")
    // })
    // item.addEventListener('dragover', () => {
    //     console.log("drag dragover")
    // })
    // item.addEventListener('dragleave', () => {
    //     console.log("drag dragleave")
    // })
    // item.addEventListener('dragenter', () => {
    //     console.log("drag dragenter")
    // })
}



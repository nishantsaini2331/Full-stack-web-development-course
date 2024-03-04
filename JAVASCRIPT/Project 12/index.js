const ACCESS_TOKEN = "rb5Wcel1i9ev7KQpqFucLTec1_wNTdWbeBOx0GeGgkc";
let keyword = document.getElementById("keyword");
let val;
let page = 1;

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()
    page = 1;
    document.getElementById("allImg").innerHTML = "";
    val = keyword.value;
    keyword.value = "";
    fetchImg(val);
});
async function fetchImg(val) {
    let response = await fetch(
        `https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCESS_TOKEN}&page=${page}`
    );
    let result = await response.json();
    if (result.results.length < 1) {
        document.getElementById("allImg").innerHTML = `<h2>Not Found</h2>`;
    } else {
        displayImg(result);
    }
}

function displayImg(res) {
    res.results.map((data) => {
        let div = document.createElement("div");
        div.setAttribute("class", "singleImg");
        div.innerHTML = `
         <div class="firstDiv">
            <img src=${data.user.profile_image.large} alt="" class="userImg">
             <p class="userName">${data.user.name}</p>
         </div>
         <div class="secondDiv">
            <img  class="mainImg" src=${data.urls.regular} alt="">
            <p class="imgDes">${data.alt_description}</p>
         </div>
         `;
        document.getElementById("allImg").appendChild(div);
    });

    document.getElementById("loadMoreBtn").classList.add("visible");
}

document.getElementById("loadMoreBtn").addEventListener("click", () => {
    page++;
    fetchImg(val);
});

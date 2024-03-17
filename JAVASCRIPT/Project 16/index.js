let data = JSON.parse(localStorage.getItem("notes")) || [];

function displayNote() {
    document.getElementById("allNote").innerHTML = "";
    data.map((singleNote, i) => {
        if (singleNote) {
            addNote(singleNote, i);
        }
    });
}

displayNote();

document.getElementById("btn").addEventListener("click", () => {
    addNote();
});

function addNote(note = "", i) {
    let divEle = document.createElement("div");
    divEle.setAttribute("class", "singleNote");
    let date = new Date().toLocaleString();
    let l = document.querySelectorAll("#allNote");
    divEle.innerHTML = `
    <div>
    <span class='index'>${note ? i + 1 : l[0].childNodes.length + 1}</span>
        <button class="editBtn"><span class='add ${
            note ? "" : "hidden"
        }'>Add</span ><span class='save ${
        note ? "hidden" : ""
    }'>Save</span></button>
        <button class="removeBtn">Remove</button>
    </div>
    <div>
        <div class="note ${note ? "" : "hidden"}" id="div"></div>
        <textarea name="" class="note ${
            note ? "hidden" : ""
        }" id="txtA"></textarea>
    </div>
    <div class="date">${note ? note.date : date}</div>
    
    `;

    let editBtn = divEle.querySelector(".editBtn");
    let txtA = divEle.querySelector("#txtA");
    let div = divEle.querySelector("#div");
    let removeBtn = divEle.querySelector(".removeBtn");
    let add = divEle.querySelector(".add");
    let save = divEle.querySelector(".save");

    txtA.value = note.val || "";
    div.innerHTML = marked(note.val || "");

    editBtn.addEventListener("click", () => {
        // editBtn.innerHTML = "Save"
        div.innerHTML = marked(txtA.value);
        txtA.classList.toggle("hidden");
        div.classList.toggle("hidden");
        save.classList.toggle("hidden");
        add.classList.toggle("hidden");
        // displayNote()
    });

    removeBtn.addEventListener("click", (e) => {
        //    e.target.parentNode.parentNode.remove()
        divEle.remove();
        updateStorage();
        displayNote()
    });

    txtA.addEventListener("input", (e) => {
        updateStorage();
    });

    document.getElementById("allNote").append(divEle);
}

function updateStorage() {
    let textArea = document.querySelectorAll("textarea");
    let data1 = [];
    textArea.forEach((e) => {
        if (e) {
            data1.push(e.value);
        }
    });
    data = [];
    let date = document.querySelectorAll(".date");
    date.forEach((e, i) => {
        data.push({ val: data1[i], date: e.textContent });
    });

    localStorage.setItem("notes", JSON.stringify(data));
}

updateStorage();

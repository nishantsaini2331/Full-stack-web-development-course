let todoInput = document.getElementById("todoInput");

let data = JSON.parse(localStorage.getItem("allTodo")) || [];
{
    // function removeTodo(id){
    //     let div = document.getElementById(id)
    //     div.remove()
    // }
    // function markTodo(id){
    //     let div = document.getElementById(id)
    // div.children[0].classList.toggle('completed')
    // }
    // let id = 1;
    // document.getElementById("addBtn").addEventListener("click", (e) => {
    //     e.preventDefault()
    //     let todoVal = todoInput.value;
    //     let div = document.createElement("div");
    //     div.setAttribute("class", "singleTodo");
    //     div.setAttribute("id", id);
    //     div.innerHTML = `
    //     <h2>${todoVal}</h2>
    //     <input type="checkbox" name="" id="" onclick=markTodo(${id})>
    //     <button onclick=removeTodo(${id})>Remove Todo</button>
    //     `;
    //     document.getElementById("allTodo").appendChild(div);
    //     id++
    //     todoInput.value = "";
    // });
}

function displayTodo() {
    document.getElementById("allTodo").innerHTML = "";
    data.map((singleTodo, id) => {
        todoStruture(singleTodo, id);
    });
}

function todoStruture(singleTodo, id) {
    let div = document.createElement("div");
    div.setAttribute("class", "singleTodo");
    div.innerHTML = ` 
        <h2 class="todo">${singleTodo.todoVal}</h2>
        <div class="actionsOnTodo">
        
        <div class="checkbox-wrapper-30">
        <span class="checkbox">
          <input type="checkbox" />
          <svg>
            <use xlink:href="#checkbox-30" class="checkbox"></use>
          </svg>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
          <symbol id="checkbox-30" viewBox="0 0 22 22">
            <path fill="none" stroke="currentColor" d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"/>
          </symbol>
        </svg>
      </div>
        <button class="removeBtn">Remove Todo</button>
        </div>
        `;
    let btn = div.getElementsByTagName("button");
    let inp = div.getElementsByTagName("input");
    let h2 = div.getElementsByTagName("h2");

    btn[0].addEventListener("click", (e) => {
        e.target.parentNode.remove();
        removeTodo(id);
    });
    if (singleTodo.completed) {
        h2[0].classList.toggle("completed");
        inp[0].setAttribute("checked", true);
    }
    inp[0].addEventListener("click", (e) => {
        toggleTodo(id);
    });

    document.getElementById("allTodo").appendChild(div);
}

document.getElementById("addBtn").addEventListener("click", (e) => {
    e.preventDefault();
    let todoVal = todoInput.value;
    if(todoVal === ''){
        alert('input field is empty');
        return
    }
    data.push({ todoVal, completed: false });
    localStorage.setItem("allTodo", JSON.stringify(data)); // update todo in localstorage
    displayTodo(); // re-render todos
    todoInput.value = "";
});

function removeTodo(id) {
    data.splice(id, 1);
    localStorage.setItem("allTodo", JSON.stringify(data)); // update todo in localstorage
    displayTodo(); // re-render todos
}

function toggleTodo(id) {
    data[id].completed = !data[id].completed;
    localStorage.setItem("allTodo", JSON.stringify(data)); // update todo in localstorage
    displayTodo(); // re-render todos
}

displayTodo();
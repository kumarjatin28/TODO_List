Submit.addEventListener("click", (e)=>{
    e.preventDefault()
    let titlec = title.value
    let decc = dec.value;
    localStorage.setItem("todo", JSON.stringify([titlec,decc]));
    console.log(e);
    todo.innerHTML = "The Title is: " +`${titlec}` + "<br>" + "The Description is: " + `${decc}`
})


DeleleBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.removeItem("todo");
    todo.innerHTML =``
})



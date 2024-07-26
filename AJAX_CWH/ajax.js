let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener("click", buttonClickHandler)

function buttonClickHandler() {
    console.log("you've clicked fetch btn");
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();
    //open the object
    // xhr.open('GET', "https://jsonplaceholder.typicode.com/todos/1", true)  //for get request
    xhr.open('POST', "http://dummy.restapiexample.com/api/v1/create", true)  //for post request
    xhr.getResponseHeaders('Content-type', 'application/json')
    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log("on progress");
    }
    xhr.onreadystatechange = function () {
        console.log("ready state is ", xhr.readyState);
    }
    //what to do when response is ready
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
        } else {
            console.error("some error occured");
        }
    }
    //send request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log("we are done");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener("click", popHandler)

function popHandler() {
    console.log("you've clicked pop handler");
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();
    //open the object
    xhr.open('GET', "http://dummy.restapiexample.com/api/v1/employees", true)  //for get request
    //what to do when response is ready
    xhr.onload = function () {
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj) {
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        } else {
            console.error("some error occured");
        }
    }
    //send request
    xhr.send();
    console.log("we are done fetching employees");
}
// document.querySelector("#red").onclick = function () {
// document.querySelector("#demo").style.color = "red";
// };

// document.querySelector("#blue").onclick = function () {
document.querySelector("#demo").style.color = "blue";
// };

// document.querySelector("#yellow").onclick = function () {
// document.querySelector("#demo").style.color = "yellow";
// };

document.querySelectorAll("button").forEach(function (item) {
    item.onclick = function () {
        document.querySelector("#demo").style.color = item.dataset.color;
        document.querySelector("#demo").style.textAlign = item.dataset.location;
    }
})

document.querySelector("#myForm").addEventListener("submit", function (event) {
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#result"); // ul

    if (works == "") {
        alert("Enter Data");
        event.preventDefault();
    } else {
        var myLi = document.createElement("li");
        
      
        myLi.innerHTML = `${works} <button class="btn btn-accent btn-sm ms-2 delete-btn">Delete</button>`;
        
    
        myLi.querySelector(".delete-btn").onclick = function () {
            myLi.remove();
        };

        result.append(myLi);
        document.querySelector("#works").value = "";
        event.preventDefault();
    }
})
// select the parent box
const box = document.querySelector(".box");

// event listener on mouse hover and add class "appear"
box.addEventListener("mouseover", function() {
    const popMsg = document.querySelector(".pop");
    popMsg.classList.add("appear");
    });

// event listener on mouse out and remove class "appear"
box.addEventListener("mouseout", function() {
    const popMsg = document.querySelector(".pop");
    popMsg.classList.remove("appear");
    });

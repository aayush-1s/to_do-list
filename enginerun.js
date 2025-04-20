// Add event listener for "Enter" key press on the input box
document.getElementById("enter_task").addEventListener("keypress", function(event) {
    // Check if the pressed key is the "Enter" key (key code 13)
    if (event.key === "Enter") {
        submittask();
    }
});

function submittask() {
    const input = document.getElementById("enter_task");
    const actualtask = input.value.trim();

    if (actualtask !== "") {
        const li = document.createElement("li");
        li.textContent = actualtask;

        // ✅ Add event listener to strike through on click
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.onclick = function () {
            li.remove();
        };

        li.appendChild(deleteBtn);
        document.getElementById("tasklist").appendChild(li);
        input.value = ""; // Clear the input box after task is added
    }
}

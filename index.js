// function for reset button
function reset() {
    const clear = document.getElementById("forms").reset();
}

// coding for adding form details to the table
document.getElementById("forms").addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const mail = document.getElementById("email").value;
    const address = document.getElementById("add").value;
    const pincode = document.getElementById("pin").value;
    const gender = document.getElementById("gender").value;
    const checkboxes = document.querySelectorAll('input[name="food"]:checked');
    const cofValues = Array.from(checkboxes).map(checkbox => checkbox.value).join(", ");
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    // implementing the form details to table using table Id
    const table = document.getElementById("show").querySelector("tbody");
    // adding a new row in table with create element
    const newRow = document.createElement("tr");
    // adding details to table
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${mail}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <td>${cofValues}</td>
      <td>${state}</td>
      <td>${country}</td>
    `;
    // adding new rows 
    table.appendChild(newRow);
});

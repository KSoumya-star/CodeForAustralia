
//event listener for button click
document.getElementById("numAdd").addEventListener("click", function() {
    //check if the entered number is numeric
    if (isNaN(document.getElementById("num").value)) {
        alert("Enter a numeric value");
        return false;
    }

    //increment the value by 1 if it is numeric
    let numValue = Number(document.getElementById("num").value);
    numValue += 1 ;
    document.getElementById("num").value = numValue;
  });
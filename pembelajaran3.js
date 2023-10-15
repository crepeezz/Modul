Ngubah = () => {
    var element = document.getElementById('pesan');
    var dropdown = document.getElementById('alertTypeDropdown');
    element.className = "";
    element.classList.add("alert");
    element.classList.add("alert-" + dropdown.value);
    
    var customMessage = document.getElementById('customMessage').value;
    element.innerHTML = ` ${customMessage}`;
}
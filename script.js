$("#form").submit(e => {
    let form = $("#form");
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    //if (!arePasswordsValid()) return false;
});

function arePasswordsValid() {
    if (!$("#inputPassword").val() == $("#inputPassword2").val()) {
        alert("Password are not the same.");
    }
}
$("#form").submit(e => {
    if (!arePasswordsValid()) return false;
});

function arePasswordsValid() {
    if (!$("#inputPassword").val() == $("#inputPassword2").val()) {
        alert("Password are not the same.");
    }
}
$("#form").submit(e => {
    if (!validateForm()) {
        e.preventDefault();
    }
});

function validateForm() {
    let form = $("#form");
    let foundError = false;
    form.find("input").each((i, elem) => {
        elem = $(elem);
        let pattern = elem.attr("pattern");
        if (pattern && !elem.val().match(new RegExp(pattern))) {
            showDivError(elem);
            foundError = true;
        }
        else showDivError(elem, true);
    });
    return !foundError;
}

function arePasswordsValid() {
    let pwd1 = $("#inputPassword");
    let pwd2 = $("#inputPassword2");
    if (!pwd1.val() == pwd2.val()) {
        showDivError(pwd2);
    }
}

function showDivError(elem, hide=false) {
    let divError = elem.parent().find(".val-error").first(); 
    if (divError && !hide) divError.removeClass("hidden");
    else if (divError) divError.addClass("hidden");
}
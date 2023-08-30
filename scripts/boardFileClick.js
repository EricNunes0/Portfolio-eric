function boardFileClick({id}) {
    const filenameButtons = document.querySelectorAll(".board-filename-buttons");
    const filenameButton = document.querySelector(`#filename-button-${id}`);
    const codes = document.querySelectorAll(".board-codes");
    const code = document.querySelector(`#code-${id}`);


    for(const button of filenameButtons) {
        button.classList.remove("selected");
    };
    if(filenameButton) {
        filenameButton.classList.add("selected");
    };

    for(const code of codes) {
        code.classList.remove("show");
    };
    if(code) {
        code.classList.add("show");
    };
};
export default function boardFileClick({id, type}) {
    const filenameButtons = document.querySelectorAll(`.board-filename-buttons`);
    const filenameButton = document.querySelector(`#filename-button-${type}-${id}`);
    const codes = document.querySelectorAll(".board-codes");
    const code = document.querySelector(`#code-${type}-${id}`);

    for(const button of filenameButtons) {
        if(button.classList.contains(type)) {
            button.classList.remove("selected");
        };
    };
    if(filenameButton) {
        filenameButton.classList.add("selected");
    };

    for(const code of codes) {
        if(code.classList.contains(type)) {
            code.classList.remove("show");
        };
    };
    if(code) {
        code.classList.add("show");
    };
};
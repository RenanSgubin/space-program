

aux = 0;

function showHiddenMenu() {


    aux++;
    document.getElementsByClassName("container-hidden-menu")[0].style.right = "0%";

    if(aux === 2) {
        document.getElementsByClassName("container-hidden-menu")[0].style.right = "-100%";
        aux = 0;
    }

}


let taskbar = document.getElementsByClassName("taskbar")[0]
let statmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click",()=>{
    if (statmenu.style.bottom == "50px") {
        statmenu.style.bottom = "-655px"
    }
    else{
        statmenu.style.bottom = "50px"
    }
})
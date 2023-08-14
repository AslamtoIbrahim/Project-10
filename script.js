function shareBtn(){
    const share = document.getElementById("sharing");
    const icon = document.getElementById("share");
    const pa = icon.querySelectorAll('path');

    if (share.style.display == "none") {
        share.style.display = "flex";
        icon.style.backgroundColor = "hsl(217, 19%, 35%)";
        pa.forEach(path =>{
            path.setAttribute('fill','hsl(210, 46%, 95%)')
        })
    } else {
        share.style.display = "none";
        icon.style.backgroundColor = "hsl(210, 46%, 95%)";
        pa.forEach(path =>{
            path.setAttribute('fill','hsl(217, 19%, 35%)')
        })
    }
}
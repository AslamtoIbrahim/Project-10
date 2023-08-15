function showSocialBtn(){
    const shareIcon = document.getElementById("share-icon");
    const socialHidden = document.getElementById("social-hidden");
    const icon = document.getElementById("icon");

    if (socialHidden.style.display == "none") {
        socialHidden.style.display = "flex";
        shareIcon.style.backgroundColor = "hsl(217, 19%, 35%)";
        icon.src = 'images/icon-share-white.svg'
        
    } else {
        socialHidden.style.display = "none";
        shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
        icon.src = 'images/icon-share.svg'
         
    }
}
function showSocialBtn(){
    const shareIcon = document.getElementById("share-icon");
    const icon = document.getElementById("icon");
    const information = document.getElementById("information");
    const authorInfo = document.getElementById("author-info");
    const socialHidden = document.getElementById("social-hidden");

    if (screen.width > 800) {
        if (socialHidden.style.display == "none") {
            socialHidden.style.display = "flex";
            shareIcon.style.backgroundColor = "hsl(217, 19%, 35%)";
            icon.src = 'images/icon-share-white.svg'
            
        } else {
            socialHidden.style.display = "none";
            shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
            icon.src = 'images/icon-share.svg'
             
        }
    } else {
        if (socialHidden.style.display == "none") {
            socialHidden.style.display = "flex";
            authorInfo.style.display = "none";
            information.style.backgroundColor = "hsl(217, 19%, 35%)";
            
        } else {
            socialHidden.style.display = "none";
            authorInfo.style.display = "flex";
            information.style.backgroundColor = "#fff";
        }
        
    }

    
}
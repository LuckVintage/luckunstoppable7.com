document.addEventListener("DOMContentLoaded", function () {
    var discordImg = document.getElementById("discord-img");

    discordImg.onload = function () {
        discordImg.style.filter = "none";
    };

    discordImg.src = "https://lanyard.cnrad.dev/api/144812972802310145?showDisplayName=true&idleMessage=I'm%20not%20playing%20anything%20right%20now...&borderRadius=45px";
});

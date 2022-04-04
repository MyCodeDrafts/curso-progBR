const image = document.querySelector("#like");

/* image.onclick = () => {
    image.src = "./img/thumbs-down-green.png";

}
 */


image.addEventListener("click", function() {
    
    image.setAttribute("src", "img/thumbs-down-green.png")
})

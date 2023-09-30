import { message } from "./component/message.js";


const readMore = document.querySelector(".read-more");

readMore.onclick= function(){
    window.setTimeout(function(){location.href = 'about.html';}, 500);
};
 
const baseUrl = "https://blog.gulce.no/wp-json/wp/v2/posts?per_page=100&_embed";
const carouselContent=document.querySelector(".carousel-container")
const carouselWrapper = document.querySelector(".carousel-wrapper");
const errorMessage = document.querySelector(".error-message");
const leftButton = document.querySelector(".leftBtn");
const rightButton = document.querySelector(".rightBtn");
const carouselItems = document.querySelectorAll('.carousel-items');


async function getPostsCarousel(url) {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        posts.forEach(function (post) {
            carouselWrapper.innerHTML +=
                `<div class="carousel-items"><a href="blog_specific.html?id=${post.id}">
            <img src="${post._embedded[`wp:featuredmedia`][`0`].source_url}" alt="${post.title.rendered}" />
            <h2>${post.title.rendered}</h2>
            ${post.excerpt.rendered}
            </a></div> `
        });   
        
    }
    catch (error) {
        errorMessage.innerHTML = message("error", error);
        }
}

getPostsCarousel(baseUrl);


leftButton.addEventListener("click", () => {
    carouselWrapper.scrollBy({
        left: -carouselWrapper.clientWidth,
        // behavior: "smooth"
    });
    
});

rightButton.addEventListener("click", () => {
    carouselWrapper.scrollBy({
        left: carouselWrapper.clientWidth,
        // behavior: "smooth"
    });
 
});

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
    
    })
})





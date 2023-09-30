import { message } from "./component/message.js";

const baseUrl = "https://blog.gulce.no/wp-json/wp/v2/posts?per_page=100&_embed";
const resultsContainer = document.querySelector(".posts");
const errorMessage = document.querySelector(".error-message");
const loadMore = document.querySelector(".load-more")

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        createHtmlPosts(posts)
    }
    catch (error) {
        errorMessage.innerHTML = message("error", error);
        }
}

getPosts(baseUrl);

function createHtmlPosts(posts) {
    for (let i = 0; i < 6; i++) {
        resultsContainer.innerHTML +=
            `<div class="product"><a href="blog_specific.html?id=${posts[i].id}">
        <img src="${posts[i]._embedded[`wp:featuredmedia`][`0`].source_url}" alt="${posts[i].title.rendered}" />
        <h2>${posts[i].title.rendered}</h2>
        ${posts[i].excerpt.rendered}
        </a></div>`;
}  
        loadMore.onclick = function () {
            for (let i = 6; i < posts.length; i++) {
                    resultsContainer.innerHTML +=
                        `<div class="product"><a href="blog_specific.html?id=${posts[i].id}">
                <img src="${posts[i]._embedded[`wp:featuredmedia`][`0`].source_url}" alt="${posts[i].title.rendered}" />
                <h2>${posts[i].title.rendered}</h2>
                <p>${posts[i].excerpt.rendered}</p>
                </a></div>`;
                loadMore.classList.add("enough")  
            }
        }
    
}


    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.classList.add("loader--hidden");
        loader.addEventListener("transitionend", () => {
        
        })
    })

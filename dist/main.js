"use strict";
const postsData = [
    {
        id: 1,
        title: 'Post 1',
        body: 'Body of post 1',
        imageUrl: 'https://picsum.photos/id/1/1200/800',
    },
    {
        id: 3,
        title: 'Post 3',
        body: 'Body of post 3',
        imageUrl: 'https://picsum.photos/id/3/1200/800',
    },
    {
        id: 6,
        title: 'Post 6',
        body: 'Body of post 6',
        imageUrl: 'https://picsum.photos/id/6/1200/800',
    }
];
class BlogPost {
    constructor(id, title, body, imageUrl, newElementClass, author) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
        this.newElementClass = newElementClass;
        this.author = author;
    }
}
class Posts {
    constructor() {
        this.posts = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Posts();
        return this.instance;
    }
    readPosts() {
        for (let postData of postsData) {
            this.posts.push(new BlogPost(postData.id, postData.title, postData.body, postData.imageUrl, "first-flex-item", "randomUser"));
        }
    }
    // postCard(postObj: BlogPost){
    //     return `
    //             <h3 class="post-title">${postObj.title}</h3>
    //             <p class="post-body">${postObj.body}</p>
    //             <img src="${postObj.imageUrl}" alt="imagem do post ${postObj.id}" class="post-image">
    //         `;
    // }
    postCard(postObj) {
        return `
                <h3 class="post-title">${postObj.title}</h3>
                <p class="post-body">${postObj.body}</p>
                <div class="post-image-container">
                    <img src="${postObj.imageUrl}" alt="imagem do post ${postObj.id}" class="post-image">
                </div>
            `;
    }
    renderPosts() {
        const hostElement = document.getElementById("flex-container");
        let count = 0;
        for (let postData of this.posts) {
            const newPost = document.createElement("section");
            newPost.classList.add(postData.newElementClass);
            newPost.innerHTML = this.postCard(postData);
            hostElement.appendChild(newPost);
            console.log(count);
            count += 1;
        }
    }
}
const posts = Posts.getInstance();
posts.readPosts();
posts.renderPosts();
//# sourceMappingURL=main.js.map
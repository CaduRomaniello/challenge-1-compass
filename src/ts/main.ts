// const postsData = [
//     {
//         id: 1,
//         title: 'Post 1',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
//         imageUrl: 'https://picsum.photos/id/1/1200/800',
//     },
//     {
//         id: 3,
//         title: 'Post 3',
//         body: 'Body of post 3',
//         imageUrl: 'https://picsum.photos/id/3/1200/800',
//     },
//     {
//         id: 6,
//         title: 'Post 6',
//         body: 'Body of post 6',
//         imageUrl: 'https://picsum.photos/id/6/1200/800',
//     }
// ]

// const postsComents = [
//     {
//         id: 1,
//         postId: 1,
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
//         email: 'user1@hotmail.com',
//     },
//     {
//         id: 2,
//         postId: 1,
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
//         email: 'user2@hotmail.com',
//     },
//     {
//         id: 3,
//         postId: 3,
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
//         email: 'user3@hotmail.com',
//     },
//     {
//         id: 4,
//         postId: 3,
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
//         email: 'user4@hotmail.com',
//     },
//     {
//         id: 5,
//         postId: 6,
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
//         email: 'user5@hotmail.com',
//     },
//     {
//         id: 6,
//         postId: 6,
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
//         email: 'user6@hotmail.com',
//     }
// ]

// this is a class that will help us to store the information about each post in the home
class BlogPost{
    id: number;
    title: string;
    body: string;
    imageUrl: string;
    newElementClass: string;

    constructor(id: number, title: string, body: string, imageUrl: string, newElementClass: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
        this.newElementClass = newElementClass;
    }
}

// this is a singleton class that will do all the work to load and render the posts in the main screen
class Posts{
    public posts: BlogPost[] = [];
    private static instance: Posts;

    private constructor() {}

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Posts();
        return this.instance;
    }

    // this function reads all the posts in the data.ts file and store them in this class posts attribute
    readPosts(){
        for (let postData of postsData){
            this.posts.push(new BlogPost(postData.id, postData.title, postData.body, postData.imageUrl, "first-flex-item"))
        }
    }

    // this function were inspired in the example provided by the instructors where he creates an HTMLElement with a function that returns a string that will be the ineerHMTL property of the hostElement
    postCard(postObj: BlogPost){
        return `
                <h2 class="post-title">${postObj.title}</h2>
                <p class="post-body max-text">${postObj.body}</p>
                <img src="${postObj.imageUrl}" alt="imagem do post ${postObj.id}" class="post-image">
            `;
    }
        
    // this functions creates a HTMLElement for every post in the data.ts file and adds it to the hostElement
    renderPosts(){
        const hostElement = document.getElementById("flex-container")! as HTMLElement;
        for (let postData of this.posts){
            const newPost = document.createElement("a");
            newPost.href = `post.html?id=${postData.id}`;
            newPost.classList.add(postData.newElementClass);
            newPost.innerHTML = this.postCard(postData);
            hostElement.appendChild(newPost);
        }
    }
}

// this is a class that will help us to store the information about each comment of each post in the post details page
class BlogComment{
    public id: number;
    public postId: number;
    public body: string;
    public email: string;

    constructor(id: number, postId: number, body: string, email: string) {
        this.id = id;
        this.postId = postId;
        this.body = body;
        this.email = email;
    }
}

// thi is a class that will e encharged of render the elements in the post details page
class PostComments{
    public post: BlogPost;
    public comments: BlogComment[] = [];

    constructor(postId:number) {
        let post = postsData.find(post => post.id == postId);
        let comments = postsComents.filter(comment => comment.postId == postId);

        if (post){
            this.post = new BlogPost(post.id, post.title, post.body, post.imageUrl, "first-flex-item");
        }
        else{
            this.post = new BlogPost(-1, '', '', '', "first-flex-item");

        }

        if (comments){
            for (let comment of comments){
                this.comments.push(new BlogComment(comment.id, comment.postId, comment.body, comment.email))
            }
        }
    }
        

    // this functions renders the part of the page that will contains the data about the specific post
    renderPosts(){
        const hostElement = document.querySelector(".first-flex-item")! as HTMLElement;
        // console.log(hostElement);
        hostElement.querySelector("h2")!.innerText = this.post.title;
        hostElement.querySelector(".post-body")!.innerHTML = this.post.body;
        hostElement.querySelector("img")!.src = this.post.imageUrl;
        hostElement.querySelector("img")!.alt = ` imagem do post ${this.post.id}`;
    }

    // this function has the same meaning of the Posts.postCard method
    createComment(postObj: BlogComment){
        return `
                <h3 class="post-title">${postObj.email}</h3>
                <p class="post-body">${postObj.body}</p>
            `;
    }

    // this functions will renders all the comments in the post details page
    renderComments(){
        const hostElement = document.getElementById("flex-container-comments")! as HTMLElement;
        for (let comment of this.comments){
            const newPost = document.createElement("div");
            newPost.classList.add("comment");
            newPost.innerHTML = this.createComment(comment);
            hostElement.appendChild(newPost);
        }
    }
}

// function that will be encharged of load and render the home page
function home(){
    const posts = Posts.getInstance();
    
    posts.readPosts();
    
    posts.renderPosts();
}

// function that will be encharged of load and render the post details page
function post(){
    let params = (new URL(document.location.href)).searchParams;
    let id_param = params.get("id");
    let id:number;

    if (id_param){
        id = +id_param;
        let postComments = new PostComments(id);
        console.log(postComments.post);
        console.log(postComments.comments);

        postComments.renderPosts();
        postComments.renderComments();
    }
}
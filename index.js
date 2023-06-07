const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
  
]

const container = document.getElementById("container")

for (let i = 0; i < posts.length; i++) {
    const newPost = document.createElement("div")
    newPost.setAttribute("class", "post")
    
    const postAuthor = document.createElement("div")
    postAuthor.setAttribute("class", "post-author")

    const imgOp = document.createElement("img")
    imgOp.setAttribute("class", "img-op")
    imgOp.setAttribute("src", `${posts[i].avatar}`)

    const opLocation = document.createElement("div")
    opLocation.setAttribute("class", "op-location")
    opLocation.innerHTML = `<p class="op-name">${posts[i].name}</p>
    <p>${posts[1].location}</p>`

    const postImage = document.createElement("div")
    postImage.setAttribute("class", "post-img")

    const imagePost = document.createElement("img")
    imagePost.setAttribute("class", "img-post")
    imagePost.setAttribute("src", `${posts[i].post}`)

    const postIcons = document.createElement("div")
    postIcons.setAttribute("class", "post-icons")

    const iconLike = document.createElement("img")
    iconLike.setAttribute("class", "icon-like")
    iconLike.setAttribute("src", "images/icon-heart.png")

    const iconComment = document.createElement("img")
    iconComment.setAttribute("class", "icon-comment")
    iconComment.setAttribute("src", "images/icon-comment.png")

    const iconDm = document.createElement("img")
    iconDm.setAttribute("class", "icon-like")
    iconDm.setAttribute("src", "images/icon-dm.png")

    const postLikes = document.createElement("div")
    postLikes.setAttribute("class", "post-likes")

    const likes = document.createElement("p")
    likes.setAttribute("class", "likes")
    likes.innerHTML = `${posts[i].likes} likes`

    const postComments = document.createElement("div")
    postComments.setAttribute("class", "post-comments")
    postComments.innerHTML = `<p><span class="bold">${posts[i].username} </span>${posts[i].comment}</p>`

    postAuthor.append(imgOp)
    postAuthor.append(opLocation)

    newPost.append(postAuthor)

    postImage.append(imagePost)

    newPost.append(postImage)

    postIcons.append(iconLike)
    postIcons.append(iconComment)
    postIcons.append(iconDm)

    newPost.append(postIcons)

    postLikes.append(likes)

    newPost.append(postLikes)

    newPost.append(postComments)

    container.append(newPost)
   
}
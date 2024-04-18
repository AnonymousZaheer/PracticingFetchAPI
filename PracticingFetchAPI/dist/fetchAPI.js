const endPoint = "https://jsonplaceholder.typicode.com/photos/"

const getButton = document.querySelector('#getPost');
const createButton = document.querySelector('#createPost');
const updateButton = document.querySelector('#updatePost');
const patchButton = document.querySelector('#patchPost');
const deleteButton = document.querySelector('#deletePost');

//GET POST

const getPosts = async () => {
    try {
        const response = await fetch(endPoint);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log(error);
    }
}

getButton.addEventListener('click', async () => {
    const posts = await getPosts();
    if(posts){
        const reduceList = posts.slice(0,15);
        const table = `<table> <thead> <tr> <th>No#</th> <th>Title</th> <th>Pictures</th> </thead>
        <tbody>${reduceList.map( (post) =>
            `<tr> <th>${post.id}</th> <td>${post.title}</td> <td><img width="60px" src=${post.url}/></td> <tr>`).join("\n")} </tbody></table>`;
            document.querySelector('#table').innerHTML = table;
    }
})

// POST 

const createPost = async (newPost) => {
    try{
        const response = await fetch(endPoint, {
            method:"POST",
            body:JSON.stringify(newPost),
            headers: {"Content-type":"application/json; charset=UTF-8"},
        });
        const post = await response.json();
        return post;
    }
    catch(error){
        console.log(error);
    }
}

createButton.addEventListener('click', async () => {
    const newPost = {
        albumId: 2,
        title : "Title of New Post",
        url : "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?t=st=1713459094~exp=1713462694~hmac=c68f8c6dba2c56c10048a328f4fd775b09f44bde4776de2c15a37c63a7056353&w=1060",
        thumbnailUrl : "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?t=st=1713459094~exp=1713462694~hmac=c68f8c6dba2c56c10048a328f4fd775b09f44bde4776de2c15a37c63a7056353&w=1060",
    }
    const createdPost = await createPost(newPost);
    console.log(createdPost);
    alert('Post Created in Console');
})

// PUT

const updatePost = async (newpost, id) => {
    try{
        const response = await fetch(`${endPoint}/${id}`,{
            method:"PUT",
            body:JSON.stringify(newpost),
            headers: {"Content-type":"application/json; charset=UTF-8"},
        });
        const post = response.json();
        return post;
    }
    catch(error){
        console.log(error);
    }
}
updateButton.addEventListener('click', async ()=> {
    const newPost = {
        albumId : "2",
        title : "Post Updated",
        url : "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?t=st=1713459094~exp=1713462694~hmac=c68f8c6dba2c56c10048a328f4fd775b09f44bde4776de2c15a37c63a7056353&w=1060",
        thumbnailUrl : "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?t=st=1713459094~exp=1713462694~hmac=c68f8c6dba2c56c10048a328f4fd775b09f44bde4776de2c15a37c63a7056353&w=1060",
    }
    const updatedPost = await updatePost(newPost,2);
    console.log(updatedPost);
    alert("Post Updated in Console");
})

// PATCH

const patchPost = async (newpost, id) => {
    try {
        const response = await fetch(`${endPoint}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(newpost),
            headers: {"Content-type":"application/json; charset=UTF-8"},
        });
        const post = await response.json();
        return post;
    } catch (error) {
        console.log(error)
    }
};

patchButton.addEventListener('click', async () => {
    const newPost = {
        url : "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?t=st=1713459094~exp=1713462694~hmac=c68f8c6dba2c56c10048a328f4fd775b09f44bde4776de2c15a37c63a7056353&w=1060",
    };
    const patchedPost = await patchPost(newPost,2);
    console.log(patchedPost)
    alert("Patch action done on Console");
})

// DELETE

const deletePost = async (id) => {
    try {
        const response = await fetch(`${endPoint}/${id}`, {
            method: "DELETE",
        });
        const post = await response.json();
        return post;
    } catch (error) {
        console.log(error)
    }
};

deleteButton.addEventListener('click', async () => {
    const deletedPost = await deletePost(2);
    console.log(deletedPost)
    alert("Delete Action Done on Console")
})


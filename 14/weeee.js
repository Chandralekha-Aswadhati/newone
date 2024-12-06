// const params=new URLSearchParams({query:'hug',type:1});
// fetch("https://nekos.best/api/v2/search?${params}")
// .then(Response =>Response.json())
// .then(data =>console.log(data))
// .catch(error=>console.error(error))



const postData={
    title:"bhavya and her miracles",
    body:"this is the content of bhavana",
    userId:1,
};
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    header:{
        "content-type":"application/json",
    },
    body:JSON.stringify(postData),
})
.then(Response=>Response.json())
.then(data=>console.log("created post",data))
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(Response=>Response.json())
.then(data=>console.log("created post",data))
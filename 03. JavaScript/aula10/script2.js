let users = []
let posts = []

async function fetchData() { 
  const userData = await fetch('https://jsonplaceholder.typicode.com/users')
  const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')
  users = await userData.json()
  posts = await postsData.json()
}

async function setData() {
  await fetchData()
  
  users.forEach(user => {
    console.log("User: " + user.username)

    const usersPosts = posts.filter(post => post.userId === user.id)

    usersPosts.forEach(post => {
        console.log('Post: ' + post.title)
    })

    console.log('---------------------------------------')

  })
}

setData()
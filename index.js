console.log("najir");

require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData ={
  
    "login": "MNnajir",
    "id": 121566044,
    "node_id": "U_kgDOBz7zXA",
    "avatar_url": "https://avatars.githubusercontent.com/u/121566044?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MNnajir",
    "html_url": "https://github.com/MNnajir",
    "followers_url": "https://api.github.com/users/MNnajir/followers",
    "following_url": "https://api.github.com/users/MNnajir/following{/other_user}",
    "gists_url": "https://api.github.com/users/MNnajir/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MNnajir/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MNnajir/subscriptions",
    "organizations_url": "https://api.github.com/users/MNnajir/orgs",
    "repos_url": "https://api.github.com/users/MNnajir/repos",
    "events_url": "https://api.github.com/users/MNnajir/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MNnajir/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abdul Najir Ansari",
    "company": null,
    "blog": "",
    "location": "janakpur Nepal",
    "email": null,
    "hireable": null,
    "bio": "JavaScript",
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2022-12-28T15:23:27Z",
    "updated_at": "2024-09-15T15:04:13Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook', (req, res) =>{
    res.send('Najir Ansari')
})
app.get('/login', (req, res) =>{
    res.send('<h1> Please login at chai aur code</h1>')
})
app.get('/youtube', (req, res) =>{
    res.send('<h2>chai aur code </h2>')
})
app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
require('dotenv').config()
const express = require('express')


const app = express()

const port = 3000


const githubData = {
    "login": "gobinda29",
    "id": 103523606,
    "node_id": "U_kgDOBiulFg",
    "avatar_url": "https://avatars.githubusercontent.com/u/103523606?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/gobinda29",
    "html_url": "https://github.com/gobinda29",
    "followers_url": "https://api.github.com/users/gobinda29/followers",
    "following_url": "https://api.github.com/users/gobinda29/following{/other_user}",
    "gists_url": "https://api.github.com/users/gobinda29/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/gobinda29/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/gobinda29/subscriptions",
    "organizations_url": "https://api.github.com/users/gobinda29/orgs",
    "repos_url": "https://api.github.com/users/gobinda29/repos",
    "events_url": "https://api.github.com/users/gobinda29/events{/privacy}",
    "received_events_url": "https://api.github.com/users/gobinda29/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Gobinda Das",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-04-12T16:15:18Z",
    "updated_at": "2024-01-16T16:33:12Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("gobindadas@twitter.com")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login</h1>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
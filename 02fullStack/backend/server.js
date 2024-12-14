import express from "express";

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Server is ready")
})


app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          "id": 1,
          "title": "The Mathematician's Joke",
          "content": "Why do mathematicians never argue? Because they always solve their problems!"
        },
        {
          "id": 2,
          "title": "Lightbulb Joke",
          "content": "How many software engineers does it take to change a lightbulb? None, that's a hardware issue!"
        },
        {
          "id": 3,
          "title": "Pun Time",
          "content": "I told my computer I needed a break, and now it won't stop sending me vacation ads."
        },
        {
          "id": 4,
          "title": "Coffee Humor",
          "content": "Why did the coffee file a police report? It got mugged!"
        },
        {
          "id": 5,
          "title": "Dad Joke Alert",
          "content": "Why don't scientists trust atoms? Because they make up everything!"
        }
      ]

      res.send(jokes)   
})


app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
})
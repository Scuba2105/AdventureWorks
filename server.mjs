import express from 'express'

// Initialise app and specify port.
const app = express();
const port = 5000;

// Serve the static files from the public directory.
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
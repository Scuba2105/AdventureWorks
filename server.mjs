import express from 'express'
import cors from 'cors'

// Initialise app and specify port.
const app = express();
const port = 5000;

// Serve the static files from the public directory.
app.use(express.static('public'));

app.use(cors({
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}))

// Route for serving the dashboard data
app.get('/dashboardData',(req, res) => {
  res.json({text: 'Hello'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
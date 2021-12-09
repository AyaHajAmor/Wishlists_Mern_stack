const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const auth = require('./routers/route');
const PORT = process.env.PORT || 8080;
const app = express();


dotenv.config({ path: './config/config.env' });

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', auth);
app.get('/', (req, res) => {
  res.send('Hello Astrolab!');
});

app.listen(PORT, () =>
  console.log(
    `My Astrolab wishlists back-end is running at ${PORT} in ${process.env.NODE_ENV} environment`
  )
);
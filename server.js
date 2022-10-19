const express= require ('express')
const htmlroutes= require('./routes/htmlroutes')
const apiroutes= require('./routes/apiroutes')
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroutes)
app.use('/', htmlroutes )

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
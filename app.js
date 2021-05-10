const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs')

// listen for request
app.listen(5000);

app.get('/', (req, res) =>{
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  // res.send('<p>Home Page</p>');
  res.render('index', { title: 'Home', blogs });

});

app.get('/about', (req, res) =>{

  // res.send('<p>About Page</p>');
  res.render('about', { title: 'About' });
});

app.get('/blog/create', (req, res) =>{

  // res.send('<p>About Page</p>');
  res.render('create', { title: 'Create' });
});

// redirect

app.get('about-us', (req, res) => {
  res.redirect('/about')
})

// 404 page
app.use((req, res) =>{
  res.render('404', { title: 'Oops...' });
})

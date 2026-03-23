const express = require('express');
const app = express();

// Middleware function
// app.use((req,res,next)=>{
//     console.log('Middleware function1 executed');
//     next(); 
// });
// app.use((req,res,next)=>{
//     console.log('Middleware function2 executed');
//     next(); 
// });

// //loger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toLocaleTimeString();
//     console.log(req.method, req.hostname ,req.path, req.time);
//     next();
// });

//middleware for '/about' route
app.use('/about', (req, res, next) => {
    console.log('Middleware for /about route executed');
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
//404 error handling middleware
app.use((req, res, next) => {
    res.status(404).send('Page Not Found!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
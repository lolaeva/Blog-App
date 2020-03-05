const express    = require('express'),
      request    = require('request'),
      rp         = require('request-promise'),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      expressSanitizer = require('express-sanitizer'),
      methodOverride = require('method-override'),
      app        = express();

// APP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressSanitizer('express-sanitizer'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

//MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
const Blog = mongoose.model('Blog', blogSchema)

// RESTFUL ROUTES

app.get('/', (req, res) => {
    res.redirect('/blogs')
})
// INDEX ROUTE
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err){
            console.log(err)
        } else {
            res.render('index', {blogs:blogs})
        }
    });
});

//NEW ROUTE
app.get('/blogs/new', (req, res) => {
    res.render('new');
})

//CREATE ROUTE
app.post('/blogs', (req, res) => {
    //create blog (data, callback)
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, (err, newBlog) =>{
        if(err){
            res.render('new');
        } else {
            //redirect to index
            res.redirect('/blogs');
        }
    });
})

//SHOW ROUTE
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) =>{
        if(err){
            res.redirect('/blogs');
        } else {
            //render show template with that blog
            res.render('show', {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) =>{
        if(err){
            res.redirect('/blogs');
        } else {
            res.render('edit', {blog: foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if(err){
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
});


// DELETE ROUTE
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, updatedBlog) => {
        if(err){
            res.redirect('/blogs');
        } else {
            //render show template with that blog
            res.redirect('/blogs');
        }
    });
});

// ALL OTHER REQUESTS GO TO ERROR PAGE
app.get('*', (req, res) => {
	res.send('error')
});

//CONNECT TO PORT
app.listen(3000, function(){
    console.log('RESTful app has started')
});
"use strict"

const dependencies = require("./dependencies");
const handlebars=dependencies.expressHandlebars.create({"defaultLayout":"default"})
const PORT ="3000"
const app = dependencies.express()


app.set('views', dependencies.path.join(__dirname, 'views'));
app.engine("handlebars",handlebars.engine)
app.set('view engine', 'handlebars');
app.use(dependencies.bodyParser.urlencoded({extended:false}))
app.use(dependencies.bodyParser.json())
app.use(dependencies.express.static(__dirname + '/public'));

module.exports=app;
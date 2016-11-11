"use strict"

const dependencies = require("./dependencies");

const app = dependencies.express()

const hbs = dependencies.expressHandlebars.create({
    defaultLayout: 'layout',
    extname: '.hbs',
    partialsDir: [ 'views/partials/' ]
});
    app.set('views', dependencies.path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(dependencies.bodyParser.urlencoded({extended:false}))
app.use(dependencies.bodyParser.json())
dependencies.handlebars.registerPartial('homePartial', '{[home}');
app.use(dependencies.express.static(__dirname + '/public'));
dependencies.routes(app);
module.exports=app;
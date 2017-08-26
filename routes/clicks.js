/**
Os Middlewares são funções cujo objetivo é possibilitar a interceptação do request e adicionar verificações e comportamentos sobre eles.
Vários plugins que utilizamos na aplicação junto do express fazem uso dos middlewares. É o caso do bodyparser ou do express-validator, para citar dois exemplos.
**/

module.exports = function(app)  {
    var version = '/v1/'
    app.get(version,function(req,res,next ){
        res.send("Olá! A api esá no ar");  
    });  

    app.post(version+'clicks/',function(req,res,next ){
        res.send("Via post");  
    });  
}
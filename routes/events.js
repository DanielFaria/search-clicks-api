/**
Os Middlewares são funções cujo objetivo é possibilitar a interceptação do request e adicionar verificações e comportamentos sobre eles.
Vários plugins que utilizamos na aplicação junto do express fazem uso dos middlewares. É o caso do bodyparser ou do express-validator, para citar dois exemplos.
**/

module.exports = function(app)  {
    var version = '/v1/'
    app.get(version,function(req,res,next ){
        console.log(req.headers);
        var connection = app.dao.connectionFactory.getConnection();
        connection.cluster.health({},function(err,resp,status) {
             console.log("-- Client Health --",resp);
             res.json(resp);
        });
   });

   app.get(version+'events/:name',function(req,res,next ){
         console.log("pesquisando por: "+ req.params.name);
         var connection = app.dao.connectionFactory.getConnection();
         var eventDAO = new  app.dao.eventDAO(connection);
         eventDAO.getEvents(req.params.name)
         .then(function (result) { res.json(result) });
    });



    app.post(version+'events/',function(req,res,next ){
        console.log("Chegou: "+ req);
        var connection = app.dao.connectionFactory.getConnection();
        var eventDAO = new  app.dao.eventDAO(connection);
        event = req.body;
        console.log("Evento: "+ req);
        eventDAO.addEvent(event).then(function (result) { res.json(result) });
    });
}

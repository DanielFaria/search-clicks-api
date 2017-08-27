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
        });


        var eventDAO = new  app.dao.eventDAO(connection);
        console.log(connection);
        res.send("Connection with  Elastic Search is alive")

    });

    app.post(version+'clicks/',function(req,res,next ){
        var connection = app.dao.connectionFactory.getConnection();
        var eventDAO = new  app.dao.eventDAO(connection);
        event = req.body;
        eventDAO.addEvent(event).then(function (result) { res.json(result) });
    });
}

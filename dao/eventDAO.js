
function  eventDAO(connection) {
    this._connection = connection;
}

eventDAO.prototype.getEventos = function(params){
     console.log(params);
}

eventDAO.prototype.addEvent = function(event){
  return this._connection.index({
    index: 'catalogo',
    type: "eventos",
    body: {
        event: event.event,
        timestamp: event.timestamp,
        site:      event.site
       }
   });
}


module.exports = function(){
    return eventDAO;
}

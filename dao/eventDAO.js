
function  eventDAO(connection) {
    this._connection = connection;
}

eventDAO.prototype.getEvents = function(nameEvent){
     console.log(nameEvent);
     return elasticClient.suggest({
       index: 'catalogo',
       type: "eventos",
       body: {
           docsuggest: {
               text: nameEvent,
               completion: {
                   field: "event",
                   fuzzy: true
               }
           }
       }
   });
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

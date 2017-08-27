
function  eventDAO(connection) {
    this._connection = connection;
}

eventDAO.prototype.getEventos = function(params){
     console.log(params);
}

eventDAO.prototype.addEvent = function(event){
     console.log(event);
}


module.exports = function(){
    return eventDAO;
}

module.exports = {
    getconnection : ()=>
                         {
                             return require('./imports').mysql.createConnection(require('./mysql_properties'));
                         }
};
module.exports = require('../common/imports')
                 .express
                 .Router()
                 .post("/",(req,res)=>{
                              console.log("Entered into router in Register");
                              let conn = require('../common/mysql_connection').getconnection();
                              conn.connect((err)=>
                              {
                                  if(!err)
                                  console.log("DB success");
                                  else
                                  console.log("DB Connection failed");
                              }
                              );
                              conn.query("insert into ge_register values('"+req.body.email+"','"+req.body.username+"','"+req.body.password+"','"+req.body.cpass+"')",(err,records)=>{
                                  if(!err)
                                  {
                                  console.log(records);
                                  return res.status(201).json(records);
                                  }
                                  else
                                  {
                                      console.log(err);
                                      return res.status(501).json(err);
                                  }
                              });

                 });
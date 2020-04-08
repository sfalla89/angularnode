module.exports = require('../common/imports')
                 .express
                 .Router()
                 .post("/",(req,res)=>{
                              console.log("Entered into router in login");
                              let conn = require('../common/mysql_connection').getconnection();
                              conn.connect((err)=>
                              {
                                  if(!err)
                                  console.log("DB success");
                                  else
                                  console.log("DB Connection failed");
                              }

                              );
                              var email = req.body.email;
                              var password = req.body.password;
                              //conn.query("select * from ge_register where email='"+req.body.email+"' and password='"+req.body.password+"'",(err,records)=>{
                                conn.query('SELECT * FROM ge_register WHERE email = ?',[email],(err,records)=>{

                                if(err)
                                {
                                    console.log("Error:"+err);
                                    return res.status(201).json("There is some error in query");
                                } else{   
                                  if(records.length>0)
                                  {
                                      if(password == records[0].password)
                                        {
                                            console.log("Email:"+req.body.email);
                                            console.log("success");
                                            console.log("Records:"+records[0].email);
                                            return res.status(201).json(records[0].username);
                                        }   
                                  }else{
                                        console.log("Error"+err);
                                        return res.status(501).json(err);
                                  }
                                }
                              });

                 });
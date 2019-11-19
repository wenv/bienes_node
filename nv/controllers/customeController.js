const controller = {};

 controller.list = (req , res) =>{
     req.getConnection((err, conn) => {
         conn.query('SELECT * FROM users', (err, users ) => {
             if(err){
                res.json(err);
             }
             console.log(users);
             res.render('inicio', {
                 data: users
             });
         });
     });
 };
 module.exports = controller;
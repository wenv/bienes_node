const controller = {};

 controller.list = (req , res) =>{
     req.getConnection((err, conn) => {
         conn.query('SELECT * FROM users', (err, users ) => {
             if(err){
                res.json(err);
             }
             //console.log(users);
             res.render('inicio', {
                 data: users
             });
         });
     });
 };
 controller.save = (req, res) => {
     const data = req.body;
     req.getConnection((err, conn) => {
         conn.query('INSERT INTO users set ?', [data],  (err, user) => {
             console.log(user);
            res.redirect('/');
         });
     })
    
 };


 controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM users WHERE id = ?',[id], (err, rows)  =>{
            res.redirect('/');
        });
    })
  
};

 controller.delete = (req, res) => {
     const { id } = req.params;
     req.getConnection((err, conn)=>{
         conn.query('DELETE FROM users WHERE id = ?',[id], (err, rows)  =>{
             res.redirect('/');
         });
     })
   
};
 module.exports = controller;

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
 
 controller.open = (req , res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users', (err, users ) => {
            if(err){
               res.json(err);
            }
            res.render('botones');
        });
    });
};

controller.pedido = (req , res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pedido', (err, users ) => {
            if(err){
               res.json(err);
            }
            res.render('pedido', {
                data: users
            });
        });
    });
};

controller.saveped = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pedido set ?', [data],  (err, pd) => {
            console.log(pd);
           res.redirect('/pedido');
        });
    })
};

controller.tabped = (req , res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pedido_table', (err, users ) => {
            if(err){
               res.json(err);
            }
            res.render('tab_pedido', {
                data: users
            });
        });
    });
};

controller.savetab_ped = (req, res) => {
    //console.log(req.body);
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pedido_table set ?', [data],  (err, pd) => {
            console.log(pd);
            res.redirect('/pedido');
           
        });
    })
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
        conn.query('SELECT * FROM users WHERE id = ?',[id], (err, users)  =>{
            console.log( users);
            res.render('inicio_edit', {
                data: users[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const nuv = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE users set ? WHERE id = ?',[nuv, id], (err, users)  =>{
            
            res.redirect('/');
        });
    });
};

 controller.delete = (req, res) => {
     const { id } = req.params;
     req.getConnection((err, conn)=>{
         conn.query('DELETE FROM users WHERE id = ?',[id], (err, rows)  =>{
             res.redirect('/');
         });
     });
   
};
 module.exports = controller;
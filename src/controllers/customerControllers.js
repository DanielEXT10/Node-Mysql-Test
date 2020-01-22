const controller = {};

controller.list = (req,res) => { 
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err){
                res.json(err);
            }
            
            res.render('customers',{
                data: customers
            });
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
          if(err){
              res.json(err);
          }
        console.log(customer)
        res.redirect('/');
      })
    })
  };

  controller.delete= (req,res)=>{

    //const id = req.params.id;
    const {id} = req.params; //obtiene el valor de id del req.params
     req.getConnection((err, conn) =>{
         conn.query('DELETE FROM customer where id = ?', [id], (err,rows)=>{
             res.redirect('/');
         })
     })

      
  }

  controller.edit = (req,res)=>{
      const{id} = req.params;
      req.getConnection((err,conn)=>{
         conn.query('SELECT * FROM customer WHERE id = ?',[id], (err,customer)=>{
             res.render('customer_edit',{
                 data: customer[0]
             })
         }) 
      })

  }

  controller.update = (req,res) =>{
      const{id} = req.params;
      const newCostumer = req.body;
      req.getConnection((err,conn)=>{
          conn.query('UPDATE customer set ? WHERE id = ?', [newCostumer, id], (err,rows)=>{
              res.redirect('/');
          });
      })
  }

module.exports = controller;
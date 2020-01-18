const controller = {};

controller.list = (req,res) => { 
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err){
                res.json(err);
            }
            console.log(customers);
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

module.exports = controller;
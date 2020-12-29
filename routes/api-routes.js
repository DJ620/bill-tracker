const db = require("../models");

module.exports = app => {

    app.post("/newBill", (req, res) => {
        console.log(req.body);
        db.Bill.create(req.body).then(result=> {
            res.json(result);
        });
    });

};
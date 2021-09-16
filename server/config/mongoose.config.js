const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("SUCCESS, you're connected to the DB!"))
    .catch(err=>console.log("Oopsie! Error!", err))
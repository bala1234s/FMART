const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');



app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose.connect("mongodb+srv://BalaSankar:BalaSankar%402004@cluster0.dlyxypn.mongodb.net/FMART", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
        console.log("MongoDB connected");
        app.listen(3001, () => {
         console.log("Web is hosting");
        });
    })
    .catch((error) => {  
        console.log(error);
    })


app.get('/products', async (req, res) => { 
    await mongoose.connection.collection('products').find().toArray().then((products) => {
        res.send(products);
    })
      
})
app.get('/homeselection', async (req, res) => { 
        await mongoose.connection.collection('homeselection').find().toArray().then((selection) => {
            res.send(selection);
        })
        // console.log("Products is received");
        // console.log(data[0]);
        // res.send(data);
})

app.get('/furniture', async (req, res) => { 
    await mongoose.connection.collection('furniture').find().toArray().then((furniture) => { 
        res.send(furniture);
    })
})
app.get('/like', async (req, res) => {
    await mongoose.connection.collection('like').find().toArray().then((like) => { 
        res.send(like); 
    })
})
app.post('/postlike', async (req, res) => { 
    await mongoose.connection.collection('like').insertOne(req.body).then((postlike) => {
        console.log(req.body);
        res.send(postlike);
        
    })
})
app.post('/dellike', async (req, res) => { 
    console.log(req.body);
    await mongoose.connection.collection('like').deleteOne({title:req.body.title}).then((dellike) => { 
        res.send(dellike);
    })
})
app.get('/personaldetails', async (req, res) => { 
    await mongoose.connection.collection('personaldetails').find().toArray().then((personaldetails) => { 
        res.send(personaldetails);
    })
})
app.post('/postpersonaldetails', async (req, res) => { 
    await mongoose.connection.collection('personaldetails').insertOne(req.body).then((postpersonaldetails) => { 
        res.send(postpersonaldetails);
    })
})


app.get('/cart', async (req, res) => { 
    await mongoose.connection.collection('cart').find().toArray().then((cart) => { 
        res.send(cart);
    })
})
app.post('/postcart', async (req, res) => { 
    await mongoose.connection.collection('cart').insertOne(req.body).then((postcart) => {
        // console.log(req.body);
        res.send(postcart);
        
    })
})
app.post('/delcart', async (req, res) => { 
    console.log(req.body);
    await mongoose.connection.collection('cart').deleteOne({title:req.body.title}).then((delcart) => { 
        res.send(delcart);
    })
})

app.get('/orders', async (req, res) => { 
    await mongoose.connection.collection('orders').find().toArray().then((orders) => { 
        res.send(orders);
    })
})

app.post('/postorder', async (req, res) => { 
    await mongoose.connection.collection('orders').insertOne(req.body).then((postcart) => {
        // console.log(req.body);
        res.send(postcart);
        
    })
})

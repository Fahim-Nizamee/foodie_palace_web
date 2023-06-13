const express = require("express")
const cors = require("cors")
const app = express()
const port = 5000
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { Double } = require("mongodb");
const jwtSecret = "MyNameIsFahimIAmAStudentOfIIUC##"

mongoose.set('strictQuery', true)
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())

const mongoURI = 'mongodb+srv://fahim1:fahim1@cluster0.sosmzzm.mongodb.net/Foodie-Palace?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("=== DB successfully Connected ===")
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

const User = new mongoose.model("users", userSchema)

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})


const Admin = new mongoose.model("admins", adminSchema)

//admin login=================================
app.post('/admin-login', async (req, res) => {
    console.log(req.body)
    const { email, pass } = req.body
    Admin.findOne({ email: email }, async (err, user) => {
        if (user) {
            const password = await bcrypt.compare(req.body.password, user.password)
            if (password) {

                const data = {
                    usert: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, jwtSecret, {
                    expiresIn: '10000h'
                })
                // res.json({})
                res.send({ message: 'success', authToken: authToken, username: user.username })
            }
            else {
                res.send('wrong pass')
            }
        }
        else {
            res.send('wrong mail')
        }
    })
})

//Admin signUp======================================
app.post('/admin-signup', async (req, res) => {
    console.log(req.body)
    const { username, address, email, pass, status } = req.body
    Admin.findOne({ email: email }, async (err, user) => {
        if (user) {
            res.send({ message: 'User already registered' })
        }
        else {
            const salt = await bcrypt.genSalt(10)
            let password = await bcrypt.hash(req.body.password, salt)
            await Admin.create({
                username,
                address,
                email,
                password,
                status

            })
            res.send('Successfully registered')
        }
    })
})


app.get('/', (req, res) => {
    res.send('Yooooooooooooo')
})

//token ======================================
app.post('/token', async (req, res) => {
    const token = req.body.token
    const user = await jwt.verify(token, jwtSecret, (err, res) => {
        if (err) {
            return "Not varified"
        }

        return res

    })
    if (user == "Not varified") {
        res.send({ status: 'error', data: 'exp' })

    }

})


//login=======================================
app.post('/login', async (req, res) => {
    console.log(req.body)
    const { email, pass } = req.body
    User.findOne({ email: email }, async (err, user) => {
        if (user) {
            const password = await bcrypt.compare(req.body.password, user.password)
            if (password) {

                const data = {
                    usert: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, jwtSecret, {
                    expiresIn: '10000h'
                })
                // res.json({})
                res.send({ message: 'success', authToken: authToken, username: user.username })
            }
            else {
                res.send('wrong pass')
            }
        }
        else {
            res.send('wrong mail')
        }
    })
})

//signUp======================================
app.post('/signup', async (req, res) => {
    console.log(req.body)
    const { username, address, email, pass } = req.body
    await User.findOne({ email: email }, async (err, user) => {
        if (user) {
            res.send({ message: 'User already registered' })
        }
        else {
            const salt = await bcrypt.genSalt(10)
            let password = await bcrypt.hash(req.body.password, salt)
            await User.create({
                username,
                address,
                email,
                password

            })
            res.send('Successfully registered')
            
        }
    })
})

app.get('/food-data',async (req,res)=>{
    const fetched_data = await mongoose.connection.db.collection("foods")
    fetched_data.find({}).toArray(async function(err,foodData){
        const fetched_foodCategory = await mongoose.connection.db.collection("foodCategory")
        fetched_foodCategory.find({}).toArray(async function(err,catData){
            if(err){
                console.log(err)
            }
            else{
                try{
                    res.send([foodData,catData])
                }
                catch(error){
                    console.log(error.message)
                    res,send("Server Error")
                }
            }
        })
        
    })
})












//=======================================//
//=================ADMIN=================//
//=======================================//


//food schema================
const foodSchema = new mongoose.Schema({
    foodname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const Food = new mongoose.model("foods", foodSchema)
//NEW FOOD========================
app.post('/new-food', async (req, res) => {

    const { foodname, price, stock, category, image } = req.body.data
    console.log(foodname)

    await Food.create({
        foodname, 
        price, 
        stock, 
        category, 
        image
    })
    res.send({ data: 'added' })



})

















app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
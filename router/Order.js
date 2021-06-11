const Order = require("../models/Order");
const router = require("express").Router();
const User = require("../models/User");

router.put("/newOrder/:id", async (req, res) => {
    try {
        const findUser = await User.findOne({
            _id: req.params.id,
        });
        const order = new Order({
            clientId: findUser._id,
            products: req.body.cart,
            totalPrice: req.body.totalPrice,
        });

        const savedOrder = await order.save();
        await User.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            { cart: [] }
        );
        res.status(200).send("OrderSaved");
    } catch (error) {
        res.status(400).send("probleme serveur");
    }
});

//get order by user id
router.get("/getOrder/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        const findUser = await User.findOne({
            _id: req.params.id,
        });

        const findorders = await Order.find({ clientId: findUser._id });
        console.log(findorders);
        res.status(200).send({ msg: "Order ", orders: findorders });
    } catch (error) {
        console.log(error);
        res.status(500).send("impossible to get Order");
    }
});

// get All orders

router.get("/getOrders", async (req, res) => {
    try {
        const allOrders = await Order.find();
        res.status(200).send({ msg: "all Orders", allOrders });
    } catch (error) {
        res.status(500).send("impossible to get Orders");
    }
});
module.exports = router;

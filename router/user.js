const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const {
    validation,
    registerValidate,
    loginValidate,
} = require("../middleware/validateUser");
const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("testing router");
});

/*
@method: POST
@ path:http:localhost:5000/api/user/register
@ parameter: req.body  
public
*/
router.post("/register", registerValidate(), validation, Register);

/*
@method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body  
public
*/
router.post("/login", loginValidate(), validation, Login);

/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
public
*/
router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
});

router.post("/addtocart", async (req, res) => {
    try {
        const findUser = await User.findOne({
            _id: req.body.productanduserId.userId,
        });

        const productAlreadyInCart = findUser.cart.find(
            (el) => el.product._id === req.body.productanduserId.product._id
        );
        console.log(productAlreadyInCart);

        if (productAlreadyInCart) {
            return res.status(400).send("Product Already In Cart");
        }
        await User.findOneAndUpdate(
            {
                _id: req.body.productanduserId.userId,
            },

            {
                $push: {
                    cart: [{ product: req.body.productanduserId.product }],
                },
            }
        );

        res.status(200).send("produit ajouté");
    } catch (error) {
        res.status(400).send("impossible d'ajouter produit");
    }
});
router.put("/deleteCart", async (req, res) => {
    try {
        const findUser = await User.findOne({
            _id: req.body.userId,
        });
        // console.log(req.body.itemId);
        const newCart = await findUser.cart.filter(
            (el) => el.product._id != req.body.itemId
        );
        const p = await User.findOneAndUpdate(
            {
                _id: req.body.userId,
            },
            { $set: { cart: newCart } }
        );
        // await findUser.cart = newCart;
        // await findUser.save();
        // console.log("cart", p);

        res.status(200).send({ msg: "cart deleted", p });
    } catch (error) {
        res.status(500).send("impossible to deleted cart");
    }
});

router.post("/addtoqtity", async (req, res) => {
    try {
        const findUser = await User.findOne({
            _id: req.body.userId,
        });

        const newCart = findUser.cart.map((el) => {
            if (el.product._id === req.body.itemId) {
                el.product.qty++;
            }
            return el;
        });

        await User.findOneAndUpdate(
            {
                _id: req.body.userId,
            },
            { $set: { cart: newCart } }
        );

        res.status(200).send("Qtity updated");

        console.log(req.body);
    } catch (error) {
        res.status(400).send("impossible d'ajouter produit");
        console.log(error);
    }

    router.post("/minusqtity", async (req, res) => {
        try {
            const findUser = await User.findOne({
                _id: req.body.userId,
            });

            const newCart = findUser.cart.map((el) => {
                if (el.product._id === req.body.itemId) {
                    if (el.product.qty > 1) {
                        el.product.qty--;
                    }
                }
                return el;
            });

            await User.findOneAndUpdate(
                {
                    _id: req.body.userId,
                },
                { $set: { cart: newCart } }
            );

            res.status(200).send("Qtity updated");

            console.log(req.body);
        } catch (error) {
            res.status(400).send("impossible !!");
            console.log(error);
        }
    });
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        //   const id=req.params.Id
        const user = await User.updateOne({ _id: id }, { $set: req.body });
        console.log(user);

        res.status(200).send({ msg: "Profile edited", user });
    } catch (error) {
        console.log(error);
        res.status(500).send("impossible to edit profile");
    }
});
//DELETE PROFILE
router.delete("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const x = await User.findByIdAndDelete(Id);
        res.status(200).send({ msg: "User deleted", x });
    } catch (error) {
        res.status(500).send("impossible to delete User");
    }
});

//get all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find({ isAdmin: false });
        res.status(200).send({ msg: "list of users", users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "user is not be saved" }] });
    }
});

//get user

router.get("/getuser/:id", async (req, res) => {
    console.log(req.params);
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id });

        res.status(200).send({ msg: "user", user: user });
    } catch (error) {
        res.status(500).send("impossible to find user");
    }
});

//Delete user by id
router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete({ _id: id });
        res.status(200).send({ msg: "user deleted", user });
    } catch (error) {
        res.status(500).send("impossible to delete user");
    }
});

// POST COMMENTS

//get comments
router.get("/comment/:id"),
    async (req, res) => {
        try {
            const user1 = await User.findById(req.params.id);
            const com = user1.infoCom;
            const newCom = com.filter((el) => el.id === req.body.id);
            const user = await User.findByIdAndUpdate(id, {
                $set: { infoCom: newCom },
            });

            res.status(200).send({ msg: "this is the list of comments", user });
        } catch (error) {
            res.status(500).send({
                errors: [{ msg: "can not update the comment user" }],
            });
        }
    };

// DELETE COMMENT

//DELETE COMMENTS
//admin deleting user's comments

router.delete("/delete/:id", async (req, res) => {
    try {
        const users = await User.find({ isAdmin: false });
        var foundUser = users.filter((user) => user._id == req.body.idUser);
        console.log("user", foundUser);
        const foundIdUser = foundUser[0]._id;
        console.log("foundId", foundIdUser);
        const updatedUser = await User.findByIdAndUpdate(foundIdUser, {
            $pull: { infoCom: { id: req.body.id } },
        });
        res.status(200).send({
            msg: "comment of user is deleted",
            updatedUser,
        });
    } catch (error) {
        console.log("error", error);
        res.status(500).send({
            errors: [{ msg: "can not delete the comment of the user" }],
        });
    }
});

// default export

module.exports = router;

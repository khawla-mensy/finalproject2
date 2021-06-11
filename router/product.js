const express = require("express");
const { findByIdAndDelete } = require("../models/Product");
const router = express.Router();
const Product = require("../models/Product");
const { v4: uuidv4 } = require("uuid");

//test
// router.get("/test", (req, res) => {
//     res.send("this is test");
// });

//@ desc add new product
//@method post
//@req.body
router.post("/add", async (req, res) => {
    try {
        const { nom, description, image, prix } = req.body;
        if (!nom || !prix) {
            return res.status(400).send("nom et prix are required");
        }
        const productt = await Product.findOne({ nom: nom });
        if (productt) {
            return res.status(400).send("prduit deja existant");
        }

        const product = new Product({
            nom,
            description,
            image,
            prix,
        });
        await product.save();

        console.log(product);
        res.status(200).send({ msg: "product added", product });
    } catch (error) {
        res.status(500).send("impossible to add product");
    }
});

//@desc all products
//@method get
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({ msg: "all Products", products });
    } catch (error) {
        res.status(500).send("impossible to get products");
    }
});

//@desc update product

//@method put
//@req.body
//@req.params

router.put("/:id", async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    try {
        const id = req.params.id;
        //   const id=req.params.Id
        const product = await Product.updateOne(
            { _id: id },
            { $set: req.body }
        );

        res.status(200).send({ msg: "product edited", product });
    } catch (error) {
        console.log(error);
        res.status(500).send("impossible to edit products");
    }
});

router.get("/getproduct", async (req, res) => {
    console.log(req.params);
    try {
        const { id } = req.params;
        const product = await Product.findOne({ _id: id });
        res.status(200).send({ msg: "product", product });
    } catch (error) {
        res.status(500).send("impossible to find products");
    }
});

//@desc delete PRODUCT
//@method delete
//@req.params
router.delete("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const product = await Product.findByIdAndDelete(Id);
        res.status(200).send({ msg: "product deleted", product });
    } catch (error) {
        res.status(500).send("impossible to delete products");
    }
});
router.put("/comments/:id", async (req, res) => {
    console.log(req.body);
    const commentId = uuidv4("Khawla");
    console.log(commentId);

    try {
        var product = await Product.updateOne(
            { _id: req.params.id },
            {
                $push: { comments: { ...req.body, commentId: commentId } },
            }
        );
        res.status(200).send("comment is added");
    } catch (error) {
        res.status(400).send("impossible to add comment !!");
        console.log(error);
    }
});
router.post("/Dcomments/:id", async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    try {
        const product = await Product.findOne({ _id: req.body.productId });
        const updated = product.comments.filter(
            (el) => el.commentId !== req.params.id
        );
        await Product.findOneAndUpdate(
            { _id: req.body.productId },
            { $set: { comments: updated } }
        );
        res.status(200).send({ msg: "Comment deleted" });
    } catch (error) {
        res.status(500).send("impossible to delete comment");
    }
});

module.exports = router;

const controller = require("../controller/productsController");
const express = require("express");
const router = express.Router();

// Routing RESTful
router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProductById);
router.post("/", controller.createProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;

const express = require("express");
const router = express.Router();


// const Testcontroller = require("../app/controllers/Testcontroller");
const Admincontroller = require("../app/controllers/admin");
const Authcontroller = require("../app/controllers/auth");
const Productcontroller = require("../app/controllers/product");
const Usercontroller = require("../app/controllers/user");
const Categorycontroller = require("../app/controllers/category");



router.get("/admin/login", Authcontroller.login);
router.get("/admin/logout", Authcontroller.logout);


router.get("/admin/dashboard", Admincontroller.index);


router.get("/admin/products", Productcontroller.indexProduct);
router.get("/admin/products/create", Productcontroller.createProduct);
router.get("/admin/products/update", Productcontroller.updateProduct);
router.get("/admin/products/delete", Productcontroller.deleteProduct);


router.get("/admin/user", Usercontroller.indexUser);
router.get("/admin/user/create", Usercontroller.createUser);
router.get("/admin/user/delete", Usercontroller.deleteUser);
router.get("/admin/user/update", Usercontroller.updateUser);

router.get("/admin/category", Categorycontroller.indexCategory);
router.get("/admin/category/create", Categorycontroller.createCategory);
router.get("/admin/category/delete", Categorycontroller.deleteCategory);
router.get("/admin/category/update", Categorycontroller.updateCategory);



module.exports = router;



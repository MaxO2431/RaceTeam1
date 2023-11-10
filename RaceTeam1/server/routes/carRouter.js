const Router = require("express");
const router = new Router();
const CarController = require("../controllers/CarController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), CarController.create);
router.get("/", CarController.getAll);

module.exports = router;

//checkRole("ADMIN")

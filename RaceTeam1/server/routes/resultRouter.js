const Router = require("express");
const router = new Router();
const ResultController = require("../controllers/ResultController");

router.post("/", ResultController.create);
router.get("/", ResultController.getAll);
router.get("/:id", ResultController.getOne);

module.exports = router;

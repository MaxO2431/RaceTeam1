const Router = require("express");
const router = new Router();
const MarkController = require("../controllers/MarkController");

router.post("/", MarkController.create);
router.get("/", MarkController.getAll);

module.exports = router;

const Router = require("express");
const router = new Router();
const RaceTeamController = require("../controllers/RaceTeamController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", RaceTeamController.registration);
router.post("/login", RaceTeamController.login);
router.get("/auth", authMiddleware, RaceTeamController.check);

module.exports = router;

const Router = require("express");
const router = new Router();
const resultRouter = require("./resultRouter");
const RaceTeamRouter = require("./RaceTeamRouter");
const modelRouter = require("./modelRouter");
const carRouter = require("./carRouter");

router.use("/RaceTeam", RaceTeamRouter);
router.use("/Car", carRouter);
router.use("/Model", modelRouter);
router.use("/Result", resultRouter);

module.exports = router;

const Router = require("express");
const router = Router();
const {getToDos, saveToDos} = require("../controllers/toDocontrollers");

router.get("/get", getToDos);
router.post("/save", saveToDos);

module.exports = router;
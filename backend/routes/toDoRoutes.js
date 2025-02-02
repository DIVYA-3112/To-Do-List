const Router = require("express");
const router = Router();
const {getToDos, saveToDos, updateToDos, deleteToDos} = require("../controllers/toDocontrollers");

router.get("/get", getToDos);
router.post("/save", saveToDos);
router.put("/update/:id", updateToDos);
router.delete("/delete/:id", deleteToDos);

module.exports = router;
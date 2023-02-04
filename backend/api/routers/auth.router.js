const router = require("express").Router();
const { schemas, validateBody} = require ("../../utils/SchemaValidator");
const authRouter = require("../controllers/auth");

router.post("/login",validateBody(schemas.userLoginSchema),authRouter.login);
router.post("/register",validateBody(schemas.userRegisterSchema),authRouter.register);
router.post("/requests",authRouter.requests);
router.get("/userData",authRouter.userData );


module.exports = router;
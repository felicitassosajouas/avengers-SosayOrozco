import { Router } from "express";
import { getAvenger, deleteAvenger, createAvenger } from "../controllers/avengerController";


const router = Router();


router.get("/", getAvenger);
router.delete("/:id", deleteAvenger);
router.post("/", createAvenger);


export default router;

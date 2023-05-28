import express from "express";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {

    const newHotel = new Hotel(req.body);


    try {
        
    } catch (error) {
        res.status(500).json(err)
    }
    
});
//DELETE
//GET
//GET ALL


export default router;
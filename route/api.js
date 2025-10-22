import express from "express"
import * as quotesController from "../controller/quotesController.js"

const api = express.Router()

api.post("/akun", quotesController.createNewAkun)
api.get("/akun", quotesController.listAkun)
api.put("/akun/:id", quotesController.updateAkun)
api.delete("/akun/:id", quotesController.deleteAkun)

export default api
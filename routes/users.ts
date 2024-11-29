import express, { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt"

import { usersCollection } from "@/database/mongo"

const router = express.Router()

const saltRounds = 18

router.post(
  "/create",
  async (
    req: Request<any, any, { username: string; pwd: string }, any>,
    res: Response,
    next: NextFunction
  ) => {
    const username = req.body.username
    const pwd = req.body.pwd

    ;(await usersCollection).insertOne({
      username,
      pwd: bcrypt.hashSync(pwd.toString(), saltRounds),
    })

    res.send("Success!!!")
  }
)

module.exports = router

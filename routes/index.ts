import { NextFunction, Request, Response } from "express"

var express = require("express")
var router = express.Router()

router.get('/users/:userId/books/:bookId', (request: Request, response: Response) => {
  console.log('params', request.params)
  response.json(request.params)
})

module.exports = router

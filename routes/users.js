const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
  queries.list()
    .then(users => {
      response.json({
        users
      });
    }).catch(next);
});

router.get("/:username", (request, response, next) => {
  queries.profile(request.params.username).then(users => {
    users
      ?
      response.json({
        users
      }) :
      response.status(404).json({
        message: 'Not found'
      })
  }).catch(next);
});

router.post("/", (request, response, next) => {
  queries.create(request.body).then(users => {
    response.status(201).json({
      users
    });
  }).catch(next);
});

router.delete("/:username", (request, response, next) => {
  queries.delete(request.params.username).then(() => {
    response.status(204).json({
      deleted: true
    });
  }).catch(next);
});

router.put("/:username", (request, response, next) => {
  queries.update(request.params.username, request.body).then(users => {
    response.json({
      users
    });
  }).catch(next);
});


module.exports = router;

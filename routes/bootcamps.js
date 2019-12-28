const express = require("express");
const {
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  viewBootcamp,
  deleteBootcamp
} = require("../controllers/bootcamps");

// Include other resource router
const courseRouter = require("./courses");

const router = express.Router();

// Re-route into other resource router
router.use("/:bootcampId/courses", courseRouter);

router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route("/:id")
  .get(viewBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;

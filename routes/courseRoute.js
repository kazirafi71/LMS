const {
  postCourse__controller,
  getCourses__controller,
  getOneCourse__controller
} = require("../controllers/courseController");
const { adminAuthentication } = require("../middlewares/authentication");
const { requireLogin } = require("../middlewares/requireLogin");

const router = require("express").Router();
const upload = require("../middlewares/multer");

router.post(
  "/post-course",
  requireLogin,
  adminAuthentication,
  upload.single("courseThumbnail"),
  postCourse__controller
);

router.get(
  "/get-courses",
  requireLogin,
  getCourses__controller
)

router.get(
  "/get-course/:courseId",
  requireLogin,
  getOneCourse__controller
)

module.exports = router;

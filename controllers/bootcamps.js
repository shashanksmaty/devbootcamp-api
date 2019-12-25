const Bootcamp = require("../models/Bootcamp");

// @desc ---> Get all bootcamps
// @route ---> GET /api/v1/bootcapms
// @access ---> Public
exports.getBootcamps = async (req, res, next) => {
  const bootcamps = await Bootcamp.find();

  res.status(200).json({
    success: true,
    data: bootcamps
  });
};

// @desc ---> Create a bootcamp
// @route ---> POST /api/v1/bootcamps
// @access ---> Private
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp
  });
};

// @desc ---> View a bootcamp
// @route ---> GET /api/v1/bootcamps/:id
// @access ---> Public
exports.viewBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return res.status(400).json({
      success: false,
      message: "No bootcamp found"
    });
  }

  res.status(200).json({
    success: true,
    data: bootcamp
  });
};

// @desc ---> Update a bootcamp
// @route ---> PUT /api/v1/bootcamps/:id
// @access ---> Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ status: true });
};

// @desc ---> Delete a bootcamp
// @route ---> DELETE /api/v1/bootcamps/:id
// @access ---> Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ status: true });
};

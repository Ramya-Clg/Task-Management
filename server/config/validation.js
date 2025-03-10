const { body, param, validationResult } = require('express-validator');

const taskValidationRules = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isString().withMessage('Title must be a string')
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters long')
    .isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters'),
  
  body('description')
    .optional()
    .trim()
    .isString().withMessage('Description must be a string')
    .isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),
  
  body('completed')
    .optional()
    .isBoolean().withMessage('Completed status must be a boolean value')
];

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validate MongoDB ObjectId
const validateObjectId = [
  param('id').isMongoId().withMessage('Invalid task ID format')
];

module.exports = {
  taskValidationRules,
  validate,
  validateObjectId
};
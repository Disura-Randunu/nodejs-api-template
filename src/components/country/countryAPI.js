// Country API routes goes here
import express from 'express';
import AppError from '../../errors/AppError.js';
import { getCountries, getCountryById } from './countryService.js';
import { asyncHandler } from '../../utils/apiUtil.js';
const router = express.Router();

// import { getCountries } from './countryService.js';

router.get("/", async (req, res, next) => {
  try {
    const data = await getCountries()
    return res.json({ data: data });
  } catch (err) {
    return next(err)
  }
});

router.get("/:id", asyncHandler((req) => {
    getCountryById()
  })
)

export default router;
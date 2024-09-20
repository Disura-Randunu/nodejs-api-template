// API routes goes here

import express from 'express';
import { getCountries, getCountryById } from './countryService.js';
import { asyncHandler, getSuccessRes } from '../../utils/apiUtil.js';
const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
  const data = await getCountries();
  res.json(getSuccessRes( data ));
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const data = await getCountryById(req.params.id);
  res.json(getSuccessRes( data ));
}));

export default router;
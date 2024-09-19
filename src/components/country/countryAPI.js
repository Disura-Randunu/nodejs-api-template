// API routes goes here

import express from 'express';
import { getCountries, getCountryById } from './countryService.js';
import { asyncHandler } from '../../utils/apiUtil.js';
const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
  const data = await getCountries();
  res.json({ data: data, status: true });
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const data = await getCountryById(req.params.id);
  res.json({ data: data, status: true });
}));

export default router;
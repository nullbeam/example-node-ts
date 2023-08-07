import express from "express";

const router: express.Application = express();

const base: string = 'customers';
const b = 0;

router.get(`/${base}/`, async (req, res, next) => {
    // #swagger.tags = ['Customers']
    res.status(200).json([{id: 1, name: 'Bob'}]).end();
});

router.get(`/${base}/:id`, async (req, res, next) => {
    // #swagger.tags = ['Customers']
    res.status(200).json({id: req.params.id, name: 'Bob'}).end();
});

export default router;
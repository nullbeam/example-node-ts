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

router.post(`/${base}/`, async (req, res, next) => {
    /*  
    #swagger.tags = ['Customers']
    #swagger.description = 'Add customer endpoint'
    #swagger.operationId = 'addcustomer'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: { $ref: "#/definitions/Customer" }
            }
        }
    }
    */
    res.status(201).json(req.body).end();
});

router.put(`/${base}/:id`, async (req, res, next) => {
    // #swagger.tags = ['Customers']
    res.status(201).json(req.body).end();
});

router.put(`/${base}/:id`, async (req, res, next) => {
    // #swagger.tags = ['Customers']
    res.status(200).json(req.body).end();
});

router.delete(`/${base}/:id`, async (req, res, next) => {
    // #swagger.tags = ['Customers']
    res.status(204).end();
});

export default router;
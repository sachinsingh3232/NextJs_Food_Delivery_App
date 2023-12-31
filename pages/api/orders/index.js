import dbConnect from "../../../utils/database";
import Order from '../../../Models/orderModel'

const handler = async (req, res) => {
    const { method } = req;

    await dbConnect();

    if (method === "GET") {
        try {
            const orders = await Order.find().sort({ createdAt: -1, updatedAt: -1 })
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "POST") {
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

export default handler;
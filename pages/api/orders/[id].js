import dbConnect from "../../../utils/database";
import Order from "../../../Models/orderModel";

const handler = async (req, res) => {
    const {
        method,
        query: { id },
        cookies
    } = req;
    const token = cookies.token

    await dbConnect();

    if (method === "GET") {
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "PUT") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authenticated!")
        }
        try {
            const order = await Order.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "DELETE") {
    }
};

export default handler;
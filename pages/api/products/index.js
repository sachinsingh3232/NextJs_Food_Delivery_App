import dbConnect from "../../../utils/database";
import Product from "../../../Models/productModel";

export default async function handler(req, res) {
    const { method, cookies } = req;
    const token = cookies.token

    await dbConnect();
    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(201).json(products);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    if (method === "POST") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authenticated!")
        }
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
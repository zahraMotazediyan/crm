import connectDB from "../../../../utils/connectDB";
import Customer from "../../../../models/Customer";

export default async function handler(req, res) {
    try {
        await connectDB()
    } catch (err) {
        console.log(err)
        res
            .status(500)
            .json({status: "failed", message: "Error in connecting to DB"});
        return;
    }
    if (req.method === "POST") {
        const data = req.body.data;

        if (!data.name || !data.lastName || !data.email)
            return res
                .status(400).json({
                    status: "failed", message: "Invalid data"
                })
    }

    try {
        const customer = await Customer.create(data);
        res
            .status(201)
            .json({status: "success", data: customer})
    } catch (err) {
        console.log(err)
        res
            .status(500)
            .json({status: "failed", message: "Error in Storing in DB"});
    }
}
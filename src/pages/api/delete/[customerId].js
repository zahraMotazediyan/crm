import connectDB from "../../../../models/Customer";
import Customer from "../../../../models/Customer";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err.message)
        res
            .status(500)
            .json({status: "failed", message: "Error in connecting to database"});
        return;
    }

    if (req.method === "DELETE") {
        const id = req.query.customerId;

        try {
            await Customer.deleteOne({_id: id});
            res.status(200).json({status: "success", message: "Data deleted"});
        } catch (err) {
            console.log(err);
            res
                .status(500)
                .json({status: "failed", message: "Error deleting data from database"});
        }
    }
}
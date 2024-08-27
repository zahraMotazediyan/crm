import connectDB from "../../utils/connectDB";
import Customer from "../../models/Customer";
import HomePage from "../../component/template/HomePage";

function Index({customers}) {
    console.log(customers)
    return <HomePage customers={customers}/>
}

export default Index;

export async function getServerSideProps() {
    try {
        await connectDB();
        const customers = await Customer.find();
        return {
            props: {
                customers: JSON.parse(JSON.stringify(customers)),
            },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}

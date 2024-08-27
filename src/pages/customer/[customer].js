import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import CustomerDetailsPage from "../../../component/template/CustomerDetailsPage";

function Index() {

    const [data, setData] = useState(null);
    const router = useRouter();
    const {query: {customerId}, isReady} = router;

    useEffect(async () => {
        if (isReady)
            fetch(`/api/customer/${customerId}`)
                .then((res) => res.json())
                .then((data) => setData(data.data));
    }, [isReady]);


    if (data) return <CustomerDetailsPage data={data}/>

}

export default Index;
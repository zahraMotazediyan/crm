import moment from "moment";
import Link from "next/link";
import {useRouter} from "next/router";

function CustomerDetailsPage({data}) {
    const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
    const router = useRouter();

    const deleteHandler = async () => {
        const res = await fetch(`/api/delete${data._id}`, {
            method: "DELETE",
        });
        const newRes = await res.json();
        if (newRes.status === "success") router.push("/")

    }
    return (
        <div className="customer-detail">
            <h1>Customers Details</h1>
            <div className="customer-detail__main">
                <div className="customer-detail__item">
                    <span>Name:</span>
                    <p>{data.name}</p>
                </div>
                <div className="customer-detail__item">
                    <span>Last Name:</span>
                    <p>{data.lastName}</p>
                </div>
                <div className="customer-detail__item">
                    <span>Email:</span>
                    <p>{data.email}</p>
                </div>
                <div className="customer-detail__item">
                    <span>Phone:</span>
                    <p>{data.phone}</p>
                </div>
                <div className="customer-detail__item">
                    <span>Address:</span>
                    <p>{data.address}</p>
                </div>
                <div className="customer-detail__item">
                    <span>PostalCode:</span>
                    <p>{data.postalCode}</p>
                </div>
                <div className="customer-detail__item">
                    <span>Date:</span>
                    <p>{date}</p>
                </div>
            </div>
            <div className="customer-detail__products">
                <p>Name</p>
                <p>Price</p>
                <p>Qty</p>
                {
                    data.products.map((product, index) => (
                        // eslint-disable-next-line react/jsx-no-undef
                        <React.fragment key={index}>
                            <p>{product.name}</p>
                            <span>{product.price}</span>
                            <span>{product.qty}</span>
                        </React.fragment>
                    ))}
            </div>
            <div className="customer-detail__buttons">
                <p>Edit or delete?</p>
                <button onClick={deleteHandler}>Delete</button>
                <Link href={`/edit${data._id}`}>Edit</Link>
            </div>
        </div>
    );
}

export default CustomerDetailsPage;
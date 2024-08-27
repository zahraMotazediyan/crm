import ItemList from "./ItemList";
import FormInput from "./FormInput";

function Form({form, setForm}) {

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    return (
        <div>
            <FormInput
                name="name"
                label="Name"
                value={form.name}
                type="text"
                onChange={changeHandler}
            />
            <FormInput
                name="lastName"
                label="Last Name"
                value={form.lastName}
                type="text"
                onChange={changeHandler}
            />
            <FormInput
                name="email"
                label="Email"
                value={form.email}
                type="text"
                onChange={changeHandler}
            />
            <FormInput
                name="phone"
                label="Phone"
                value={form.phone}
                type="tel"
                onChange={changeHandler}
            />
            <FormInput
                name="address"
                label="Address"
                value={form.address}
                type="text"
                onChange={changeHandler}
            />
            <FormInput
                name="postalCode"
                label="PostalCode"
                value={form.postalCode}
                type="text"
                onChange={changeHandler}
            />
            <FormInput
                name="date"
                label="Date"
                value={form.date}
                type="text"
                onChange={changeHandler}
            />
            <ItemList form={form} setForm={setForm}/>
        </div>
    );
}

export default Form;
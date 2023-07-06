import {FC} from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import './ShippingForm.css'

export const ShippingForm:FC = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm(
		{
			defaultValues: {
				street: "",
                number:"",
                country:"",
                city:"",
				postalcode: "",
			
			}
		}
	);

    const onSubmit = (data:any ) => {
		console.log(data);
		reset();
	}
   
  

    return(
        <>
        <h3>Shipping Adress</h3>
			<form className='shipping-form-container' onSubmit={handleSubmit(onSubmit)}>
				<input placeholder='Street'
					{...register("street", {
						required: true, minLength: {
							value: 1,
							message: "Minimun length is 1",
						},
						maxLength: {
							value: 30,
							message: "Maximum length is 30"
						}
					})}
				/>
				
				{errors.street && <p>{errors?.street?.message}</p>}

				<input placeholder='Number'
					{...register("number", { required: true})}

				/>
                <input placeholder='Country'
					{...register("country", { required: true})}

				/>
                <input placeholder='City'
					{...register("city", { required: true})}

				/>
                <input placeholder='Postal Code'
					{...register("postalcode", { required: true, valueAsNumber: true})}

				/>
                

				
				<Link to="/pay"><button type="submit" disabled={false}
				>
					Go to pay
				</button>
                </Link>
			</form>
        
        </>

    )



}
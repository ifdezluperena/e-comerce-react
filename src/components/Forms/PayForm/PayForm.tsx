import {FC} from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import './PayForm.css'

export const PayForm:FC = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm(
		{
			defaultValues: {
				firstname: "",
                lastname:"",
                borndate:"",
                cardnumber:"",
							
			}
		}
	);

    const onSubmit = (data:any ) => {
		console.log(data);
		reset();
	}
   
  

    return(
        <>
        <h3>Payment</h3>
			<form className='pay-form-container' onSubmit={handleSubmit(onSubmit)}>
				<input placeholder='Name'
					{...register("firstname", {
						required: true, minLength: {
							value: 2,
							message: "Minimun length is 2",
						},
						maxLength: {
							value: 15,
							message: "Maximum length is 15"
						}
					})}
				/>
				
				{errors.firstname && <p>{errors?.firstname?.message}</p>}

                <input placeholder='Last name'
					{...register("lastname", {
						required: true, minLength: {
							value: 2,
							message: "Minimun length is 2",
						},
						maxLength: {
							value: 15,
							message: "Maximum length is 15"
						}
					})}
				/>
				
				{errors.lastname && <p>{errors?.lastname?.message}</p>}

				<input placeholder='Born Date'
					{...register("borndate", { required: true, valueAsDate:true})}

				/>
                <input placeholder='Card Number'
					{...register("cardnumber", { required: true, valueAsNumber:true})}

				/>
				
				<Link to="/pay"><button type="submit" disabled={false}
				>
					Check Out
				</button>
                </Link>
			</form>
        
        </>

    )



}
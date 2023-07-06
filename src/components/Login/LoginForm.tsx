import {FC} from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';

export const Login:FC = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm(
		{
			defaultValues: {
				username: "",
				password: "",
			
			}
		}
	);

    const onSubmit = (data:any ) => {
		console.log(data);
		reset();
	}
   
  

    return(
        <>
        <h3>Login</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input placeholder='username'
					{...register("username", {
						required: true, minLength: {
							value: 5,
							message: "Minimun length is 5",
						},
						maxLength: {
							value: 10,
							message: "Maximum length is 10"
						}
					})}
				/>
				
				{errors.username && <p>{errors?.username?.message}</p>}

				<input placeholder='password'
					{...register("password", { required: true, pattern: /^[A-Za-z]+$/i })}

				/>
				
				<Link to="/shipping"><button type="submit" disabled={false}
				>
					Submit
				</button>
                </Link>
			</form>
        
        </>

    )



}
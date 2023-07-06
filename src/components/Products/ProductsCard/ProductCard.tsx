import { FC } from "react";
import { useFetch} from "../../../utils/useFetch";
import { ProductProps, ParentStateProps } from "../../../types/product";
import { ButtonAction } from "../../../types/buttonType";
import './ProductCard.css'
import { CounterApp } from "../../Buttons/CounterButton";


export const ProductCard:FC<ButtonAction & ParentStateProps> = ({

}) =>{

    
    const products = useFetch('http://localhost:3001/products')
    if(products === null) return
    const productsData:ProductProps[] = products

           
    return(
        <>
          {productsData?.map(({id,title,price,img,description })=>

            <div className="product-card" key={id}>
                 <div className="img-conatiner">

                    <h4>{title}{"  |  "}{price+ '€'}</h4>
                    <img src={img} alt={title}/>
                    <p>{description}</p>

                </div>

                <div className="card-info">

                    <p></p>
                           
                </div>
                <CounterApp/>
            
                </div>

            
            )}
        </>
    )
}
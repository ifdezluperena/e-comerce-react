import {FC} from 'react'
import { ProductProps } from "../../../types/product";
import { ProductCard } from '../ProductsCard/ProductCard';

export const ProductsContainer:FC<ProductProps> = (props) =>{

   
    
return(
    
    <section className='product-container'>       
        <ProductCard{...props}/>
       
    </section>
    
    
    
)

}
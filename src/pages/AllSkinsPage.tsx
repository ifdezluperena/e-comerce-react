import {FC} from 'react'
import { ProductProps } from '../types/product'
import { ProductsContainer } from '../components/Products/ProductsContainer/ProductsContainer'

export const AllSkinsPage: FC<ProductProps> = (props) => {

    return(
        
        <>
        <ProductsContainer{...props}/>
        
        </>
 
    )
}
import {FC} from 'react'
import { ProductProps } from '../types/product'
import { ProductDetail } from '../components/Products/ProductDetail/ProductDetail'


export const SkinPage: FC<ProductProps> = (props) => {

    return(
        <>
       <ProductDetail{...props}/>
        </>

    )
}
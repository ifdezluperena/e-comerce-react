import { FC } from "react";
import { ProductProps } from "../types/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AllSkinsPage } from "../pages/AllSkinsPage";
import { Layout } from "../components/Layout/Layout";
import { LoginPage } from "../pages/LoginPage";
import { Cart } from "../components/Products/Cart/Cart";
import { ShippingForm } from "../components/Forms/Shipping/ShippingForm";
import { PayForm } from "../components/Forms/PayForm/PayForm";

export const RouterPaths: FC<ProductProps> = (props) => {
    
    return (
      
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout/>}>

                    <Route index element = {<HomePage/>}/>
                    <Route path="allskins" element={<AllSkinsPage{...props}/>}/>
                    <Route path = "login" element={<LoginPage/>}></Route>
                    <Route path = "cart" element ={<Cart/>}/>
                    <Route path = "shipping" element ={<ShippingForm/>}/>
                    <Route path = "pay" element ={<PayForm/>}/>                             
                </Route>
            </Routes>
        
        
        </BrowserRouter>
        
       
    )



}
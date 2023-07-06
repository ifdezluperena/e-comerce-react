import { useEffect,useState } from "react";

export const useFetch = (url:string) =>{

    const [data,setData] = useState(null);
    
    
    
    useEffect(() =>{
                
        const fetchProducts = async (): Promise<void> =>{
            
            
            const response = await fetch(url);
            if(!response.ok) throw new Error("Failed loading products");
            const data = await response.json();
            setData(data)
        }
        fetchProducts();
    },[])       
   return data
}

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAllProducts } from '../Store/Slices/productsSlice'
import { useEffect } from "react";
import { useState } from "react";

const NETWORK_ERROR = "Internet Error"

class ProductController {

    static fetchProducts = () => {
        return new Promise((resolve, reject) => {
            axios
                .get(`https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues`)
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => {
                    console.log(err, "Error in sendNumberForVerificationApiCall");
                    reject(NETWORK_ERROR);
                });
        })
    }}

export default ProductController


export const useProduct = () => {
    const dispatch=useDispatch()
    const allProducts=useSelector((state) => state.products.allProducts)
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{
        setLoading(true)
            ProductController.fetchProducts()
                .then((data) => {

                    dispatch(setAllProducts(data.results))
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error, 'Error in gettingProducts')
                })
            },[])
    
    
    return{allProducts,loading}
    }
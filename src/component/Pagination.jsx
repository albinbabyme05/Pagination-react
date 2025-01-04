import React from 'react'
import { useEffect, useState } from 'react'
import './Pagination.css'
import axios from 'axios'

const Pagination=()=> {
    const [product, setProduct] = useState([])
    const [numProduct, setNumProduct] =useState(0)
    const [currentPageNum, setCurrentPageNum] = useState(1)
    
    const productPerPage = 8;
    const fetchData = async()=>{
        const offset = (currentPageNum-1) * productPerPage
        try{
            const result = await axios.get(`https://dummyjson.com/products`,{
                params:{
                    limit : productPerPage,
                    skip : offset
                }
            })
            console.log(JSON.stringify(result));
            setProduct(result.data.products)
            setNumProduct(result.data.total)
        }catch(error){
            console.log("Data did not fetched"+ error)
        }
    }
    useEffect(()=>{
        fetchData();
    }, [currentPageNum])

    const totalPage = Math.ceil(numProduct/productPerPage)
  return (

    <div className='container'>
      <h1>Product List</h1>
      {
        product.length>0 &&(
            <div className='product'>
                {
                    product.map((prod)=>{
                        return( <div className='product-single' key={prod.id}>
                            <img className="product-img" src={prod.thumbnail} alt={prod.title} />
                            <span className='product-title'>{prod.title}</span>
                        </div>)
                    })
                }
            </div>)
        
      }
    </div>
  )
}

export default Pagination

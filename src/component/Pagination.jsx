import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios'

const Pagination=()=> {
    const [product, setProduct] = useState([])
    const [numProduct, setNumProduct] =useState(0)
    const [currentPageNum, setCurrentPageNum] = useState(0)
    
    const productPerPage = 10;
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

    const totalPage = math.ceil(numProduct/productPerPage)
  return (
    <div>
      
    </div>
  )
}

export default Pagination

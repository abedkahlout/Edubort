import {useQuery} from 'react-query'

async function getProduct()
{
    const response = await fetch(`https://dummyjson.com/products`)
    return response.json()
}

export const useProduct = ()=>
{
    return useQuery('get-product',getProduct)
}
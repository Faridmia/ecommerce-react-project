import { useEffect, useState } from "react";
import { data } from "react-router";



const useData = () => {
    const [categorys, setCategory] = useState([])
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return { categorys, products }
};

export default useData;
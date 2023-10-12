import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Allprod from '../components/Allprod'
import { addCatItem } from '../redux/productSlide'

const Menu = () => {
  const {filterby}= useParams()
  const productData = useSelector(state => state.product.productList)
  
  const productDisplay = productData.filter(el => el._id === filterby)[0]

  console.log(productDisplay);

  const dispatch = useDispatch()
  const handleAddCartProd = () => {
 
    dispatch(addCatItem(productDisplay))
  }

  return (
    <div 
    className='p-2 md:p-4 w-full h-full bg-cover'
    style={{backgroundImage: "url('https://s1.1zoom.me/b4660/225/Orange_fruit_Closeup_Colored_background_Drops_547193_1920x1080.jpg')"}}
    >
      <div className='md:flex w-full max-w-4xl bg-transparent shadow-2xl drop-shadow m-auto'>
        <div className='max-w-lg shadow-xl drop-shadow overflow-hidden p-5'>
          <img 
          src={productDisplay.image} 
          alt=''
          className='hover:scale-105 transition-all'/>
        </div>
        <div className='flex flex-col gap-1 px-2 py-3'>
        <h3 className="font-semibold text-gray-900 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 font-medium text-2xl">{productDisplay.category}</p>
          <p className="font-bold">
            <span className="text-red-800 md:text-2xl">Ksh</span>
            <span> {productDisplay.price} </span>
          </p>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-600 font-medium'>Description :</p>
            <p>{productDisplay.description}</p>
          </div>
          <div className='flex gap-3 mt-3'>
          <button className='font-bold text-gray-700 min-w-[100px] bg-yellow-600 hover:bg-orange-400 py-1 rounded '>Buy</button>
          <button className='font-bold text-gray-700 min-w-[100px] bg-yellow-600 hover:bg-orange-400 py-1 rounded '
          onClick={handleAddCartProd}
          >Add Cart</button>
          </div>
        </div>
      </div>

      <Allprod heading={"Related product"}/>
    </div>
  )
}

export default Menu
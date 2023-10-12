import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCatItem } from '../redux/productSlide'


const Cardslider = ({name, image, category, price, loading, id }) => {
  
  const dispatch = useDispatch()
  const handleAddCartProd = () => {
 
    dispatch(addCatItem({
      _id : id,
      name: name,
      price : price,
      category : category,
      image : image,
  }))
  }

  return (
    <div 
    className='flex flex-col cursor-pointer w-full min-w-[200px] max-w-[200px] bg-gray-200 hover:shadow-2xl drop-shadow-2xl py-4 px-3 bg-yellow-300 hover:scale-105'>
      {
        image ? 
        <>
        <Link 
        to={`/menu/${id}`}
        onClick={() => window.scrollTo({top:"0", behavior : "smooth"})}>
          <div className='h-32 flex flex-col justify-center items-center'>
        <img 
        src={image} 
        alt='' 
        className='h-full'/>
      </div>
      <h3 
      className="whitespace-nowrap mt-4 font-semibold text-gray-900  capitalize text-lg overflow-hidden">
            {name}
          </h3>
          <p className=" text-slate-500 font-medium">{category}</p>
          <p className=" font-bold">
            <span className="text-red-800">Ksh</span>
            <span> {price} </span>
          </p>
          </Link>
          <button 
          className='font-bold text-gray-700 m-2 bg-yellow-600 hover:bg-orange-400 py-1 rounded-full w-full'
          onClick={handleAddCartProd}
          >Add Cart</button>
           
        </>
        :
        <div className='min-h-[150px] flex justify-center items-center'>
        <p>{loading}</p>
        </div>
      }
     
    </div>
  )
}

export default Cardslider
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';




export const Edit = () => {

    const {
        register,
        handleSubmit,
      } = useForm()

let { id } = useParams();

const [info, setInfo] = useState([]);
const [image, setImage] = useState(null)

useEffect(() => {

    axios.get('http://localhost:3000/api/' + id).then(res=> {
        setInfo(res.data)
        setImage(res.data.image)
    })
}, [])

let navigate= useNavigate();

const onSubmit = (data) => {

    axios.patch('http://localhost:3000/api/'+id,  {...data, image : image})
    .then(res=> navigate('/'))
   
}


const convertToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
        setImage(reader.result);
    }
}

  return (
    <div className="row flex-column align-items-center">
         <div>Edit {id}</div>
         <div className='img'>
                    <img src={image} />
                </div>
         <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit(onSubmit)}>
            <label className='mb-3'>
                Header : <input type="text" defaultValue={info.header} {...register('header')}/>
            </label>
            <label className='mb-3'>
                Text : <input type="text" defaultValue={info.text} {...register('text')}/>
            </label>
            <label className='mb-3'>
                Image : <input type="file" onInput={(e)=> convertToBase64(e.target.files[0])}/>
            </label>
            <button type='submit'>
                Save Data
            </button>
         </form>
    </div>
    
  )
}

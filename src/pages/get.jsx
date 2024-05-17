import React, { useEffect ,useState } from 'react'
import { CardCustom } from '../components/cardComponent';
import axios from 'axios';



export const Get = () => {


    const [data, setData] = useState([]);


    useEffect(() => {

        const getData = async () => {

            let response = await axios.get('http://localhost:3000/api');
            setData(response.data)

        }

        getData();

    }, [])


    return (
        <>
            {
                data.map(el => <CardCustom header={el.header} text={el.text} image={el.image} id={el.id} />)
            }
        </>
    )
}

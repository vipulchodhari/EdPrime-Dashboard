import axios from "axios";
import { useState } from "react";
import '../styles/categoryEdit.css';

export const CategoryEdit = ({ setClose, data, }) => {
    const [Ename, setEName] = useState(data.name);
    const [EStatus, setEStatus] = useState(data.Status);
    // console.log("receive edit", data);

    const handleSubmit = (id) => {
        
        axios.patch(`http://192.100.100.58:3000/books/${id}`, {
            name: Ename,
            Status: EStatus
        })
            .then((data) => console.log("post data", data))
            .catch((err) => console.log("post error", err.response.data.error))

        setClose(false)
    }
    return <div className='categoryedit-cont'>
        <form onSubmit={(e) => handleSubmit(data._id)} className='categoryedit-form'>
            <input
                value={Ename}
                className='categoryedit-input'
                onChange={(e) => setEName(e.target.value)}
            />
            <input
                value={EStatus}
                className='categoryedit-input'
                onChange={(e) => setEStatus(e.target.value)}
            />

            {/* <button className='submit' onClick={(e) => handleSubmit(data._id)}> OK</button> */}
            <input className='submit' type='submit' />
        </form>
    </div>
}
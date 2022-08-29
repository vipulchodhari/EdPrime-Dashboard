import '../styles/user.css';
import edit from '../assets/edit.png';
import remove from '../assets/remove.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { CategoryEdit } from './CategoryEdit';
import { Request_Fetchdata } from '../redux/action/categoryAction';

export const User = () => {
    const [catgList, setCatgList] = useState([]);
    const [editData, setEditData] = useState();
    const [close, setClose] = useState(false);
    let [key, setKey] = useState("");
    const [text, setText] = useState({
        name: "",
        Status: ""
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name } = e.target;
        setText({
            ...text,
            [name]: e.target.value
        });
        // console.log("text", e.target.value);
    }

    const getData = () => {
        fetch(`http://192.100.100.58:3000/books`)
            .then((data) => data.json())
            .then((res) => setCatgList(res))
    }

    const handleDelete = (id) => {
        axios.delete(`http://192.100.100.58:3000/books/${id}`)
            .then((res) => console.log("delete item", res))

        alert('your item deleted')
        getData()

    }

    const handleEdit = (item) => {
        setEditData(item)
        setClose(true);
        // console.log("edit item", item);
    }

    const handleSubmit = () => {
        axios.post(`http://192.100.100.58:3000/books`, {
            name: text.name,
            Status: text.Status
        })
            .then((data) => console.log("post data", data))
            .catch((err) => console.log("post error", err.response.data.error))

        alert('your item added')
        // getData()

    }

    const filterData = (e) => {
        if(key.length>e.target.value.length){
            getData()
        }
        setKey(e.target.value);
        key = key.toUpperCase();
        
        console.log("key", key);
        setCatgList(catgList.filter(
            (user) =>
              user.name.toUpperCase().indexOf(key) > -1 ||
              user.Status.toUpperCase().indexOf(key) > -1
          ))
      };

    useEffect(() => {
        getData();
    }, [])
    // console.log("catgList", catgList);



    return <div className='user-container'>
        <h1><u>Category List</u></h1>
        <div className='user-form-cont'>
            <form className='user-form' onSubmit={(e) => {
                // e.preventDefault();
            }}>
                <input
                    onChange={handleChange}
                    name="name"
                    type='text'
                    placeholder='Enter category name...'
                /><br />
                <input
                    onChange={handleChange}
                    name="Status"
                    type='text'
                    placeholder='Enter category status...'
                /><br />

                <input onClick={handleSubmit} id='submit-btn' type='submit' />
            </form>

            <form className='user-form'>
                <input value={key} onChange={filterData} type='text' placeholder='Search by name...'/>
            </form>
        </div>

        <div className='category-list-cont'>
            <table className='category-list-table'>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Remove</th>
                        <th>Edit</th>
                    </tr>
                    {catgList.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.Status}</td>
                            <td>
                                <img
                                    alt=''
                                    src={remove}
                                    onClick={(e) => handleDelete(item._id)}
                                    className='category-list-icon' />
                            </td>
                            <td>
                                <img
                                    alt=''
                                    className='category-list-icon'
                                    onClick={(e) => handleEdit(item)}
                                    src={edit} />
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>

            <div>
                <button onClick={() => {
                    dispatch(Request_Fetchdata());
                    
                }}>Get</button>
            </div>

            {close ? <CategoryEdit setClose={setClose} data={editData}/> : ""}
        </div>
    </div>
}
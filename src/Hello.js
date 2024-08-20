import { useState } from 'react';
import './Hello.css';
import dayjs from 'dayjs';
import axios from 'axios';
import MyComponent from './components/MyComponent';
import config from './config';

function Hello() {

    const [fileSelected, setFileSelected] = useState({});
    const selectedfile = (fileInput) => {
        if (fileInput !== undefined) {
            if (fileInput.length > 0) {
                setFileSelected(fileInput[0]);
            }
        }
    }

    const uploadFile = async () => {
        try {
            const formData = new FormData();
            formData.append('myFile', fileSelected);

            await axios.post(config.apiPath + '/book/testUpload', formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    const [data, setData] = useState([1, 3, 4, 6, 7, 8, 9, 15]);
    const [user, setUser] = useState(
        [
            {
                id: 1,
                name: 'ken',
                salary: 25000
            },
            {
                id: 2,
                name: 'namfon',
                salary: 22000
            },
            {
                id: 3,
                name: 'tuta',
                salary: 100
            }
        ]
    )

    function MaxMinData(data) {
        const max = Math.max(...data);
        const min = Math.min(...data)
        console.log('min data :' + min + ' max data : ' + max)
    }

    function RandomNumber(number) {
        const random = Math.floor(Math.random(number) * 100)
        console.log(random)
    }

    MaxMinData(data)
    RandomNumber(number)

    console.log(user)

    return (
        <>
            <div>
                <input type='file' onChange={(e) => selectedfile(e.target.files)} />
                <button className='btn btn-primary' onClick={uploadFile}>
                    CallAPI
                </button>
            </div>
            <div>
                {user.map((item) => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Hello;
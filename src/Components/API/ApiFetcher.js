import {useEffect, useState} from 'react';

import ApiCard from './Card';

const ApiFetcherView = () => {
    const [apiData,
        setApiData] = useState([])

    useEffect(() => {
        const axios = require('axios').default;
        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'

        const getApiData = () => {
            return axios
                .get(url)
                .then(({data}) => {
                    const destructuredData = data;
                    setApiData(destructuredData)
                });
        }
        getApiData()
    }, [])
    return (
        <div>{apiData.map((postInfo, index) => (
                <div>
                    <ApiCard key={index} postInfo={postInfo}/>
                </div>
            ))}</div>
    )
}

export default ApiFetcherView;

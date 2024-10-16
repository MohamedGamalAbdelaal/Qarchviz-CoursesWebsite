import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const Usegetcourse = () => {
    function getcourseDetail(){
        return axios.get('http//:oooooooooooooooo')
    }
    const res=useQuery({
        queryKey:'product',
        queryFn:getcourseDetail
    })
    return res;
}

export default Usegetcourse;

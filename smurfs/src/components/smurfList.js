import React, {useContext, useState} from 'react';
import {SmurfContext} from '../smurfContext/smurfContext';
import {SmurfCard} from './SmurfCard';

const SmurfList = () => {
    const {smurfs} = useContext(SmurfContext);

    const [smurfCard, setsmurfCard] = useState({
        name: "",
        age: "",
        height: ""
    })

    const changeHandler = (event) => {
        setsmurfCard({
            ...smurfCard, [event.target.name]: event.target.value
        })
    }
}
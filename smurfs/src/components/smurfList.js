import React, {useContext, useState} from 'react';
import {SmurfContext} from '../smurfContext/smurfContext';
import {SmurfCard} from './SmurfCard';

const SmurfList = () => {
    const {smurfs} = useContext(SmurfContext);
   
    return (
        <div className="smurfList">
            
        </div>
    )
}
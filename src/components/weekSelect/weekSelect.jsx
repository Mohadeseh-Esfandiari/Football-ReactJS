import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './weekSelect.module.css';
import { fetchMatches } from '../../api';

const WeekSelect = ({handleMatcheChange}) => {

    const [fetchedMatches , setfetchedMatches] = useState([]);

    useEffect(()=> {
        const fetchAPI = async () => {
            setfetchedMatches(await fetchMatches());
        }
        fetchAPI();
    },[setfetchedMatches]);

    return (
       <FormControl className={styles.FormControl}>
           <NativeSelect defaultValue="" onChange={(e) => handleMatcheChange(e.target.value) }>
               <option value="global">Week</option>
                {fetchedMatches.map((Matche , i) => <option key={i} value={Matche}>{Matche}</option> )};
           </NativeSelect>
       </FormControl>
    )
}

export default WeekSelect;
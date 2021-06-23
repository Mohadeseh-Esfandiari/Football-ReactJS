import axios from 'axios';
const url = 'https://api.football-data.org/v2/competitions/2021/matches';

export const fetchData = async (matche) => {
    let changeableUrl = url;
    if (matche) {
        changeableUrl = `${url}/matches/${matche}`;
    }

    try { 
        const { data: {lastUpdate,group,limit,status} } = await axios.get(changeableUrl);
        return {lastUpdate,group,limit,status}; 
    }
          catch (error) {
                console.log(error);
    }
}
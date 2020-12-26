import * as React from 'react';
import { Socket } from './Socket';

function rankSubmit(event)
{
    const gloom = document.getElementById('gloomhaven');
    const tm = document.getElementById('tm');
    
    Socket.emit('new subm' , {
        rank_gloom: gloom.value,
        rank_tm: tm.value,
    });
    console.log('Sent new query ' + gloom.value);
    console.log('Sent new query ' + tm.value);
    event.preventDefault();
}

export function Ranking() {
    return (
            <form onSubmit={rankSubmit} >
                Gloomhaven
                <select id = "gloomhaven">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                </select> <br />
                Terraforming Mars
                <select id = "tm">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                </select> <br />
                <button> Submit </button>
            </form>
    );
}
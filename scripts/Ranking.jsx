import * as React from 'react';
import { Socket } from './Socket';

function rankSubmit(event)
{
    const gloom = document.getElementById('gloomhaven');
    const tm = document.getElementById('tm');
    const roku = document.getElementById('roku');
    const dominant = document.getElementById('dominant');
    const gproj = document.getElementById('gproj');
    const king = document.getElementById('king');
    const inis = document.getElementById('inis');
    const cosmic = document.getElementById('cosmic');
    const ring = document.getElementById('ring');
    const neuro = document.getElementById('neuro');
    const scythe = document.getElementById('scythe');
    const raiders = document.getElementById('raiders');
    const above = document.getElementById('above');
    const dune = document.getElementById('dune');
    const clankfan = document.getElementById('clankfan');
    const clankspace = document.getElementById('clankspace');
    
    Socket.emit('new subm' , {
        rank_gloom: gloom.value,
        rank_tm: tm.value,
        rank_roku: roku.value,
        rank_dominant: dominant.value,
        rank_gproj: gproj.value,
        rank_king: king.value,
        rank_inis: inis.value,
        rank_cosmic: cosmic.value,
        rank_ring: ring.value,
        rank_neuro: neuro.value,
        rank_scythe: scythe.value,
        rank_raiders: raiders.value,
        rank_above: above.value,
        rank_dune: dune.value,
        rank_clankfan: clankfan.value,
        rank_clankspace: clankspace.value,
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
                	<option selected> 0 </option>
                </select> <br />
                Terraforming Mars
                <select id = "tm">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Battle For Rokugan
                <select id = "roku">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Dominant Species
                <select id = "dominant">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Gaia Project
                <select id = "gproj">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                The King is Dead
                <select id = "king">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Inis
                <select id = "inis">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Cosmic Encounter
                <select id = "cosmic">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                War of The Ring (2v2)
                <select id = "ring">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Neuroshima Hex
                <select id = "neuro">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Scythe
                <select id = "scythe">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Raiders of The North Sea
                <select id = "raiders">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Above and Below
                <select id = "above">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Dune Imperium
                <select id = "dune">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Clank (Fantasy)
                <select id = "clankfan">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Clank (Sci-Fi)
                <select id = "clankspace">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                <button> Submit </button>
            </form>
    );
}
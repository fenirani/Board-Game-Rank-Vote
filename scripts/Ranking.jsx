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
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/81crhhZd63L._AC_SY355_.jpg"
                width="100" height="100">
                </img>
                <select id = "gloomhaven">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Terraforming Mars
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/91RdR7olLsL._AC_SL1500_.jpg"
                width="100" height="100">
                </img>
                <select id = "tm">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Battle For Rokugan
                <img 
                src= "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiechUaQT4nPMTTcTQC9EEUN_LA-rxT4ZQdkQchVwZ3iQ3_v0"
                width="100" height="100">
                </img>
                <select id = "roku">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Dominant Species
                <img 
                src= "https://d1rw89lz12ur5s.cloudfront.net/photo/theendgames/file/12ba69d22d6042a4bc57762326789c50/dominant_species_box.jpg"
                width="65" height="100">
                </img>
                <select id = "dominant">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Gaia Project
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/91k6yNbc8RL._AC_SL1500_.jpg"
                width="100" height="100">
                </img>
                <select id = "gproj">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                The King is Dead
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/81hlpdu1c-L._AC_UL600_SR600,600_.jpg"
                width="100" height="100">
                </img>
                <select id = "king">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Inis
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/51G5SSMC55L._AC_SX425_.jpg"
                width="100" height="100">
                </img>
                <select id = "inis">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Cosmic Encounter
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/71SEltFgKqL._AC_SL1088_.jpg"
                width="100" height="100">
                </img>
                <select id = "cosmic">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                War of The Ring
                <img
                src="https://images-na.ssl-images-amazon.com/images/I/A10eLnKuQFL._AC_SL1500_.jpg"
                width="100" height="100">
                </img>
                <select id = "ring">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Neuroshima Hex
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/81crhhZd63L._AC_SY355_.jpg"
                width="100" height="100">
                </img>
                <select id = "neuro">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Scythe
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/81crhhZd63L._AC_SY355_.jpg"
                width="100" height="100">
                </img>
                <select id = "scythe">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Raiders of The North Sea
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/81crhhZd63L._AC_SY355_.jpg"
                width="100" height="100">
                </img>
                <select id = "raiders">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Above and Below
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/81crhhZd63L._AC_SY355_.jpg"
                width="100" height="100">
                </img>
                <select id = "above">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Dune Imperium
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/81crhhZd63L._AC_SY355_.jpg"
                width="100" height="100">
                </img>
                <select id = "dune">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Clank (Fantasy)
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/81crhhZd63L._AC_SY355_.jpg"
                width="100" height="100">
                </img>
                <select id = "clankfan">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br />
                Clank (Sci-Fi)
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/81crhhZd63L._AC_SY355_.jpg"
                width="100" height="100">
                </img>
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
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
                width="125" height="125">
                </img>
                <select id = "gloomhaven">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /> <br />
                Terraforming Mars
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/91RdR7olLsL._AC_SL1500_.jpg"
                width="125" height="125">
                </img>
                <select id = "tm">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Battle For Rokugan
                <img 
                src= "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiechUaQT4nPMTTcTQC9EEUN_LA-rxT4ZQdkQchVwZ3iQ3_v0"
                width="125" height="125">
                </img>
                <select id = "roku">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Dominant Species
                <img 
                src= "https://d1rw89lz12ur5s.cloudfront.net/photo/theendgames/file/12ba69d22d6042a4bc57762326789c50/dominant_species_box.jpg"
                width="90" height="125">
                </img>
                <select id = "dominant">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Gaia Project
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/91k6yNbc8RL._AC_SL1500_.jpg"
                width="125" height="125">
                </img>
                <select id = "gproj">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                The King is Dead
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/81hlpdu1c-L._AC_UL600_SR600,600_.jpg"
                width="125" height="125">
                </img>
                <select id = "king">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Inis
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/51G5SSMC55L._AC_SX425_.jpg"
                width="125" height="125">
                </img>
                <select id = "inis">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Cosmic Encounter
                <img 
                src= "https://images-na.ssl-images-amazon.com/images/I/71SEltFgKqL._AC_SL1088_.jpg"
                width="125" height="125">
                </img>
                <select id = "cosmic">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                War of The Ring
                <img
                src="https://images-na.ssl-images-amazon.com/images/I/A10eLnKuQFL._AC_SL1500_.jpg"
                width="125" height="125">
                </img>
                <select id = "ring">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Neuroshima Hex
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/A18zHeHrFzL._AC_SL1500_.jpg"
                width="125" height="125">
                </img>
                <select id = "neuro">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Scythe
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/918TkODhXPL._AC_SL1500_.jpg"
                width="125" height="125">
                </img>
                <select id = "scythe">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Raiders of The North Sea
                <img
                src= "https://i5.walmartimages.com/asr/5809ab79-0a66-4ad2-81fe-6ebe815dbf09_1.01645ba934ed99c02d8b435b296fc85e.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                width="125" height="125">
                </img>
                <select id = "raiders">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Above and Below
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/911ccd3L5ML._AC_SL1500_.jpg"
                width="125" height="125">
                </img>
                <select id = "above">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Dune: Imperium
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/61bRCM-ft1L._AC_SL1000_.jpg"
                width="150" height="150">
                </img>
                <select id = "dune">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Clank (Fantasy)
                <img
                src= "https://images-na.ssl-images-amazon.com/images/I/818A2b0tXtL._AC_SY450_.jpg"
                width="125" height="125">
                </img>
                <select id = "clankfan">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                Clank (Sci-Fi)
                <img
                src= "https://cdn.shopify.com/s/files/1/2952/5332/products/859930005940_512x512.jpg?v=1591820843"
                width="150" height="150">
                </img>
                <select id = "clankspace">
                	<option> 5 </option>
                	<option> 4 </option>
                	<option> 3 </option>
                	<option> 2 </option>
                	<option> 1 </option>
                	<option selected> 0 </option>
                </select> <br /><br />
                <button> Submit </button>
            </form>
    );
}
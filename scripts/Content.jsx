import * as React from 'react';
// import { Button } from './Button';
import { Socket } from './Socket';

export function Content() {
    
   function submit(event){
        
    }
    

    return (
        <div>
            <form onSubmit={submit} >
                <input type="radio" id="gloomhaven" name="gender" value="male"/>
                    <label for="gloomhaven">Gloomhaven</label><br />
                <input type="radio" id="terraforming mars" name="gender" value="male"/>
                    <label for="terraforming mars">Terraforming Mars</label><br />
                <input type="radio" id="inis" name="gender" value="male"/>
                    <label for="inis">Inis</label><br />
                <input type="radio" id="scythe" name="gender" value="male"/>
                    <label for="scythe">Scythe</label><br />
                <input type="radio" id="gaia project" name="gender" value="male"/>
                    <label for="gaia project">Gaia Project</label><br />
                <input type="radio" id="the king is dead" name="gender" value="male"/>
                    <label for="the king is dead">The King is Dead</label><br />
                <input type="radio" id="the grizzled" name="gender" value="male" />
                    <label for="the grizzled">The Grizzled</label>
                <input type="radio" id="battle for rokugan" name="gender" value="male" />
                    <label for="battle for rokugan">Battle For Rokugan</label>
            </form>
        </div>
    );
}
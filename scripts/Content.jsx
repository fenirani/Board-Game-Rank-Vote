import * as React from 'react';
import { Socket } from './Socket';
import { Ranking } from './Ranking';

export function Content() {

    const [word, setWord] = React.useState("Fuck");
    
    function newZip() {
        React.useEffect(() => { 
            Socket.on('new rank', (data) => {
                setWord(data['rank_gloom']);
        });
    });
    }    
    
    newZip();
    
    return (
        <div>
            {  word }
            <Ranking />
        </div>
    );
}
import * as React from 'react';
import { Socket } from './Socket';
import { Ranking } from './Ranking';
import Chart from "react-google-charts";

export function Content() {

    const [word, setWord] = React.useState(0);
    
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
            <Ranking />
            <Chart
              width={'500px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Game', 'Votes'],
                ['Gloomhaven', word],
                ['Dominant Species', 1],
                ['Clank (Fantasy)', 3],
                ['Inis', 6],
                ['Terraforming Mars', 7],
              ]}
              options={{
                title: '',}}
            />
        </div>
    );
}
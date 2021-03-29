import {Card} from '../card/card.jsx';
import './card-list.css';

export const CardList = props => (
    <div className='card-list'>
        {
        props.monsters.map(monster => 
        <Card key={monster.id} monster={monster}/>)
        } 
    </div>
);
import '../../styles/Card.css';


export type cardProps = {
    name: string;
    time: string;
}

export function Card(props: cardProps) {
    return (
        <div className='container-card'>
            <strong className='nome-card'>{props.name}</strong>
            <small className='hora-card'>{props.time}</small>
        </div>
    )
}



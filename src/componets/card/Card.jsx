import '../../styles/Card.css';


export function Card(props) {
    return (
        <div className='container-card'>
            <strong className='nome-card'>{props.name}</strong>
            <small className='hora-card'>{props.time}</small>
        </div>
    )
}



import './Card.css';

const Card: React.FC = ({ children }) => {
    return (
        <div className="Card">
            {children}
        </div>
    )
}

export default Card
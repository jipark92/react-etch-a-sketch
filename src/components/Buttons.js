import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Buttons() {
    return (
        <div className="btns-container">
            <Button>Black Marker</Button>
            <Button>Rainbow Marker</Button>
            <Button>Eraser</Button>
            <Button>Change Grid Size</Button>
        </div>
    )
}

import {Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div className='about-container'>
            <h1>ABOUT</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tools Used?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Created By?</Accordion.Header>
                    <Accordion.Body>
                        <p>Ji Park</p>
                        <a href="https://github.com/norfkorean/react-etch-a-sketch" target="_blank">GitHub</a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
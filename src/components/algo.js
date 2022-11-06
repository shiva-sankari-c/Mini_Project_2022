import {getalgorithms} from "../data"
import Accordion from 'react-bootstrap/Accordion';
import '../App.css';

function Algo() {
  let algorithms = getalgorithms();
  return (
    <div className="Algo">
        <h1>Algorithms</h1> 
        {algorithms.map(algorithm=>{
          return(
            <div className="algorithm">
                <div className="desc">
                  <h2>{algorithm.name}</h2>
                  <h3>{algorithm.expansion}</h3>
                  <p>{algorithm.description}</p>
                  <img src={algorithm.formula} alt="formula"></img>
                </div>
                <div className="acc-list">
                <Accordion flush>
                {algorithm.executions.map(execution=>{
                  if(execution.src!==""){
                    return(                   
                      <Accordion.Item eventKey={execution.id}>
                        <Accordion.Header>{execution.framework}</Accordion.Header>
                        <Accordion.Body><img src={execution.src} alt={execution.framework}></img></Accordion.Body>
                      </Accordion.Item>                   
                    )
                  }
                })}
                 </Accordion>
                </div>
            </div>
          )
        })}

    </div>
  );
}

export default Algo;
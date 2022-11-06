import '../App.css';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="Home">
        <div className='desc'>
            <h2>OpenACC</h2>
            <p>OpenACC (for Open Accelerators) is a programming standard for parallel computing on accelerators (mostly on NIVDIA GPU).It is designed to simplify GPU programming.</p>
            <a href="https://www.openacc.org/">
            <Button className='button'>Read More</Button>
            </a>
        </div>
       <img className="archit_diag" src={`${process.env.PUBLIC_URL}/assets/images/archit.png`} alt="Architecture diagram"/>
    </div>
  );
}

export default Home;
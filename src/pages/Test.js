import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const Test = () => {
  const navigate = useNavigate();

 

return(
      <div  className='container-fluid'>
     <h2>You made it to the second page</h2>
     <div className="container mt-5">
      <button className="btn btn-primary">Click me</button>
    </div>
      </div>
      
    );
  }
  
  export default Test;
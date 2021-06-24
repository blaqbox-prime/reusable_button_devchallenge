
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="Container d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
      <div className="row">
        <div className="col">
        <CustomButton startIcon="all_inclusive" size="sm" color="primary" variant="default">Infinity</CustomButton>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <CustomButton startIcon="weekend" size="md" color="secondary" variant="text">Movie Night</CustomButton>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <CustomButton startIcon="whatshot" size="lg" color="danger" variant="outline">Fire</CustomButton>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <CustomButton endIcon="delete">Delete</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default App;

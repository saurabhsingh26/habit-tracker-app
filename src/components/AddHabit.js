import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/HabitSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddHabit(){
  const dispatch=useDispatch();

  const handleSave=(e)=>{
    const habitName=document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    // react toast for notification
    toast.success('Habit added successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    document.getElementById("habitName").value="";
  }

    return (
        <div className="container mt-5 w-50">
            <div className="card p-4">
                <form>
                    <h1>New Habit</h1>
                    <div class="form-group mb-3">
                        <input type="text" class="form-control" id="habitName" aria-describedby="emailHelp" placeholder="Enter Habit Name" />
                    </div>
                    <Link to="/" type="submit" class="btn btn-success" onClick={handleSave}>Add</Link>
                </form>
                
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddHabit
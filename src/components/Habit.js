import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/HabitSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Habit = ({habit}) => {
  const today=new Date();
  const todayDay=today.getDay();
  let countDone=0;
  for (let i = 0; i < habit.weekLog.length; i++) {
    if(habit.weekLog[i].isDone===true){
      countDone++;
    }
  }
  
  const navigate=useNavigate();

  const dispatch=useDispatch();

  const handleDelete=()=>{
    dispatch(deleteHabit(habit.id));
    toast.success('Habit deleted successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week-view");
  }

  return (
    <div className="container mb-3 w-75">
        <div className="card">
            <div className="habits">
                <div className="habit-left">
                    <div>
                        <h4>{habit.name}</h4>
                        <p className="day-complete">{countDone}/{todayDay+1} days</p>
                    </div>
                </div>
                <div className="habit-right">
                    <div className="log-btn btn btn-light" onClick={setId}>
                        <img src="https://cdn-icons-png.flaticon.com/512/4992/4992462.png" alt="calender" />
                        Week View
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete" onClick={handleDelete} />
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  );
};

export default Habit;

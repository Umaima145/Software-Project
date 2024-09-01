import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Components/Login';
import SignUp from '../src/Components/SignUp';
import StudentList from './Components/StudentList';
import Dashboard from './Screens/Dashboard';
import StudentRegistrationForm from './Components/StudentRegistrationForm';
import TeacherRegistrationForm from './Components/TeacherRegistrationForm';
import TeacherList from './Components/TeacherList';
import AddSubjectForm from './Components/AddSubjectForm';
import SubjectList from './Components/SubjectList';
import ClassForm from './Components/ClassForm';
import ClassList from './Components/ClassList';
import FeeStructureForm from './Components/FeeStructureForm';
import AdmissionForm from './Components/AdmissionForm';
import ExamScheduleForm from './Components/ExamScheduleForm';
import ExamResultList from './Components/ExamResultList';
import PaymentForm from './Components/PaymentForm';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />}>
        
        
        <Route index element={<StudentList text={"Students List"} />} />
        
        {/* Student Routes */}
        <Route path="students/registration" element={<StudentRegistrationForm heading={"Students Registration Form"} />} />
        <Route path="students/list" element={<StudentList text={"Students List"} />} />
        
        {/* Teacher Routes */}
        <Route path="teachers/registration" element={<TeacherRegistrationForm heading={"Teachers Registration Form"} />} />
        <Route path="teachers/list" element={<TeacherList text={"Teachers List"} />} />
        
        {/* Subject Routes */}
        <Route path="subjects/add" element={<AddSubjectForm heading={"Add Subjects"} />} />
        <Route path="subjects/list" element={<SubjectList text={"Subjects List"} />} />
        
        
        {/* School Routes */}
        <Route path="school/registration" element={<StudentRegistrationForm heading={"Students Registration"} />} />
        <Route path="school/Tearegistration" element={<TeacherRegistrationForm heading={"Teachers Registration Form"} />} />
        
        {/* Class Routes */}
        <Route path="class/add" element={<ClassForm heading={"Admission Form"}/>} />
        <Route path="class/list" element={<ClassList text={"Class List"} />} />
        
        {/* Fees Routes */}
        <Route path="fees/add" element={<FeeStructureForm heading={"Fee Structure"} />} />
        <Route path="fees/list" element={<PaymentForm text={"Payment For"} />} />
        
        {/* Admission Routes */}
        <Route path="admission/add" element={<AdmissionForm heading={"Admission Form"} />} />
        
        {/* Exam Routes */}
        <Route path="exam/add" element={<ExamScheduleForm heading={"Exam Schedule"} />} />
        <Route path="exam/list" element={<ExamResultList text={"Exam Result"} />} />

      </Route>
    </Routes>
  );
}

export default App;

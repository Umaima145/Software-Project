import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Components/Login';
import SignUp from '../src/Components/SignUp';
import StudentList from './Components/StudentList';
import Dashboard from './Screens/Dashboard';
import StudentRegistrationForm from './Components/StudentRegistrationForm';
import TeacherRegistrationForm from './Components/TeacherRegistrationForm';
import TeacherList from './Components/TeacherList';

// Import the components for each route
// import AddSubjectForm from './Components/AddSubjectForm';
// import SubjectList from './Components/SubjectList';
// import SyllabusForm from './Components/SyllabusForm';
// import SyllabusList from './Components/SyllabusList';
// import SchoolStudentRegistration from './Components/SchoolStudentRegistration';
// import SchoolTeacherRegistration from './Components/SchoolTeacherRegistration';
// import ClassForm from './Components/ClassForm';
// import ClassList from './Components/ClassList';
// import FeeStructureForm from './Components/FeeStructureForm';
// import FeeVoucherList from './Components/FeeVoucherList';
// import AdmissionForm from './Components/AdmissionForm';
// import ExamScheduleForm from './Components/ExamScheduleForm';
// import ExamResultList from './Components/ExamResultList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />}>
        
        {/* Student Routes */}
        <Route path="students/registration" element={<StudentRegistrationForm heading={"Students Registration Form"} />} />
        <Route path="students/list" element={<StudentList text={"Students List"} />} />
        
        {/* Teacher Routes */}
        <Route path="teachers/registration" element={<TeacherRegistrationForm heading={"Teachers Registration Form"} />} />
        <Route path="teachers/list" element={<TeacherList text={"Teachers List"} />} />
        
        {/* Subject Routes */}
        {/* <Route path="subjects/add" element={<AddSubjectForm heading={"Add Subjects"} />} />
        <Route path="subjects/list" element={<SubjectList text={"Subjects List"} />} />
         */}
        {/* Syllabus Routes */}
        {/* <Route path="syllabus/add" element={<SyllabusForm heading={"Syllabus Form"} />} />
        <Route path="syllabus/list" element={<SyllabusList text={"Syllabus List"} />} />
         */}
        {/* School Routes */}
        <Route path="school/registration" element={<StudentRegistrationForm heading={"Students Registration"} />} />
        <Route path="school/registration" element={<TeacherRegistrationForm heading={"Teachers Registration"} />} />
        
        {/* Class Routes */}
        {/* <Route path="class/add" element={<ClassForm heading={"Class Form"} />} />
        <Route path="class/list" element={<ClassList text={"Class List"} />} />
         */}
        {/* Fees Routes */}
        {/* <Route path="fees/add" element={<FeeStructureForm heading={"Fee Structure"} />} />
        <Route path="fees/list" element={<FeeVoucherList text={"Fee Voucher"} />} />
         */}
        {/* Admission Routes */}
        {/* <Route path="admission/add" element={<AdmissionForm heading={"Admission Form"} />} /> */}
        
        {/* Exam Routes */}
        {/* <Route path="exam/add" element={<ExamScheduleForm heading={"Exam Schedule"} />} />
        <Route path="exam/list" element={<ExamResultList text={"Exam Result"} />} /> */}

        {/* Add more routes as needed */}
      </Route>
    </Routes>
  );
}

export default App;

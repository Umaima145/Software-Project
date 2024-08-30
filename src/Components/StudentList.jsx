import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import '../App.css'


const StudentList = ({text}) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, 'students'));
      const studentsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStudents(studentsList);
    };

    fetchStudents();
  }, []);

  return (
    
   <div className='tablediv'>
    <Typography sx={{marginBottom:"50px",
    marginTop:"50px",
    fontSize:"30px",
    fontWeight:"Bold",
    textAlign:"center"
    }}>
      {text}</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow sx={{backgroundColor:"white"}}>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell component="th" scope="row">{student.id}</TableCell>
              <TableCell align="right">{student.firstName}</TableCell>
              <TableCell align="right">{student.lastName}</TableCell>
              <TableCell align="right">{student.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
};

export default StudentList;

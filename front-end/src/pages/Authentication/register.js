import React from 'react';
import AuthUser from './AuthUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Box, Button, TextInput, PasswordInput } from '@mantine/core';
import Hero from '../Homepage/hero/Hero';
import Testimonal from '../Testimonalpage/Testimonal';
import AboutCard from '../Aboutpage/AboutCard';
import CoursesCard from '../Coursespage/CoursesCard';
export default function Register() {
        const navigate = useNavigate();
        const {http, setToken} = AuthUser();
        const [firstname,setFirstname] = useState();
        const [lastname,setLastname] = useState();
        const [email,setEmail] = useState();
        const [password,setPassword] = useState();
    
        const submitForm = () =>{
            // api call
            http.post('/register',{firstname:firstname, lastname:lastname, email:email, password:password}).then((res)=>{
              navigate('/login')
          })
        }
  const [opened, setOpened] = useState(true);
  return (
    <>
    <Hero />
    <AboutCard />
    
    <CoursesCard />
    <Testimonal />
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Welcome"
      >
        <Box sx={{ maxWidth: 400 }} mx="auto">
        <TextInput
          label="First Name"
          placeholder="firstname"
          onChange={e=>setFirstname(e.target.value)}
        />
        <TextInput
          label="Last Name"
          placeholder="lastname"
          onChange={e=>setLastname(e.target.value)}
        />
        <TextInput
          label="Email Address"
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
        />
        <PasswordInput
          placeholder="Password"
          label="Password"
          description="Password must include at least one letter, number and special character"
          withAsterisk
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={submitForm} mt="md">
          Register
        </Button>
        {/* <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button> */}
      {/* {submittedValues && <Code block>{submittedValues}</Code>} */}
    </Box>
        
      </Modal>
      {/* <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group> */}
    </>
  )
}
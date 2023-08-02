import React, { useEffect } from 'react';
import styled from "styled-components"
import { mobile, mobileXR, tablet } from "../responsive"
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
   center;
  display: flex;
  align-items: center;
  justify-content: center;
  cover: fit;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255,255,255,0.5);
  ${mobile({ width: "75%", height: "100%" })};
  ${mobileXR({ width: "75%", height: "100%" })};
  ${tablet({ width: "75%", height: "100%" })};
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Title = styled.h1`
  font-size: 24px;
  fontweight: 300;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "100%" })};
  ${mobileXR({ width: "100%" })};
  ${tablet({ width: "100%" })};
`

const Register = () => {
  const user = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [navigate, user])
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
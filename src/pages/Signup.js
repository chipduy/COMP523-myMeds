import React, { useRef, useState } from "react"
import { Button, Card, Alert } from "react-bootstrap"
import {Form, FormGroup, FormText, Input, Label, FormFeedback, Row, Col } from 'reactstrap'
import { useAuth } from "../contexts/AuthContext.js"
import { Link, useHistory } from "react-router-dom"
import '../css/SignUp.css';
import NavbarContainer from '../components/NavbarContainer'
import Header from '../components/Header'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to Create an Account")
    }
    setLoading(false)
  }

  return (
    <>
      <div>
        <NavbarContainer/>
      </div>
      <Card className="sign-up text-left mt-5 mx-auto border-0" bg="light">
        <Card.Body data-testid="help">
          <h2 className="text-center mb-4">Sign Up</h2>

          <hr/>
          <p className="text-center">Create a MyMeds account to start posting reviews, view your profile, 
            and access other features such as requesting new medications to be included on MyMeds!</p>
          <hr/>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className="text-center m-4">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
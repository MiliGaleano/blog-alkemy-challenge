import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from "react-router-dom"
import {logUserIn} from '../services/login'

// Schema for yup
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email address")
        .max(20, "Can't be longer than 20 characters")
        .required("Email is required"),
    password: Yup.string()
        .min(2, "Must have at least 2 characters")
        .max(10, "Can't be longer than 10 characters")
        .required("Password is required")
  })

const Login = () => {

    let history = useHistory()

    return(
        <div className='divLogin'>
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                <Formik 
                    initialValues={{ email:"", password:""}} 
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true)
                        logUserIn(values)
                        .then(res => {
                            if (res === 'ok') {
                                history.push("/")
                            } else {
                                alert('Invalid email and password, please try again')
                            }
                        })
                        .catch(err => console.log(err))
                        setSubmitting(false)
                    }}
                >
                {( {values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                                placeholder="Enter email" 
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email} 
                                className={touched.email && errors.email ? "error" : null}
                                />
                            {touched.email && errors.email ? 
                                <Form.Text className="text-muted">{errors.email}</Form.Text>
                            : null}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" 
                                placeholder="Enter password" 
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={touched.password && errors.password ? "error" : null}
                                />
                            {touched.password && errors.password ? 
                                <Form.Text className="text-muted">{errors.password}</Form.Text>
                            : null}
                        </Form.Group>
                        
                        <Button variant="secondary" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                    )}
                </Formik>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
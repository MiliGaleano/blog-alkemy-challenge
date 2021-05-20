import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { createPost, updatePost } from '../services/createPost'
import { useHistory } from "react-router-dom"

// Schema for yup
const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(4, "Must have at least 4 characters")
        .max(40, "Can't be longer than 40 characters")
        .required("Title is required"),
    content: Yup.string()
        .min(10, "Must have at least 10 characters")
        .max(1000, "Can't be longer than 1000 characters")
        .required("Content is required")
  })

const FormPost = ({postToEdit, update}) => {

    let history = useHistory()

    return(
        <Formik 
            initialValues={{ title: postToEdit ? postToEdit.title : '' , content: postToEdit ? postToEdit.body :""}} 
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true)
                if (update) {
                    updatePost(values, postToEdit)
                    .then(res => {
                        resetForm()
                        alert(res)
                        history.push("/")
                    })
                    .catch(err => {
                        console.log(err)
                        alert('Something went wrong, please try again!')
                    })
                } else {
                    createPost(values)
                    .then(res => {
                        resetForm()
                        alert(res)
                    })
                    .catch(err => {
                        console.log(err)
                        alert('Something went wrong, please try again!')
                    })
                }
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
            <Form className='formPost' onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Title" 
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title} 
                        className={touched.title && errors.title ? "error" : null}
                        />
                    {touched.title && errors.title ? 
                        <Form.Text className="text-muted">{errors.title}</Form.Text>
                    : null}
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" 
                        rows={6} 
                        name="content"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.content} 
                        className={touched.content && errors.content ? "error" : null}
                        />
                    {touched.content && errors.content ? 
                        <Form.Text className="text-muted">{errors.content}</Form.Text>
                    : null}
                </Form.Group>

                <Button variant="secondary" type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
            </Form>
        )}
        </Formik>
    )
}

export default FormPost
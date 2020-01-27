import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import styles from './style.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toggle from '../HOC/toggle';
import RecordSchema from './recordSchema';
import { loaderOn, addRecord } from '../redux/actions';

const FormComponent = ({ loaderOn, addRecord }) => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      phone: '',
      gender: '',
      age: ''
    }}
    validationSchema={ RecordSchema }
    onSubmit={(values, { resetForm }) => {
      setTimeout(() => {
        loaderOn();
        addRecord(values);
        resetForm(); 
        toast.success('Added successfully!');
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <Form className={styles.container} onSubmit={handleSubmit}>
        <Field
          className={styles.input}
          type="name"
          name="firstName"
          placeholder="First name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          />
          <ErrorMessage name="firstName" component="div" style={{color: "#f00"}}/>
          <Field
          className={styles.input}
          type="name"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          />
        <ErrorMessage name="lastName" component="div" style={{color: "#f00"}}/>
        <Field
          className={styles.input}
          type="number"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          />
        <ErrorMessage name="phone" component="div" style={{color: "#f00"}}/>
        <Field
          as='select'
          type="text"
          name="gender"
          className={styles.select}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.gender}
          >
          <option value="None">None</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Field>
        <ErrorMessage name="gender" component="div" style={{color: "#f00"}}/>
        <Field
          className={styles.input}
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
        />
          <ErrorMessage name="age" component="div" style={{color: "#f00"}}/>
          <button type={"submit"} disabled={isSubmitting} className={styles.button}>
            Submit
        </button>
      </Form>
    )}
  </Formik>
);

FormComponent.propTypes = {
  loaderOn: PropTypes.func,
  addRecord: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  loaderOn: () => dispatch(loaderOn()),
  addRecord: record => dispatch(addRecord(record)),
});

export const RecordForm = connect(null, mapDispatchToProps)(FormComponent);
export const FormHOC = toggle(RecordForm);
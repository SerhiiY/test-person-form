import * as yup from 'yup';

const RecordSchema = yup.object().shape({
  firstName: yup.string()
    .required('Name is required')
    .min(2, 'Name is too short!')
    .max(20, 'Name is too long!'),
  lastName: yup.string()
    .min(2, 'Name is too short!')
    .max(20, 'Name is too long!'),
  phone: yup.string()
    .required('Phone is required!')
    .min(6, 'Phone is too short!')
    .max(20, 'Phone is too long!'),
  gender: yup.string(),
  age: yup.number()
    .required('Age is required')
    .positive()
    .integer()
    .min(1, 'Age is too small!')
    .max(200, 'Age is too old!'),
});

export default RecordSchema;
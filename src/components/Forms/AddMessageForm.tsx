import { Field, Form, Formik } from 'formik';
import { required, MaxLenghtCreator } from '../../utils/validators/validators';
import TextArea, { createField } from '../common/FormsControl/FormsControl';
import { AddMessageFormValues } from '../../types/Types';

const MaxLength100 = MaxLenghtCreator(100)

interface FormTypes {
  onSubmit: (values: AddMessageFormValues) => void
}

const AddMessageForm = (props: FormTypes) => {
  const validate = (value: string) => required(value) || MaxLength100(value)
    return (
    <Formik initialValues={{ newMessageBody: "" }} onSubmit={props.onSubmit}>
    <Form className='PostsAddHome' >
     {createField('', "newMessageBody", undefined, TextArea, "textarea")}
    <div className='AddButtonPost'>
    <button type="submit" className='GetPostButton'>Send Message</button>
    </div>
  </Form>
  </Formik>
)}

export default AddMessageForm; 
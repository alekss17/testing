import { Field, Form, Formik } from 'formik';
import { required, MaxLenghtCreator } from '../../utils/validators/validators';
import TextArea from '../common/FormsControl/FormsControl';

const MaxLength10 = MaxLenghtCreator(10)

const AddMessageForm = (props) => {
  const validate = value => required(value) || MaxLength10(value)
    return (
    <Formik initialValues={{ newMessageBody: "" }} onSubmit={props.onSubmit}>
    <Form className='PostsAddHome' >
    <div>
    <Field className='TextAreaAddPost'
     validate={validate} name={"newMessageBody"} component={TextArea} astag={"textarea"} />
    </div>
    <div className='AddButtonPost'>
    <button type="submit" className='GetPostButton'>Send Message</button>
    </div>
  </Form>
  </Formik>
)}

export default AddMessageForm; 
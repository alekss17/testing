import { Field, Form, Formik } from 'formik';
import { required, MaxLenghtCreator } from '../../utils/validators/validators';
import TextArea from '../common/FormsControl/FormsControl';

const MaxLength100 = MaxLenghtCreator(100)

const AddMessageForm = (props) => {
  const validate = value => required(value) || MaxLength100(value)
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
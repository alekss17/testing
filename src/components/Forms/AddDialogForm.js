import { Field, Form, Formik } from 'formik';
import { required, MaxLenghtCreator } from '../../utils/validators/validators';
import TextArea from '../common/FormsControl/FormsControl';

const MaxLength50 = MaxLenghtCreator(50)

const AddDialogForm = (props) => {
    const validate = value => required(value) || MaxLength50(value)
    return (
        <>
        <Formik initialValues={{ onDialogBody: "" }} onSubmit={props.onSubmit}>
            <Form className="dopRef">
                <Field className="TextAreaDialogs" name={"onDialogBody"}
                 validate={validate}
                  component={TextArea} placeholder="type message"
                  asTag={"textarea"} />
                <button className="GetPostButton" type={"sumbit"} >добавить</button>
            </Form>
        </Formik>
        </>
    )
}


export default AddDialogForm;
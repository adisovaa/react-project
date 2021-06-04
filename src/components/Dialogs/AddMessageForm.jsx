import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControl/FormsControls";

const maxLength15 = maxLengthCreator(15)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'}
                       type={'textarea'}
                       component={Textarea}
                       placeholder= {'Entire your message'}
                       validate={[required, maxLength15]}
                />
            </div>
            <div>
                <button type={'submit'} >button</button>
            </div>
        </form>
    )
}

export default reduxForm({form:'dialogsAddMessageForm'})(AddMessageForm)
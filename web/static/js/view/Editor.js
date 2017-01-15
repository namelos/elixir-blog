import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Editor as Draft , EditorState } from 'draft-js'

export const Editor = () => <form>
  <Field name="content" component={TextField} />
  <Field name="foo" component={Foo} />
</form>

const Foo = field => <div>
  <input type="text"/>
</div>

const TextField = field => <div>
  <Draft editorState={field.value || EditorState.createEmpty()}
         onChange={field.onChange}/>
</div>

export const EditorApp = reduxForm({
  form: 'Editor',
  initialValues: {
    content: EditorState.createEmpty()
  }
})(Editor)
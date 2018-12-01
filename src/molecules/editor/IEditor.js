import React from 'react'
import ReactDOM from 'react-dom'
import { dc } from '../../core/dress-code'
import { InputGroup, VerticalButtons } from '../input-group'
import { Button } from '../../atoms/btn'
import { Icon } from '../../atoms/icons'
import compose from 'recompact/compose'
import lifecycle from 'recompact/lifecycle'
import withState from 'recompact/withState'
import withHandlers from 'recompact/withHandlers'

//
// Note: design is driven by
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component
// 
// A fully controlled component pattern is used.

const focus = props => {
  props.setEditing(true)
  props.setBuffer(props.defaultValue)
  props.onEdit ? props.onEdit(props.defaultValue) : null
}

const blur = props => {
  props.setEditing(false)
  if (props.buffer === props.defaultValue) {
    props.setBuffer('')
    props.onCancel ? props.onCancel(props.defaultValue) : null
  } else {
    props.setBuffer('')
    props.onCommit ? props.onCommit(props.buffer) : null
  }
}

const cancel = props => {
  props.setEditing(false)
  props.setBuffer('')
  props.onCancel ? props.onCancel(props.defaultValue) : null
} 

const edit_props = ({input, editing, buffer, focus, setInput, setEditing, setValue, setBuffer, onEdit, onCommit, onCancel, ...props}) => (props)

const IEditor = ({Static, Dynamic, commitWithShift, commitWithButtons, commitWithVerticalButtons, ...props}) => (
  <div className="dc-inline-editor">
    {!props.editing &&
      <InputGroup>
        <Static onClick={() => focus(props)} placeholder={props.placeholder} { ...edit_props(props) }>
          {props.defaultValue}
        </Static>
      </InputGroup>
    }
    {props.editing &&
      <InputGroup>
        <Dynamic 
          in-group
          ref={props.setInput}
          onChange={(e) => props.setBuffer(e.target.value)}
          onBlur={() => (!commitWithButtons && !commitWithVerticalButtons) && blur(props)}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && !commitWithShift) {
              blur(props)
            }

            if (e.keyCode === 13 && commitWithShift && e.shiftKey) {
              blur(props)
            }

            if (e.keyCode === 27) {
              cancel(props)
            }
          }}
          { ...edit_props(props) }
        />
        {commitWithButtons &&
          <React.Fragment>
            <Button primary in-group onClick={() => blur(props)}><Icon id="success"/></Button>
            <Button destroy in-group onClick={() => cancel(props)}><Icon id="undo"/></Button>
          </React.Fragment>
        }
        {commitWithVerticalButtons &&
          <VerticalButtons>
            <Button primary in-group onClick={() => blur(props)}><Icon id="success"/></Button>
            <Button destroy in-group onClick={() => cancel(props)}><Icon id="undo"/></Button>
          </VerticalButtons>
        }
      </InputGroup>
    }
  </div>
)

const IEditorWithFocus = lifecycle({
  componentDidUpdate: props => {
    props.focus()
  }
})(IEditor)

const IEditorWithState = compose( 
  withState('input', 'setInput', null),
  withState('editing', 'setEditing', false),
  withState('buffer', 'setBuffer', ''),
  withHandlers({
    focus: ({ input }) => () => input ? ReactDOM.findDOMNode(input).focus() : null
  }),
)(IEditorWithFocus)

export default IEditorWithState


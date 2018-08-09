import React from 'react'
import IEditor from './IEditor'
import { TextArea } from '../../atoms/input'
import toClass from 'recompact/toClass'

const Static = props => (
  <p {...props}>{props.children}</p>
)

const Dynamic = toClass(TextArea)

const IETextArea = props => (
  <IEditor 
    Static={Static}
    Dynamic={Dynamic}
    commitWithShift={true}
    {...props}
  />
) 

export default IETextArea
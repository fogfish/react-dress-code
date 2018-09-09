import React from 'react'
import IEditor from './IEditor'
import { TextArea, StaticText } from '../../atoms/input'
import toClass from 'recompact/toClass'

const Dynamic = toClass(TextArea)

const IETextArea = props => (
  <IEditor 
    Static={StaticText}
    Dynamic={Dynamic}
    commitWithShift={true}
    {...props}
  />
) 

export default IETextArea
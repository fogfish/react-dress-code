import React from 'react'
import IEditor from './IEditor'
import { Input } from '../../atoms/input'
import toClass from 'recompact/toClass'

const Static = props => (
  <p {...props}>{props.children}</p>
)

const Dynamic = toClass(Input)

const IEText = props => (
  <IEditor 
    Static={Static}
    Dynamic={Dynamic}
    commitWithShift={false}
    {...props}
  />
) 

export default IEText

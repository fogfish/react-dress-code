import React from 'react'
import IEditor from './IEditor'
import { Input, Static } from '../../atoms/input'
import toClass from 'recompact/toClass'

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

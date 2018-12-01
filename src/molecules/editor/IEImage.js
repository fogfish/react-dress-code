import React from 'react'
import IEditor from './IEditor'
import { Input } from '../../atoms/input'
import toClass from 'recompact/toClass'

const Static = props => (
  <img src={props.children || props.placeholder} onClick={props.onClick} />
)

const Dynamic = toClass(Input)

const IEImage = props => (
  <IEditor 
    Static={Static}
    Dynamic={Dynamic}
    commitWithShift={false}
    {...props}
  />
) 

export default IEImage

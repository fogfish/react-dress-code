//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import withState from 'recompact/withState'

import { IEText, IETextArea, IEImage, Label, Input } from '../../src/index'


const IETextStory = 
  withState('text', 'setText', props => props.text)(
    props => 
      <IEText
        defaultValue={props.text} 
        onEdit={action("edit")}
        onCommit={text => {props.setText(text); action("commit")(text)}}
        onCancel={action("cancel")}
        { ...props }
      />
  )

const IETextAreaStory =
  withState('text', 'setText', props => props.text)(
    props => 
      <IETextArea
        cols="30" rows="3"
        defaultValue={props.text}
        onEdit={action("edit")}
        onCommit={text => {props.setText(text); action("commit")(text)}}
        onCancel={action("cancel")}
        { ...props }
      />
  )  

const IEImageStory = 
  withState('text', 'setText', props => props.text)(
    props =>
      <IEImage 
        defaultValue={props.text} 
        onEdit={action("edit")}
        onCommit={text => {props.setText(text); action("commit")(text)}}
        onCancel={action("cancel")}
        { ...props }
      />
  )

storiesOf('Molecules > Editor', module)
  .add('Inline text editor',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Enter to save, Esc to cancel">Text input</Label>
          <div className="dc-input-stack">
            <IETextStory text="Give An Example" />
          </div>
          <div className="dc-input-stack">
            <IETextStory text="Give An Example" is-error />
            <span class="dc--text-error">Oops, Some error here, fix it!</span>
          </div>
        </div>
      )
    )
  )

  .add('Inline text editor, use placeholder as default value',
    withInfo('')(
      () => (
        <div>
          <div className="dc-input-stack">
            <Label sub="click on text to edit, Enter to save, Esc to cancel">Text input</Label>
            <IETextStory placeholder="e.g. give an example" />
          </div>
        </div>
      )
    )
  )

  .add('Inline text editor with buttons',
    withInfo('')(
      () => (
        <div>
          <div className="dc-input-stack">
            <Label>Text input with Buttons</Label>
            <IETextStory commitWithButtons text="Give An Example" />
          </div>
          <div className="dc-input-stack">
            <Label sub="click on text to edit, Enter to save, Esc to cancel">Text input</Label>
            <IETextStory commitWithButtons text="Give An Example" is-error />
            <span class="dc--text-error">Oops, Some error here, fix it!</span>
          </div>

        </div>
      )
    )
  )

  .add('Inline textarea editor',
    withInfo('')(
      () => (
        <div>
          <div className="dc-input-stack">
            <Label sub="click on text to edit, Shift + Enter to save, Esc to cancel, use `white-space: pre-wrap;` to render multi-line text.">Text area</Label>
            <IETextAreaStory text="Give An Example" />
          </div>
          <div className="dc-input-stack">
            <Label sub="click on text to edit, Shift + Enter to save, Esc to cancel, use `white-space: pre-wrap;` to render multi-line text.">Text area</Label>
            <IETextAreaStory text="Give An Example" is-error />
            <span class="dc--text-error">Oops, Some error here, fix it!</span>
          </div>
        </div>
      )
    )
  )

  .add('Inline textarea editor with buttons',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Shift + Enter to save, Esc to cancel, use `white-space: pre-wrap;` to render multi-line text.">Text area</Label>
          <IETextAreaStory commitWithVerticalButtons text="Give An Example" />
        </div>
      )
    )
  )

  .add('Inline textarea editor, use placeholder as default value',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Shift + Enter to save, Esc to cancel, use `white-space: pre-wrap;` to render multi-line text.">Text area</Label>
          <IETextAreaStory placeholder="Give An Example" />
        </div>
      )
    )
  )

  .add('Inline image editor',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Enter to save, Esc to cancel">Text input</Label>
          <IEImageStory text="http://via.placeholder.com/350x150" />
        </div>
      )
    )
  )

  .add('Inline image editor, use placeholder as default value',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Enter to save, Esc to cancel">Text input</Label>
          <IEImageStory placeholder="http://via.placeholder.com/350x150" />
        </div>
      )
    )
  )

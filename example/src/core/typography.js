import React from 'react'

import { H1, H2, H3, H4, Text, Divider, Card } from 'react-dress-code'

export const Typography = () => (
   <Card>
      <H1>Typography</H1>

      <H2>Font sizes</H2>
      <Divider />
      <H1>Headline H1 is 34px and the line-height is 48px</H1>
      <H2>Headline H2 is 27px and the line-height is 36px</H2>
      <H3>Headline H3 is 22px and the line-height is 36px</H3>
      <H4>Headline H4 is 18px and the line-height is 24px</H4>
      <Text>Size for normal text is 14px and the line-height is 24px</Text>
      <Text small>Size for small copy is 11px and the line-height is 18px</Text>
   </Card>
)


import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Table, THead, TBody, TR, TH, TD, Status } from '../../src/index'

storiesOf('Atoms > Table', module)
  .add('Basic Table',
    withInfo('')(
      () => (
        <div>
          <Table responsive>
            <THead>
              <TR>
                <TH>First Name</TH>
                <TH>Last Name</TH>
                <TH>Email</TH>
                <TH>Status</TH>
              </TR>
            </THead>
            <TBody>
              <TR interactive>
                <TD>Eileen</TD>
                <TD>Holland</TD>
                <TD>eileen.holland42@example.com</TD>
                <TD><Status active>Active</Status></TD>
              </TR>
              <TR interactive>
                <TD>Duane</TD>
                <TD>Holmes</TD>
                <TD>duane.holmes21@example.com</TD>
                <TD><Status active>Active</Status></TD>
              </TR>
              <TR interactive>
                <TD>Kitty</TD>
                <TD>Murray</TD>
                <TD>kitty.murray88@example.com</TD>
                <TD><Status new>New</Status></TD>
              </TR>
              <TR interactive>
                <TD>Austin</TD>
                <TD>Carpenter</TD>
                <TD>austin.carpenter87@example.com</TD>
                <TD><Status new>New</Status></TD>
              </TR>
              <TR interactive>
                <TD>Toni</TD>
                <TD>Nichols</TD>
                <TD>toni.nichols83@example.com</TD>
                <TD><Status error>Error</Status></TD>
              </TR>
            </TBody>
          </Table> 
        </div>
      )
    )
  )

  .add('Spacing with Table',
    withInfo('')(
      () => (
        <div>
          <Table responsive>
            <THead>
              <TR>
                <TH>First Name</TH>
                <TH>Last Name</TH>
                <TH>Email</TH>
                <TH>Status</TH>
              </TR>
            </THead>

            <TBody>
              <TR tight>
                <TD>Eileen</TD>
                <TD>Holland</TD>
                <TD>eileen.holland42@example.com</TD>
                <TD><Status active>Active</Status></TD>
              </TR>
              <TR>
                <TD>Kitty</TD>
                <TD>Murray</TD>
                <TD>kitty.murray88@example.com</TD>
                <TD><Status active>Active</Status></TD>
              </TR>
              <TR comfortable>
                <TD>Duane</TD>
                <TD>Holmes</TD>
                <TD>duane.holmes21@example.com</TD>
                <TD><Status active>Active</Status></TD>
              </TR>
              <TR spacious>
                <TD>Austin</TD>
                <TD>Carpenter</TD>
                <TD>austin.carpenter87@example.com</TD>
                <TD><Status new>New</Status></TD>
              </TR>
            </TBody>
          </Table>
        </div>
      )
    )
  )

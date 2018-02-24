//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { H1, H2, Card, Divider, Table, THead, TBody, TR, TH, TD } from 'react-dress-code'

const TableSetup = () => (
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
        <TD>Active</TD>
      </TR>
      <TR interactive>
        <TD>Duane</TD>
        <TD>Holmes</TD>
        <TD>duane.holmes21@example.com</TD>
        <TD>Active</TD>
      </TR>
      <TR interactive>
        <TD>Kitty</TD>
        <TD>Murray</TD>
        <TD>kitty.murray88@example.com</TD>
        <TD>New</TD>
      </TR>
      <TR interactive>
        <TD>Austin</TD>
        <TD>Carpenter</TD>
        <TD>austin.carpenter87@example.com</TD>
        <TD>New</TD>
      </TR>
      <TR interactive>
        <TD>Toni</TD>
        <TD>Nichols</TD>
        <TD>toni.nichols83@example.com</TD>
        <TD>Error</TD>
      </TR>
    </TBody>
  </Table>
)

const TableSpacing = () => (
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
        <TD>Active</TD>
      </TR>
      <TR>
        <TD>Kitty</TD>
        <TD>Murray</TD>
        <TD>kitty.murray88@example.com</TD>
        <TD>New</TD>
      </TR>
      <TR comfortable>
        <TD>Duane</TD>
        <TD>Holmes</TD>
        <TD>duane.holmes21@example.com</TD>
        <TD>Active</TD>
      </TR>
      <TR spacious>
        <TD>Austin</TD>
        <TD>Carpenter</TD>
        <TD>austin.carpenter87@example.com</TD>
        <TD>New</TD>
      </TR>
    </TBody>
  </Table>
)

export const Tables = () => (
   <Card>
    <H1>Tables</H1>

   <H2>Table Setup</H2>
   <Divider />
   <TableSetup />

   <H2>Spacing modifiers</H2>
   <Divider />
   <TableSpacing />

   </Card>
)
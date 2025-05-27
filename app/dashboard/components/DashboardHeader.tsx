'use client';
import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction
} from '@carbon/react';
import { UserAvatarFilledAlt } from "@carbon/icons-react";
import { UserAvatar } from "@carbon/icons-react";


const HeaderNav = () => (
  <Header aria-label="Loan DNA Dashboard">
    <HeaderName href="/" prefix="">
      <img src="/loan_dna.png" alt="Logo" style={{ height: 28, marginRight: 12 }} />
    </HeaderName>
    <HeaderNavigation aria-label="Dashboard Navigation">
      <HeaderMenuItem href="#">Dashboard</HeaderMenuItem>
      <HeaderMenuItem href="#">IVal AVM</HeaderMenuItem>
      <HeaderMenuItem href="#">Reports</HeaderMenuItem>
      <HeaderMenuItem href="#">Batch Management</HeaderMenuItem>
    </HeaderNavigation>

    <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="User">
          <UserAvatar />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
  </Header>
);

export default HeaderNav;

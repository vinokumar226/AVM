'use client';
import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  OverflowMenu,
  OverflowMenuItem
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
          <OverflowMenu
            className="user-avatar-icon"
            // renderIcon={UserAvatar}
            renderIcon={() => <div className="avatar-letter">{"Vinoth".charAt(0)}</div>}
            direction="bottom"
            flipped
            menuOptionsClass="user-dropdown-menu"
            iconDescription="Open user menu"
            aria-label="User menu"
          >
            <OverflowMenuItem itemText="Signed in as Vinoth" disabled />
            <OverflowMenuItem itemText="Notifications" />
            <OverflowMenuItem itemText="Settings" />
            <OverflowMenuItem itemText="Sign out" />
          </OverflowMenu>
      </HeaderGlobalBar>
  </Header>
);

export default HeaderNav;

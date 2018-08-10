import {
  Alignment,
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import * as React from 'react'
import { NavLink } from 'react-router-dom'

import { Role } from '../reducers/states'
import Dropdown from './dropdown'

const LUMINUS_LINK = 'https://luminus.nus.edu.sg/modules/8722e9a5-abc5-4160-820d-bf69d8a63c6f'

const PIAZZA_LINK = 'https://piazza.com/nus.edu.sg/fall2018/cs1101s'

export interface INavigationBarProps {
  handleLogOut: () => void
  role?: Role
  title: string
  name?: string
}

const NavigationBar: React.SFC<INavigationBarProps> = props => (
  <Navbar className="NavigationBar primary-navbar pt-dark">
    <NavbarGroup align={Alignment.LEFT}>
      <NavLink
        activeClassName="pt-active"
        className="NavigationBar__link pt-button pt-minimal"
        to="/academy"
      >
        <Icon icon={IconNames.SYMBOL_DIAMOND} />
        <NavbarHeading className="hidden-xs">Source Academy</NavbarHeading>
      </NavLink>

      <NavLink
        activeClassName="pt-active"
        className="NavigationBar__link pt-button pt-minimal"
        target="_blank"
        to={LUMINUS_LINK}
      >
        <Icon icon={IconNames.BOOK} />
        <div className="navbar-button-text hidden-xs">News &amp; Material</div>
      </NavLink>

      <NavLink
        activeClassName="pt-active"
        className="NavigationBar__link pt-button pt-minimal"
        target="_blank"
        to={PIAZZA_LINK}
      >
        <Icon icon={IconNames.CHAT} />
        <div className="navbar-button-text hidden-xs">Forum</div>
      </NavLink>
    </NavbarGroup>

    <NavbarGroup align={Alignment.RIGHT}>
      <NavLink
        activeClassName="pt-active"
        className="NavigationBar__link pt-button pt-minimal"
        to="/playground"
      >
        <Icon icon={IconNames.CODE} />
        <div className="navbar-button-text hidden-xs">Playground</div>
      </NavLink>

      <div className="visible-xs">
        <NavbarDivider className="thin-divider" />
      </div>
      <div className="hidden-xs">
        <NavbarDivider className="default-divider" />
      </div>

      <Dropdown handleLogOut={props.handleLogOut} name={props.name} />
    </NavbarGroup>
  </Navbar>
)

export default NavigationBar

import { IAction } from "../interface";
import { LAYOUT_SIDEBAR_CLOSE } from './action'

export enum SideBarStatus {
  closed = 'closed',
  open = 'open',
}

export type ILayoutState = {
  sideBarStatus: SideBarStatus;
  activeRoute: string;
}

export type ICloseSideBar = () => IAction;
export type IOpenSideBar = () => IAction;
export type IChangeUrl = () => IAction;

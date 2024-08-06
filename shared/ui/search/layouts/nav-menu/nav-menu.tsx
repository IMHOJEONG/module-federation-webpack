'use client';
import type {
  NavMenuProps,
  InitialState,
  ContentUiProps,
  ItemRef,
} from '@/layouts/nav-menu/nav-menu-types';
import {
  NavMenuProvider,
  initialState,
} from '@/layouts/nav-menu/nav-menu-context';
import {
  NavMenuItem,
  NavMenuItemWrapper,
} from '@/layouts/nav-menu/nav-menu-item';
import { NavMenuTrigger } from '@/layouts/nav-menu/nav-menu-trigger';
import { NavMenuContent } from '@/layouts/nav-menu/nav-menu-content';
import { navMenuReducer } from '@/layouts/nav-menu/nav-menu-utils';
import { Reducer, useReducer, useRef } from 'react';

export default function NavMenu(props: NavMenuProps) {
  const {
    className,
    menuClassName,
    menuContentClassName,
    fullscreen = false,
    dir = 'ltr',
    children,
    floatingOffset = 10,
  } = props;
  const [state, set] = useReducer<Reducer<InitialState, any>>(
    navMenuReducer,
    initialState
  );
  const contentRefs = useRef<(HTMLElement | null)[]>([]);
  const contentUiPropsRefs = useRef<(ContentUiProps | null)[]>([]);
  const items = useRef<(ItemRef | null)[]>([]);

  function handleMouseEnter(index: number, el: HTMLElement) {
    set({
      hovering: index,
      popoverLeft: el.offsetLeft,
      hoveringWidth: el.offsetWidth,
      hoveringElRect: el.getBoundingClientRect(),
    });
    const contentElement = contentRefs.current[index];
    if (contentElement) {
      set({
        popoverHeight: contentElement.offsetHeight,
        popoverWidth: contentElement.offsetWidth,
      });
    }
  }

  const value = {
    ...state,
    set,
    contentRefs,
    contentUiPropsRefs,
    items,
    dir,
    handleMouseEnter,
  };

  return (
    <NavMenuProvider value={value}>
      <NavMenuItemWrapper
        fullscreen={fullscreen}
        className={className}
        menuClassName={menuClassName}
        menuContentClassName={menuContentClassName}
        floatingOffset={floatingOffset}
      >
        {children}
      </NavMenuItemWrapper>
    </NavMenuProvider>
  );
}

NavMenu.Item = NavMenuItem;
NavMenu.Trigger = NavMenuTrigger;
NavMenu.Content = NavMenuContent;
NavMenu.displayName = 'NavMenu';

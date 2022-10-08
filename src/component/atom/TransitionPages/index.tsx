// import styles from './style.module.scss';

import { ReactNode } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

const PageName = {
  page1: 'page1',
  page2: 'page2',
  page3: 'page3',
} as const;
export type PageNameType = typeof PageName[keyof typeof PageName];

export const TransitionAction = {
  up: 'up',
  down: 'down',
  none: 'none',
} as const;
export type TransitionActionType = typeof TransitionAction[keyof typeof TransitionAction];

type TransitionPagesProps = {
  currentPage: PageNameType | undefined;
  transitionAction: TransitionActionType;
  children: ReactNode;
};

const TransitionPages = (props: TransitionPagesProps) => {
  const { currentPage, transitionAction, children } = props;

  return (
    <div
      className={classNames('transition-group-wrapper', {
        'slide-up': transitionAction === TransitionAction.up,
        'slide-down': transitionAction === TransitionAction.down,
        // 'no-scrolling': entering,
      })}
    >
      <TransitionGroup component={null}>
        <CSSTransition classNames="slide" key={currentPage} timeout={1}>
          <div className="transition-page">{children}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default TransitionPages;

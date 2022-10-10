// import styles from './style.module.scss';

import { ReactNode, useState } from 'react';
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
  left: 'left',
  right: 'right',
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
  const [entering, setEntering] = useState(false);

  return (
    <div
      className={classNames('transition-group-wrapper', {
        'slide-up': transitionAction === TransitionAction.up,
        'slide-down': transitionAction === TransitionAction.down,
        'slide-left': transitionAction === TransitionAction.left,
        'slide-right': transitionAction === TransitionAction.right,
        'no-scrolling': entering,
      })}
    >
      <TransitionGroup component={null}>
        <CSSTransition
          classNames="slider"
          key={currentPage}
          timeout={1000}
          onEnter={() => setEntering(true)}
          onExited={() => setEntering(false)}
        >
          <div className="transition-page">{children}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default TransitionPages;

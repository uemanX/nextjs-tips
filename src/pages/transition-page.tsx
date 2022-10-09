import React, { ChangeEvent, useState } from 'react';
import { NextPage } from 'next';
import TransitionPages, {
  PageNameType,
  TransitionAction,
  TransitionActionType,
} from '../component/atom/TransitionPages';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  max-width: 700px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
  box-shadow: 1px 1px;
`;

const PageBase = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Page1 = styled(PageBase)`
  background-color: #cc7c73;
`;

const Page2 = styled(PageBase)`
  background-color: #7ee8a3;
`;

const Page3 = styled(PageBase)`
  background-color: #939fed;
`;

const FixedArea = styled.div`
  position: fixed;
  top: 10px;
  left: 5px;
`;

const SelectArea = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Group = styled.div<{ direction?: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${(props) => (props.direction === undefined ? 'row' : props.direction)};
  gap: 10px;
`;

const TransitionPage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<PageNameType>('page1');
  const [transitionAction, setTransitionAction] = useState<TransitionActionType>('none');

  const handleOnClickSelectPage = (page: PageNameType) => () => {
    setCurrentPage(page);
  };

  const handleOnChangeTransitionType = (transitionType: TransitionActionType) => () => {
    setTransitionAction(transitionType);
  };

  return (
    <Container>
      <TransitionPages currentPage={currentPage} transitionAction={transitionAction}>
        {currentPage === 'page1' && <Page1>Page1</Page1>}
        {currentPage === 'page2' && <Page2>Page2</Page2>}
        {currentPage === 'page3' && <Page3>Page3</Page3>}
      </TransitionPages>
      <FixedArea>
        <SelectArea>
          <h2>遷移タイプを選択</h2>
          <Group>
            <input
              type="radio"
              name="transition"
              id="none"
              value={TransitionAction.none}
              onChange={handleOnChangeTransitionType('none')}
            />
            <label htmlFor="none">通常</label>
          </Group>
          <Group>
            <input
              type="radio"
              name="transition"
              id="up"
              value={TransitionAction.up}
              onChange={handleOnChangeTransitionType('up')}
            />
            <label htmlFor="up">下から上に遷移</label>
          </Group>
          <Group>
            <input
              type="radio"
              name="transition"
              id="down"
              value={TransitionAction.down}
              onChange={handleOnChangeTransitionType('down')}
            />
            <label htmlFor="down">上から下に遷移</label>
          </Group>
        </SelectArea>
        <SelectArea>
          <h2>ページに遷移する</h2>
          <Group direction="column">
            <button onClick={handleOnClickSelectPage('page1')} disabled={currentPage === 'page1'}>
              ページ1に遷移する
            </button>
            <button onClick={handleOnClickSelectPage('page2')} disabled={currentPage === 'page2'}>
              ページ2に遷移する
            </button>
            <button onClick={handleOnClickSelectPage('page3')} disabled={currentPage === 'page3'}>
              ページ3に遷移する
            </button>
          </Group>
        </SelectArea>

        {/* <button>ページ１を表示</button> */}
      </FixedArea>
    </Container>
  );
};

export default TransitionPage;

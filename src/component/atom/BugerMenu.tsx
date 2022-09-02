import styled from "@emotion/styled";

const Wrapper = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 1200;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: opacity 500ms, visibility 500ms;
`;

type BurgerMenuProps = {
  open: boolean;
  onClose: () => void;
};

const BurgerMenu = ({ open, onClose }: BurgerMenuProps) => {
  return (
    <Wrapper open={open} onClick={onClose}>
      Burer
    </Wrapper>
  );
};

export default BurgerMenu;

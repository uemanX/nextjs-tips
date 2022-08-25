import styled from "@emotion/styled";

const duration = 500;

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};;
  transition: opacity ${duration}ms, visibility ${duration}ms;  
  
  & > span {
    width: 33px;
    height: 33px;
    border: 4px solid #ddd;
    border-top: 4px solid #fff;
    border-radius: 50%;
    animation: sp-anime 1s infinite linear;

    @keyframes sp-anime {
      100% { 
        transform: rotate(360deg); 
      }    
  }
`;

type LoaderProps = {
  open: boolean;
  onClick?: () => void;
};

const Loader = ({ open, onClick }: LoaderProps) => {
  return (
    <Overlay open={open} onClick={onClick}>
      <span></span>
    </Overlay>
  );
};

export default Loader;

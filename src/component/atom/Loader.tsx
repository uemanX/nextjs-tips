import styled from "@emotion/styled";

const LoaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);


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

const Loader = () => {
  return (
    <LoaderWrapper>
      <span></span>
    </LoaderWrapper>
  );
};

export default Loader;

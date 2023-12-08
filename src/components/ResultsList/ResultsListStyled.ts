import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BottomLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const Loader = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid gray;
  border-top: 4px solid green;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Wrapper = styled.section`
  margin: 5px;
  padding-top: 10px;
  height: 100%;
`;

const Text = styled.p`
  font-size: medium;
  font-weight: bold;
  padding-bottom: 10px;
  margin: 0;
`

export { Wrapper, Loader, LoaderContainer, BottomLoaderContainer, Text }

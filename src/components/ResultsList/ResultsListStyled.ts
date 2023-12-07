import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3; /* Light gray border */
  border-top: 4px solid #3498db; /* Blue border for the loading effect */
  border-radius: 50%;
  animation: ${spin} 1s linear infinite; /* Apply the spin animation */
`;

const Wrapper = styled.section`
  margin: 5px;
  padding-top: 10px;
`;

const CountText = styled.p`
  font-size: medium;
  font-weight: bold;
  padding-bottom: 10px;
  margin: 0;
`

export { Wrapper, Loader, CountText }

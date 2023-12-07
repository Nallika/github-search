import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
`;

const SearchInput = styled.input`
  font-size: 1.2em;
  border: 2px solid gray;
  padding: 5px;
  height: 50px;
  width: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-sizing: border-box;

  &:focus {
    outline-width: 0;
  }
`;

const SearchButton = styled.button`
  font-size: 1.2em;
  height: 50px;
  width: 80px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export { Wrapper, SearchInput, SearchButton }

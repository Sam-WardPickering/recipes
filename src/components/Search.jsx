import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

  const [input, setInput] = useState(''); 
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  };
    
  return (
      <FormStyle onSubmit={submitHandler}>
          <div>
            <FaSearch/>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
          </div>
      </FormStyle>
  );
}

const FormStyle = styled.form`
    margin: 0% 22% 0% 20%;
    
    
    
    

    div {
        width: 1000;
        position: relative;
        

        
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search
import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  box-sizing: border-box;
  background: #0f172a;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid #1e293b;
  margin-bottom: 32px;
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid #334155;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  background-color: #1e293b;
  color: #f8fafc;
  transition: all 0.2s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`

export const Button = styled.button`
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);

  &:hover {
    background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`
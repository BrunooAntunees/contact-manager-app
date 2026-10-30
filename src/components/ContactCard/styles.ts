import styled from 'styled-components'

export const Card = styled.div`
  background-color: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: #334155;
    transform: translateX(2px);
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #f8fafc;
  }

  p {
    font-size: 13px;
    color: #94a3b8;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`

type ButtonProps = {
  variant?: 'danger' | 'success'
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === 'danger'
      ? 'rgba(239, 68, 68, 0.15)'
      : props.variant === 'success'
      ? 'rgba(34, 197, 94, 0.15)'
      : 'rgba(148, 163, 184, 0.15)'};
  color: ${(props) =>
    props.variant === 'danger'
      ? '#f87171'
      : props.variant === 'success'
      ? '#4ade80'
      : '#cbd5e1'};
  border: 1px solid
    ${(props) =>
      props.variant === 'danger'
        ? 'rgba(239, 68, 68, 0.3)'
        : props.variant === 'success'
        ? 'rgba(34, 197, 94, 0.3)'
        : 'rgba(148, 163, 184, 0.3)'};
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.2);
    transform: translateY(-1px);
  }
`

export const EditInput = styled.input`
  background: #1e293b;
  border: 1px solid #475569;
  border-radius: 6px;
  padding: 6px 10px;
  color: #f8fafc;
  font-size: 13px;
  outline: none;
  margin-bottom: 4px;

  &:focus {
    border-color: #6366f1;
  }
`
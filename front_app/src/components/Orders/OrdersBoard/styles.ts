import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 16px;
  border:  1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  header{
    display: flex;
    align-items: center;
    gap:8px;

    padding: 8px;
    font-size: 14px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    width:100%;
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 8px;

    strong{
      font-weight: 500;
    };

    span{
      font-size: 14px;
      color: #666;
    };

    & + button{
      margin-top: 24px;
    };

  }
`;
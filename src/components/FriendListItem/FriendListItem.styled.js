import { styled } from 'styled-components';

export const Item = styled.li`
  width: 400px;
  height: 100px;
  background-color: #fffcfc;
  display: flex;
  padding: 7px;
  padding-left: 25px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: #000000;
  border-radius: 50%;
  margin-right: 30px;

  background-color: ${props => {
    return props.$status ? '#00e80c' : '#e10000';
  }};
`;

export const Avatar = styled.img`
  margin-right: 32px;
  width: 48px;
`;

export const Paragraph = styled.p``;
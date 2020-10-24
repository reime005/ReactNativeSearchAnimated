import { Animated as A } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(A.View)`
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

export const TextWrapper = styled(A.View)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 4px;
`;

export const Text = styled(A.Text)<{ title?: boolean }>`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ title }) => (title ? '500' : '400')};
  font-size: ${({ title }) => (title ? '14px' : '12px')};
`;

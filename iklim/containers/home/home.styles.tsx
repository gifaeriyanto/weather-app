import styled from '@emotion/styled';
import { Color } from '../../utilities';

export const Wrapper = styled.div({
  maxWidth: 320,
  width: '100%',
  margin: '50px auto',
  padding: '50px 20px',
  backgroundColor: '#fff',
  borderRadius: 35,
  border: '8px solid #4455bd',
  boxShadow: '0 30px 30px rgba(0, 0, 0, 0.1)',
  h1: {
    marginTop: 0,
  },
});

export const Table = styled.table({
  padding: '0 10px',
  width: '100%',
  textAlign: 'left',
  th: {
    borderBottom: `1px solid ${Color.border}`,
    paddingBottom: 10,
  },
  td: {
    paddingTop: 5,
    paddingBottom: 5,
    img: {
      width: 50,
    },
  },
});

export const Icon = styled.img({
  width: 50,
});

export const Info = styled.div({
  marginTop: 150,
  marginBottom: 150,
  textAlign: 'center',
});

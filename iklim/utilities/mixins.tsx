import styled from '@emotion/styled';

export const Ellipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface EllipsisMultiline {
  line: number;
}

export const EllipsisMultiline = styled.div<EllipsisMultiline>(
  ({ line }) => ({
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: line,
    WebkitBoxOrient: 'vertical',
  }),
);

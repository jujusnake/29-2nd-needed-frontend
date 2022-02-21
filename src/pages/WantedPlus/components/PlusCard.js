import React from 'react';
import styled from 'styled-components';

function PlusCard({ contents }) {
  const { url, author, title, desc } = contents;
  return (
    <PlusCardWrap>
      <CardImgWrap>
        <CardImg alt="wanted+ contents" src={url} />
      </CardImgWrap>
      <CardAuthor>{author}</CardAuthor>
      <CardTitle>{title}결</CardTitle>
      <CardDesc>{desc}</CardDesc>
    </PlusCardWrap>
  );
}
const PlusCardWrap = styled.div`
  width: 25%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const CardImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 4px;
`;

const CardImg = styled.img`
  object-position: left bottom;
  width: 100%;
  object-fit: cover;
`;

const Fonts = styled.div`
  color: ${({ theme }) => theme.fontBlack};
`;

const CardAuthor = styled(Fonts)`
  margin: 14px 0 0 0;
  padding: 5px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
`;

const CardTitle = styled(Fonts)`
  font-size: 16px;
  font-weight: 600;
`;

const CardDesc = styled.div`
  margin: 8px 0 0 0;
  font-size: 13px;
  color: #aaaaaa;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default PlusCard;

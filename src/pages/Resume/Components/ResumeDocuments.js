import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ResumeDocuments() {
  const click = () => {};
  return (
    <Box>
      <Container>
        <Header>
          <p>최근 문서</p>
          <Link to="/Resume">
            <span>
              원티드 이력서 소개
              <i className="fas fa-info-circle" />
            </span>
          </Link>
        </Header>

        <ContentsWrapper>
          <NewResume onClick={click}>
            <i className="fas fa-copy" />
            <div> 새 이력서 작성 </div>
          </NewResume>
          {/* <input type='file' onChange={(e) => {onFileUpload(e)} /> */}
          <UploadFiles>
            <i className="fas fa-file-upload" />
            <div>파일 업로드</div>
          </UploadFiles>
        </ContentsWrapper>
      </Container>
    </Box>
  );
}

export default ResumeDocuments;

const Box = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
`;

const Container = styled.div`
  margin: 80px auto;
  max-width: 1030px;
`;

const Header = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  padding: 10px 0px;
  p {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }
  span {
    color: #3366ff;
    font-size: 16px;
    font-weight: 400;
    i {
      margin-left: 8px;
    }
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const NewResume = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 190px;
  position: relative;
  border: 1px solid lightgray;
  background-color: white;
  cursor: pointer;
  padding: 10px 10px;
  margin: 20px 20px 0 0;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 26px;
    background-color: #3564f6;
    border-radius: 50%;
    width: 74px;
    height: 74px;
  }
  div {
    position: relative;
    font-size: 16px;
    color: #333333;
    margin-top: 20px;
    font-weight: 500;
  }
`;

const UploadFiles = styled(NewResume)`
  margin-right: 10px;
  i {
    background-color: #e1e2e3;
    color: #666666;
  }
`;

import React from 'react';
import styled from 'styled-components';

function Resume() {
  const click = () => {
    return console.log('hi');
  };
  return (
    <>
      <div>
        <HeadBox>
          <Head>이력서 양식, 그 이상</Head>
          <Body>
            채용 전문가들의 조언을 얻어, 이력서를 잘 쓸 수 있는 도구를
            만들었습니다.
            <p>
              서류 통과가 잘 되는 원티드 이력서를 쉽고 빠르게 작성해 보세요.
            </p>
          </Body>
          <ButtonBox>
            <Button onClick={click}>이력서 관리</Button>
            <Button1 onClick={click}>새 이력서 작성</Button1>
          </ButtonBox>
        </HeadBox>
      </div>
      <ImageBox>
        <img src="./images/office_pic.png" alt="business" />
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="officepeople"
        />
        <ResumeIntro>
          <h1>지원에 유리한</h1>
          <p>
            글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별 금지 정책에
            맞춰서 제작하였습니다.
          </p>
          <p>군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.</p>
        </ResumeIntro>
      </ImageBox>

      <section />
      <button onClick={click}>hi</button>
    </>
  );
}
const HeadBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  margin: auto 300px;
`;
const Head = styled.h1`
  font-size: 55px;
  padding-top: 260px;
  padding-bottom: 25px;
`;

const Body = styled.h3`
  font-size: 20px;
  text-align: center;
  line-height: 2.5;
`;

const ButtonBox = styled.div`
  padding-top: 30px;
`;

const Button = styled.button`
  width: 185px;
  height: 58px;
  color: #3366ff;
  background-color: #ffffff;
  border-radius: 50px;
  border-color: #3366ff;
  cursor: pointer;
`;

const Button1 = styled.button`
  width: 185px;
  height: 58px;
  color: #ffffff;
  border-radius: 50px;
  background-color: #3366ff;
  cursor: pointer;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;

const ResumeIntro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
// const TopImage = styled.image`
//   margin-top: -15%;
// `;

// const BottomImage = styled.image``;

export default Resume;

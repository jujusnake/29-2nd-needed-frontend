import React from 'react';
import styled from 'styled-components';

function Resume() {
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
          <div>
            <Button>이력서 관리</Button>
            <Button1>새 이력서 작성</Button1>
          </div>
        </HeadBox>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="business"
        />
      </div>

      <section>
        <div>
          <h1>지원에 유리한</h1>
          <p>
            글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별 금지 정책에
            맞춰서 제작하였습니다.
          </p>
          <p>군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.</p>
        </div>
      </section>
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
  font-size: 56px;
`;

const Body = styled.h3`
  font-size: 25px;
  background-color: green;
  text-align: center;
  line-height: 1.8;
`;

const Button = styled.button`
  width: 185px;
  height: 58px;
  color: #3366ff;
  background-color: #ffffff;
`;

const Button1 = styled.button`
  width: 185px;
  height: 58px;
  color: #ffffff;
  background-color: #3366ff;
`;

export default Resume;

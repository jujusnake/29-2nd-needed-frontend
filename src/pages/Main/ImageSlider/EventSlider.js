import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import THIRD_DATAS from './EVENT_DATAS';

function EventSlider() {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <Container>
      <StyleSlide {...settings}>
        {THIRD_DATAS.map(DATA => (
          <div key={DATA.id}>
            <Item>
              <Image src="https://picsum.photos/520/250" alt="sidejobs" />
              <SubWrap>
                <Sub>{DATA.sub}</Sub>
                <Title>{DATA.title}</Title>
              </SubWrap>
            </Item>
          </div>
        ))}
      </StyleSlide>
    </Container>
  );
}

export default EventSlider;

const Container = styled.div`
  width: 75vw;
  height: 500px;
  margin: 0 auto;
  padding: 20px 100px;
  margin: 60px auto;
`;

const StyleSlide = styled(Slider)`
  .slick-slider {
  }
  .slick-prev {
    position: absolute;
    top: -60px;
    left: -80px;
    background-color: #f8f8fa;
    width: 36px;
    height: 36px;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
  }
  .slick-next {
    position: absolute;
    top: -60px;
    right: -80px;
    background-color: #f8f8fa;
    width: 36px;
    height: 36px;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
  }
`;

const Item = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 400px;
  height: 270px;
`;
const Image = styled.image`
  background-color: red;
  width: 400px;
  height: 220px;
  /* width: 100%;
  object-fit: cover; */
`;

const SubWrap = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  line-height: 1.8;
  padding-top: 10px;
`;
const Sub = styled.div`
  width: 54px;
  height: 20px;
  background-color: black;
  color: white;
  font-size: 13px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-weight: 300;
`;

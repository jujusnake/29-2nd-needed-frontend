import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import VOD_DATAS from './VOD_DATAS';

function VodSlider() {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Container>
      <StyleSlide {...settings}>
        {VOD_DATAS.map(data => (
          <div key={data.id}>
            <Item className="test">
              <Image src={data.img} alt="jobs" />
              <Name>{data.name}</Name>
              <Title>{data.title}</Title>
              <Sub>{data.sub}</Sub>
            </Item>
          </div>
        ))}
      </StyleSlide>
    </Container>
  );
}

export default VodSlider;

const Container = styled.div`
  width: 75vw;
  height: 400px;
  margin: 60px auto;
  padding: 100px 100px;
`;
const StyleSlide = styled(Slider)`
  display: flex;
  justify-content: space-evenly;

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
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 180px;
  height: 260px;
  margin: 0 auto;
  line-height: 1.4;
`;

const Image = styled.img`
  height: 100px;
  width: 100%;
  object-fit: cover;
`;

const Name = styled.p`
  font-weight: 400;
  padding-top: 20px;
`;

const Title = styled.p`
  font-weight: 700;
`;

const Sub = styled.p`
  font-weight: 200;
  font-size: 14px;
`;

import React from 'react';
import styled from 'styled-components';
import BANNERS_DATA from '../BANNERS_DATA';

function BannerItem() {
  return (
    <Item>
      {BANNERS_DATA.map(BANNER => (
        <Banner key={BANNER.id}>
          <i class={BANNER.img} />
          <h3>{BANNER.title}</h3>
          <h4>{BANNER.content}</h4>
        </Banner>
      ))}
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  & h3 {
    font-size: 17px;
    padding-top: 10px;
  }
  & h4 {
    color: gray;
    font-size: 14px;
  }
`;

const Banner = styled.div`
  width: 300px;
  height: 172px;
  text-align: center;
  line-height: 1.5;
`;
export default BannerItem;

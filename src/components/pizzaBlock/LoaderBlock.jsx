import React from "react";
import ContentLoader from "react-content-loader";

const LoaderBlock = (props) => (
  <ContentLoader
    speed={2}
    width={315}
    height={460}
    viewBox='0 0 315 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <rect x='25' y='0' rx='4' ry='4' width='260' height='260' />
    <rect x='0' y='270' rx='4' ry='4' width='315' height='30' />
    <rect x='149' y='363' rx='0' ry='0' width='12' height='2' />
    <rect x='0' y='315' rx='4' ry='4' width='315' height='82' />
    <rect x='128' y='409' rx='20' ry='20' width='130' height='39' />
    <rect x='0' y='420' rx='0' ry='0' width='88' height='30' />
  </ContentLoader>
);

export default LoaderBlock;

import React from 'react';
import {
  ArticleWrapper,
  NewsSectionHeader,
  Wrapper,
  TitleWrapper,
  ContentWrapper,
} from 'components/templates/NewsSection/NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech mews',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school',
    category: 'Tech mews',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school2',
    category: 'Tech mews',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school3',
    category: 'Tech mews',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school4',
    category: 'Tech mews',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article image" /> : null}
          </ContentWrapper>
          <Button isBig>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;

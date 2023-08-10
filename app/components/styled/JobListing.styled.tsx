// react
import { ReactNode } from 'react';

// next
import Image from 'next/image';

// framer-motion
import { motion } from 'framer-motion';

// redux toolkit
import { useDispatch } from '@/lib/redux/store';
import { filtersSlice } from '@/lib/redux/slices/filtersSlice/filtersSlice';
const addFilter = filtersSlice.actions.add;

import { styled } from 'styled-components';

export const MotionContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Container = styled(MotionContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  background-color: white;
  box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.colors.grayishCyan};
  border-radius: 0.5rem;
  width: 69.375rem;
  max-width: 90%;
  padding: 2.125rem 1.5rem 1.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.veryDarkGrayishCyan};
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: row;
    align-items: center;
    padding: 2rem 2.5rem;
  }
`;

export const FeaturedLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0.3125rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grayishCyanFeatured};
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 3rem;
  left: 7.5%;
  top: 0;
  transform: translateY(-50%);
  aspect-ratio: 1;
  flex-shrink: 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    position: relative;
    width: 5.625rem;
    left: unset;
    top: unset;
    transform: unset;
  }
`;

export const JobImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    margin-left: 1.5rem;
    gap: 0.75rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    margin-left: 0.5rem;
  }
`;

export const Badge = styled.div<{ type: 'new' | 'featured' }>`
  padding: 0.375rem 0.5rem 0.125rem 0.5rem;
  border-radius: 1.25rem;
  color: white;
  background-color: ${({ theme, type }) =>
    type === 'new'
      ? theme.colors.grayishCyanFeatured
      : theme.colors.veryDarkGrayishCyan};
  font-size: 0.9rem;
`;

export const Company = styled.p`
  color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  font-size: clamp(0.95rem, 0.5rem + 1vw, 1.15rem);
  font-weight: bold;
`;

export const Position = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.veryDarkGrayishCyan};
  transition: all 300ms ease-out;
  font-size: clamp(0.95rem, 0.6rem + 1vw, 1.375rem);

  &:hover {
    color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.darkGrayishCyan};
  font-size: clamp(0.95rem, 0.4rem + 1vw, 1.15rem);

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    justify-content: center;
    gap: 0.75;
  }
`;

export const Tag = styled.button`
  border-radius: 0.25rem;
  padding: 0.625rem 0.625rem 0.375rem 0.625rem;
  color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  background-color: ${({ theme }) => theme.colors.lightGrayishCyanFilter};
  font-weight: bold;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.875rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGrayishCyan};

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    justify-content: center;
    margin-top: unset;
    padding-top: unset;
    border-top: unset;
    margin-right: unset;
  }
`;

export const Tags = ({ tags }: { tags: string[] }) => {
  const dispatch = useDispatch();
  return (
    <TagsWrapper>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          onClick={(e) => {
            dispatch(addFilter((e.target as HTMLButtonElement).value));
          }}
          value={tag}
        >
          {tag}
        </Tag>
      ))}
    </TagsWrapper>
  );
};

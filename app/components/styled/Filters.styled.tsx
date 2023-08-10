// react
import { ReactNode } from 'react';

// next
import Image from 'next/image';

// framer-motion
import { motion } from 'framer-motion';

// redux toolkit
import { useDispatch } from '@/lib/redux/store';
import { filtersSlice } from '@/lib/redux/slices/filtersSlice/filtersSlice';
const removeFilter = filtersSlice.actions.remove;

// styled-components
import { styled } from 'styled-components';

// container for the whole filters section

export const MotionFiltersContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FiltersContainer = styled(MotionFiltersContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  width: 69.375rem;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2.25rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.colors.grayishCyan};

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    padding: 1.25rem 2.25rem;
  }
`;

// container for filter items inside the filters section

export const FilterItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.875rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    justify-content: center;
  }
`;

// individual filter container

export const FilterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding-left: 0.625rem;
  color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  background-color: ${({ theme }) => theme.colors.lightGrayishCyanFilter};
  font-weight: bold;
  border: none;
  font-size: 1rem;
  overflow: hidden;

  & > p {
    margin-bottom: -0.125rem;
  }
`;

export const FilterCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  height: 2rem;
  margin-left: 0.62rem;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.veryDarkGrayishCyan};
  }
`;

export const ClearButton = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrayishCyan};
  transition: all 300ms ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.grayishCyanFeatured};
    text-decoration: underline;
  }
`;

export const Filter = ({ filter }: { filter: string }) => {
  const dispatch = useDispatch();
  return (
    <FilterContainer>
      <p>{filter}</p>
      <FilterCloseButton onClick={() => dispatch(removeFilter(filter))}>
        <Image
          src="/images/icon-remove.svg"
          width="16"
          height="16"
          alt="close"
        />
      </FilterCloseButton>
    </FilterContainer>
  );
};

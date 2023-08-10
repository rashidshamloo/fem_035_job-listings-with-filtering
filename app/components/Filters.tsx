// redux toolkit
import { useDispatch } from '@/lib/redux/store';
import { filtersSlice } from '@/lib/redux/slices/filtersSlice/filtersSlice';
const clearFilters = filtersSlice.actions.clear;

// styled components
import {
  ClearButton,
  Filter,
  FilterItemContainer,
  FiltersContainer,
} from './styled/Filters.styled';

const Filters = ({ filters }: { filters: string[] }) => {
  const dispatch = useDispatch();

  return (
    <FiltersContainer>
      <FilterItemContainer>
        {filters.map((filter, index) => (
          <Filter key={index} filter={filter} />
        ))}
      </FilterItemContainer>
      <ClearButton onClick={() => dispatch(clearFilters())}>Clear</ClearButton>
    </FiltersContainer>
  );
};

export default Filters;

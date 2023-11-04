import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { companiesData } from '../redux/company/CompaniesSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('companiesSlice actions and reducers', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });

  it('should dispatch companiesData.fulfilled action with the correct payload', async () => {
    const initialState = {
      companies: [],
      companyDetails: [],
      isLoading: false,
      error: false,
    };

    const store = mockStore(initialState);

    await store.dispatch(companiesData());

    expect(store.getActions()).toMatchSnapshot();
  });

  it('should dispatch companiesData.rejected action with the correct error message', async () => {
    const initialState = {
      companies: [],
      companyDetails: [],
      isLoading: false,
      error: false,
    };

    const store = mockStore(initialState);

    await store.dispatch(companiesData());

    expect(store.getActions()).toMatchSnapshot();
  });
});

// import country from '../__mock__/Country';
import store from '../redux/store';
// import covidSlice, { fetchCountries, fetchTotalData } from '../redux/covidSlice';

describe('country redux state test', () => {
  it('Should initially set county to an empty array', () => {
    const state = store.getState().covid;
    expect(state.countries).toEqual([]);
  });
});

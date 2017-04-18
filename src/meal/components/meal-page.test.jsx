import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'mobx-react';
import MealPage from './meal-page';

describe('<MealPage />', () => {

    let store;

    beforeEach(() => {
        store = {};
    });

    it('should render correctly', () => {
        const dom = shallow(
            <Provider store={store}>
                <MealPage />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});

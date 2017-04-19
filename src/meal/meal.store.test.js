import {MealStore} from './meal.store';

describe('Meal Store', () => {

    let store,
        service;

    beforeEach(() => {
        service = () => {
            return {
                getMeals: () => {
                    return [];
                }
            };
        };
        store = new MealStore();
        store.setService(service());
    });


    it('should have empty mealList', () => {
        store.fetchMealList();
        expect(store.mealList.length).to.equal(0);
    });

    describe('when there are two meals', () => {
        beforeEach(() => {
            service = () => {
                return {
                    getMeals: () => {
                        return [ {}, {} ];
                    }
                };
            };
            store.setService(service());
        });

        it('it should contain 2 meals', () => {
            store.fetchMealList();
            expect(store.mealList.length).to.equal(2);
        });
    });
});

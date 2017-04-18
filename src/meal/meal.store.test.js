import {MealStore} from './meal.store';

describe('Meal Store', () => {

    let store;
        // service;

    beforeEach(() => {
        store = new MealStore();
    });


    it('should have empty mealList', () => {
        expect(store.mealList.length).to.equal(0);
    });

    // describe('when repos are requested', () => {
    //     beforeEach(() => {
    //         service = {
    //             getReposFor() {
    //                 return Promise.resolve([
    //                     {name: 'first'},
    //                     {name: 'second'}
    //                 ]);
    //             }
    //         };
    //
    //         store.setService(service);
    //     });
    //
    //     it('it should contain 2 repos', (done) => {
    //
    //         store.loadRepos('sapientglobalmarkets');
    //
    //         setTimeout(() => {
    //             expect(store.repos.length).to.equal(2);
    //             done();
    //         }, 0);
    //     });
    // });


});

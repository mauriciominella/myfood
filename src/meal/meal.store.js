import {computed, observable, action} from 'mobx';

class MealStore {
    @observable mealList = [
        { id: 1, name: 'Breakfast', time: '6:00h' },
        { id: 2, name: 'Morning Lunch', time: '8:00h' },
        { id: 3, name: 'Mid morning Lunch', time: '10:00h' },
    ];

    @observable selectedMeal;

    constructor() {
        this.setInitialSelectedMeal();
    }

    setInitialSelectedMeal() {
        this.selectedMeal = this.mealList[0];
    }

    @computed get name() {
        return this.selectedMeal.name;
    }

    @action
    changeMeal(meal) {
        this.selectedMeal = meal;
    }
}

let mealStore = new MealStore();

export default mealStore;

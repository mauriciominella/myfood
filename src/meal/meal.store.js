import {computed, observable, action} from 'mobx';
import {meal} from './meal.service';

export class MealStore {
    @observable mealList = [];

    service = null;

    @observable selectedMeal;

    constructor() {
        this.setService(meal);
    }

    initialise() {
        this.fetchMealList();
        this.setInitialSelectedMeal();
    }

    setService(service) {
        this.service = service;
    }

    fetchMealList() {
        this.mealList = this.service.getMeals();
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

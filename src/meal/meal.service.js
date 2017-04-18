class MealService {
    getMeals() {
        return [
            { id: 1, name: 'Breakfast', time: '6:00h' },
            { id: 2, name: 'Morning Lunch', time: '8:00h' },
            { id: 3, name: 'Mid morning Lunch', time: '10:00h' },
        ];
    }
}

export let meal = new MealService();

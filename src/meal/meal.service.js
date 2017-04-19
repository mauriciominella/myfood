class MealService {
    getMeals() {
        // return new Promise((resolve) => {
        //     const mealList = [
        //         { id: 1, name: 'Breakfast', time: '6:00h' },
        //         { id: 2, name: 'Morning Lunch', time: '8:00h' },
        //         { id: 3, name: 'Mid morning Lunch', time: '10:00h' },
        //     ];
        //     resolve(mealList);
        // });
        const mealList = [
            { id: 1, name: 'Breakfast', time: '6:00h' },
            { id: 2, name: 'Morning Lunch', time: '8:00h' },
            { id: 3, name: 'Mid morning Lunch', time: '10:00h' },
        ];
        return mealList;
    }
}

export let meal = new MealService();

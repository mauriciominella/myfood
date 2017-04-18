import React from 'react';
import {observer, inject} from 'mobx-react';

import styles from './meal-page.css';

@inject('mealStore')
@observer
export default class MealPage extends React.Component {

    static defaultProps = {
        dummy: '',
    };

    static propTypes = {
        dummy: React.PropTypes.string,
    };

    onChangeMeal(meal) {
        this.props.mealStore.changeMeal(meal);
    }

    renderMealList(mealList) {
        return (
            <ul>
            { mealList.map((meal) => <li key={ meal.id }>
                    <a onClick={this.onChangeMeal.bind(this, meal)}>
                        { meal.time }
                    </a>
                </li>) }
            </ul>
        );
    }

    render() {
        const { name, mealList } = this.props.mealStore;

        return (
            <div className={ styles.mealPage }>
                <div className={ styles.sidebar }>
                { this.renderMealList(mealList) }
                </div>
                <div className={ styles.content }>
                    <h2>{ name }</h2>
                </div>
            </div>
        );
    }

}

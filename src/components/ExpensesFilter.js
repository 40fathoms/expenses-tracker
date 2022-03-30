import React from 'react';

const ExpensesFilter = (props) => {

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter-control'>
                <label>Filter by year</label>
                <select onChange={props.handleChange} value={props.filteredYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
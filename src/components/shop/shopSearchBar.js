import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <div className='search-bar-grid'>
            <i className = 'fas fa-search search-bargrid__icon'></i>
            <input className={`${props.className} form-search-bar search-bar-grid_input`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
            </div>
    )
}

{/* <i class="fas fa-search"></i> */}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='query' className='shop-search-bar__form-search-bar' placeholder='search' component={FormSearchBar} />
            </form>
        )
    }    
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;
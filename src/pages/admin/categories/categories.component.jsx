import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import AddEditCategoryComponent from './add-edit-category/add-edit-category.component';
import CategoryList from './category-list/category-list.component';

import {selectCategoryList} from '../../../redux/category/category.selectors';
import {updateCategoryList} from '../../../redux/category/category.actions';
import {firestore} from '../../../firebase/firebase.utils';

class CategoriesPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        const collectionRef = firestore.collection('category');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const categories = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            this.props.updateCategoryList(categories);
        })
    };

    componentWillUnmount = () => {
        this.unsubscribeFromSnapshot();
    }
    
    render() {
        return (
            <div>
                <AddEditCategoryComponent />
                <CategoryList categories={this.props.categories} />
    
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCategoryList: categories => dispatch(updateCategoryList(categories))
})

const mapStateToProps = createStructuredSelector({
    categories: selectCategoryList
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
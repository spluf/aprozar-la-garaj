import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import AddEditUOMComponent from './add-edit-uom/add-edit-uom.component';
import UOMList from './uom-list/uom-list.component';

import {selectUOMList} from '../../../redux/uom/uom.selectors';
import {updateUOMList} from '../../../redux/uom/uom.actions';
import {firestore} from '../../../firebase/firebase.utils';

class UOMPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        const collectionRef = firestore.collection('uom');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const uoms = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            console.log('uoms', uoms);
            this.props.updateUOMList(uoms);
        })
    };

    componentWillUnmount = () => {
        this.unsubscribeFromSnapshot();
    }
    
    render() {

        return (
            <div>
                <AddEditUOMComponent />
                <UOMList uoms={this.props.uoms} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateUOMList: uoms => dispatch(updateUOMList(uoms))
})

const mapStateToProps = createStructuredSelector({
    uoms: selectUOMList
})

export default connect(mapStateToProps, mapDispatchToProps)(UOMPage);
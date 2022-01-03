import React, { Component } from "react";
import PageTitle from '../pageTitle';
import Purchases from "./purchases";
import PurchaseDetail from "./purchasesDetail";

class PurchaseHistory extends Component{
    render() {
        return (
            
    <div className='purchase-history'>
                <PageTitle className='purchase-history__page-title' title='Purchase History'/>
                <Purchases className='purchases-history__purchases' />
                <PurchaseDetail className='purchases-history__detail'/>
            </div>
        )
    }
}
export default PurchaseHistory;

'use strict';
/**
 * NewProductTx function business logic
 * @param {bloomen.webtv.NewProductTx} tx 
 * The purchase product transaction instance
 * @transaction
 */
 function NewProductTx(tx) {
    // if (tx.product.supplier.offeredProducts.length)
        tx.product.supplier.offeredProducts.push(tx.product);
    // else
        // tx.product.supplier.offeredProducts = [tx.product];

    return getAssetRegistry('bloomen.webtv.Product')
    .then(function (assetRegistry){
        return assetRegistry.update(tx.product);
    }) 
    .then(function () {
        return getParticipantRegistry('bloomen.webtv.User');
    })
    .then(function (participantRegistry){
        return participantRegistry.update(tx.product.supplier) ;
    })
    .then(function(){
        var event = getFactory().newEvent('bloomen.webtv','GenericEvent');
        event.ref = tx.$class+"#"+tx.transactionId;
        emit(event);
    });
}

/**
 * BuyProductTx function business logic
 * @param {bloomen.webtv.BuyProductTx} tx 
 * The purchase product transaction instance
 * @transaction
 */
 function BuyProductTx(tx) {
    if (tx.consumer.balance < tx.product.value){
        throw new Error("Insufficient funds");
    }    
    else{
        tx.consumer.balance -= tx.product.value ;
        tx.consumer.purchasedProducts.push(tx.product);
        tx.product.supplier.balance += tx.product.value;
        tx.product.timesSold += 1;
        return getAssetRegistry('bloomen.webtv.Product')
        .then(function (assetRegistry){
            return assetRegistry.update(tx.product);
        }) 
        .then(function () {
            return getParticipantRegistry('bloomen.webtv.User');
        })
        .then(function (participantRegistry){
            return participantRegistry.update(tx.product.supplier);
        })
        .then(function (){
            return getParticipantRegistry('bloomen.webtv.User');
        })
        .then(function(participantRegistry){
            return participantRegistry.update(tx.consumer);
        })
        .then(function(){
            var event = getFactory().newEvent('bloomen.webtv','GenericEvent');
            event.ref = tx.$class+"#"+tx.transactionId;
            emit(event);
        });
    }
}

/**
 * TransferTokensTx function business logic
 * @param {bloomen.webtv.TransferTokensTx} tx 
 * The TransferTokens transaction instance
 * @transaction
 */
 function TransferTokensTx(tx) {
    if (tx.payer.balance < tx.amount){
        throw new Error("You have insufficient funds to complete this transaction!");
    }
    else{
        tx.payer.balance -= tx.amount;
        tx.payee.balance += tx.amount;
        return getParticipantRegistry('bloomen.webtv.User')
        .then(function (participantRegistry){
            return participantRegistry.update(tx.payer);
        })
        .then(function () {
            return getParticipantRegistry('bloomen.webtv.User');
        })
        .then(function (participantRegistry){
            return participantRegistry.update(tx.payee);
        })
        .then(function () {
            var event = getFactory().newEvent('bloomen.webtv','GenericEvent');
            event.ref = tx.$class+"#"+tx.transactionId;
            emit(event);
        });
    }
}

/**
 * CreditTest function business logic
 * @param {bloomen.webtv.CreditTest} tx 
 * The CreditTest transaction instance
 * @transaction
 */
 function CreditTest(tx) {
    tx.requester.balance += 10;
    return getParticipantRegistry('bloomen.webtv.User')
    .then(function (participantRegistry){
        return participantRegistry.update(tx.requester);
    })
    .then(function () {
        var event = getFactory().newEvent('bloomen.webtv','GenericEvent');
        event.ref = tx.$class+"#"+tx.transactionId;
        emit(event);
    });
}

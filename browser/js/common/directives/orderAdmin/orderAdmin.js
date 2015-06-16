app.directive('manageorderform',function(OrderFactory){
		return {
		restrict: 'E',
	        scope: {
	        	orders: "=allorders",
	        	update: "&"

	        },
	        templateUrl: 'js/common/directives/orderAdmin/orderAdmin.html',
	        link: function (scope){
	        	scope.orderStatus = ['All','Created','Processing','Cancelled','Completed'];
	        	scope.editStatus = ['Created','Processing','Cancelled','Completed'];
	        	scope.selectedOrder = undefined
	        	scope.selectedStatus = undefined
	        	scope.success = undefined
	        	scope.error = undefined
	        	scope.orderFilter = "All"

	        	scope.changeFilter = function(){
	        		// scope.$digest()
	        	}

	        	scope.statusFilter = function (order){
	        		debugger
	        		if(scope.orderFilter === 'All')
	        			return order
	        		else if (order.status === scope.orderFilter)
	        			return order
	        		

	        	}

	        	scope.selectOrder = function (order){
	        		scope.selectedOrder = order
	        		scope.success = undefined
	        		scope.error = undefined
	        	}

	        	scope.changeStatus = function (status){
	        		if(!scope.selectedOrder){
	        			scope.error = "Please select and order to update."
	        			scope.success = undefined
	        		}
	        		console.log('status before', scope.selectedOrder.status)
	        		scope.selectedOrder.status = scope.selectedStatus
	        		console.log('status after', scope.selectedOrder.status)
	        	}

	        	scope.updateStatus = function (){
	        		if(!scope.selectedOrder){
	        			scope.success = undefined
	        			scope.error = "Please select an order to update."
	        			scope.selectedOrder = undefined
	        			return
	        		}

	        		OrderFactory.updateOrder(scope.selectedOrder)
	        		.then(function (order){
	        			if(order){
		        			scope.success = "Order successfully updated."
		        			scope.error = undefined
		        			// scope.
		        		}
	        		},function (err){
	        			scope.success = undefined
	        			scope.error = "There was an error updating the order."
	        		})
	        	}

	        }
	    }
})
describe('Bubble Sort', function(){
	it('Handles an empty array', function(){
		expect(bubbleSort( [] )).toEqual( [] );
	})

	it('Handles an unsorted array', function(){
		expect(bubbleSort( [2, 10, 5, 4, 9] )).toEqual( [2, 4, 5, 9, 10] );
	})

	it('Handles a sorted array', function(){
		expect(bubbleSort( [2, 4, 5, 9, 10] )).toEqual( [2, 4, 5, 9, 10] );
	})
})


/*
before(function(){
	spyOn(window, 'swap').and.callThrough();
})

it('swaping numbers', function(){
	bubbleSort.getToCenter();

})*/

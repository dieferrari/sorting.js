describe('Merge', function(){
	it('es capaz de mergear dos arreglos ordenados en un solo arreglo ordenado', function(){
		expect(merge([2, 4, 6, 8, 10], [1, 3, 5, 7, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	})
	it('es capaz de mergear dos arreglos ordenados en un solo arreglo ordenado', function(){
		expect(merge([2], [1, 3])).toEqual([1, 2, 3])
	})
	it('arreglo vacio', function(){
		expect(merge([ ], [ ])).toEqual([ ])
	})
});

describe('Split Array function', function(){
	it('es capaz de dividir el arreglo en dos partes', function(){
		expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]])
	})
});

describe('Funcion recursiva de Mergesort', function(){
	it('Implementa  merge y sort', function(){
		expect(mergeSort([2, 5, 1, 0, 3, 8, 7, 4, 6])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
	})
})
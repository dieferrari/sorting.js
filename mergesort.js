function merge(array, array2){
	var arrCompleto = [];
	while(array.length > 0 &&array2.length > 0){
		if(array[0] <= array2[0]){
			arrCompleto.push(Number(array.splice(0, 1)))
		} else {
			arrCompleto.push(Number(array2.splice(0, 1)))
		}	
	}

	if(array.length > 0){
		while(array.length > 0){
			arrCompleto.push(Number(array.splice(0, 1)))
		}
	} else {
		while(array2.length > 0){
			arrCompleto.push(Number(array2.splice(0, 1)))
		}
	}

	return arrCompleto;
}

function split(array){
	var arr1, arr2;
	arr2 = array.slice(Math.round(array.length/2))
	arr1 = array.slice(0,Math.round(array.length/2))
	return [arr1, arr2]
}

function mergeSort(array) {
	if(array.length == 1) return array
	var [arr1, arr2] = split(array);

	if(arr1.length >= 1){
		arr1 = mergeSort(arr1) 
	} 
	if (arr2.length >= 1){
		arr2 = mergeSort(arr2)
	}
	return merge(arr1, arr2)
	
}
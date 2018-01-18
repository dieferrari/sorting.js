function bubbleSort(array){
	if(array.length < 1){
		return array;
	} else {
		var i = 0, j =1, aux, bool = 1;
		while(bool){
			bool = 0;
			while(j < array.length){
				if(array[i] > array[j]){
					swap(array, i, j);
					bool++;
				}
			i++;
			j++;
			}
			j = 1;
			i = 0;
		}
	}
	return array;
}

function swap(array, i, j){
	var aux;
	aux = array[i];
	array[i] = array[j];
	array[j] = aux;
}
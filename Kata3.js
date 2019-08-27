let numberOfVowels = function (data) {
    let arr = data.split('');    
    let counter = 0;
    for (var i=0; i<arr.length; i++){
      if (arr[i]==='o'||arr[i]==='i'||arr[i]==='u'||arr[i]==='a'||arr[i]==='e'){
        counter++
      }
    } return counter;
        
    };

    console.log(numberOfVowels("orange"));
    console.log(numberOfVowels("lighthouse labs"));
    console.log(numberOfVowels("aeiou"));
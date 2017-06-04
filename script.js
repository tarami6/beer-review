var BeerReviewApp = function() {
    var beers = [];

    var addBeer = function(name, category, rate) {
        beers.push({ name: name, category: category, rate: rate });
        $(".beer-input").val("");
        $(".category-input").val("");
        $("select").val(0);
    }

    var updateBeers = function() {

        $(".beers-list > li").remove();

        for (var key in beers) {
            console.log(beers[key].select);
            $(".beers-list").append("<li> name: " + beers[key].name + " category: " + beers[key].category + " rate: " + beers[key].rate + "</li>");

        }
    }
        return {
            addBeer: addBeer,
            updateBeers: updateBeers
        }

    

};

$(document).ready(function() {
    // onclick on the button Post , inserting the value to array and then using the update func
    var app = BeerReviewApp();
    $('.post-beer').click(function() {
        var name = $('.beer-input').val();
        var category = $('.category-input').val();
        var rate = $('select').val();
        app.addBeer(name, category, rate);
        app.updateBeers();
    });
    // onclick sorting and reverse sorting of the array, print on the screen the data
    $(".post-sort").click(function() {
        //beers.sort()

        beers = quickSort(beers, 0, beers.length - 1);
        updateBeers();
    }, function() {
        beers.reverse();
        updateBeers();
    });




});
// decleration of the array that holds input from the form

// adding the input from form to array beers & and clean the value in the form

// loop through the beers array, inside the loop append  li to ul inside section beers


//quick sort

function quickSort(arr, left, right) {
    var i = left;
    var j = right;
    var tmp;
    pivotidx = (left + right) / 2;
    var pivot = parseInt(arr[pivotidx.toFixed()]);
    /* partition */
    while (i <= j) {
        while (parseInt(arr[i]) < pivot)
            i++;
        while (parseInt(arr[j]) > pivot)
            j--;
        if (i <= j) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
    }

    /* recursion */
    if (left < j)
        quickSort(arr, left, j);
    if (i < right)
        quickSort(arr, i, right);
    return arr;
}

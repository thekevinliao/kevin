var bigMacId = "https:api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=c53f7222&appKey=923bb4e578ff9ef8e3f8108e2b869567";
// c53f7222
// 923bb4e578ff9ef8e3f8108e2b869567

$.ajax({
    url:bigMacId,
}).done(function(data){
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h2>A " + name + " is " + cals + " calories.</h2>");
    
});
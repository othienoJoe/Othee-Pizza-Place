// The Business logic
var price , crust_price, topping_price ;
let total = 0;
function getPizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
// The User Interface unit
$(document).ready(function(){
  $("button#proceed").click(function(event){
   let pizzaName = $("#flavor option:selected").val();
   let pizzaSize = $("#size option:selected").val();
   let pizzaCrust = $("#crust option:selected").val();
   let pizzaTopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       pizzaTopping.push($(this).val());
   });
   console.log(pizzaTopping.join(", "));

   switch(pizzaSize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "medium":
       price = 850;
       console.log("The price is "+price);
     break;
     case "small":
       price = 650;
       console.log(price);
		 break;
		 case "regular":
			 price = 500
			 console.log(price);
     default:
       console.log("error"); 
   }
   switch(pizzaCrust){
      case "0":
        crust_price = 0;
      break;
      case "Pizza Bagels":
        crust_price = 250;
      break;
			case "Cheese-Stuffed":
        crust_price = 300;
      break;
			case "Sicilian":
        crust_price = 230;
      break;
			case "Margherita":
        crust_price = 300;
      break;
      case "Neapolitan":
        crust_price = 350;
      break;
      case "Thick":
        crust_price = 200;
      break;
			case "Flatbread":
        crust_price = 250;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = pizzaTopping.length*100;
    console.log("toppings value" + topping_value);

    if((pizzaSize == "0") && (pizzaCrust == "0")){
      console.log("nothing selected");
      $("#proceed").show();
      $("#information").show();
      $("#choice").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("#proceed").hide();
      $("#information").hide();
      $("#choice").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaName").html($("#flavor option:selected").val());
    $("#pizzaSize").html( $("#size option:selected").val());
    $("#pizzaCrust").html($("#crust option:selected").val());
    $("#pizzaTopping").html(pizzaTopping.join(", "));
    $("#total").html(total);

		$("button#addPizza").click(function(){
      let pizzaName = $("#flavor option:selected").val();
      let pizzaSize = $("#size option:selected").val();
      let pizzaCrust = $("#crust option:selected").val();
      let pizzaTopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          pizzaTopping.push($(this).val());
      });
      console.log(pizzaTopping.join(", "));
      switch(pizzaSize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 850;
           console.log("The price is "+price);
         break;
         case "small":
           price = 650;
           console.log(price);
				case "regular":
			    price = 500
			    console.log(price);
         default:
           console.log("error"); 
       }
       switch(pizzaCrust){
          case "0":
            crust_price = 0;
          break;
          case "Pizza Bagels":
            crust_price = 250;
					break;
					case "Cheese-Stuffed":
						crust_price = 300;
					break;
					case "Sicilian":
						crust_price = 230;
					break;
					case "Margherita":
						crust_price = 300;
					break;
					case "Neapolitan":
						crust_price = 350;
					break;
					case "Thick":
						crust_price = 200;
					break;
					case "Flatbread":
						crust_price = 250;
					break;
          default:
            console.log("No price"); 
        }
        let topping_value = pizzaTopping.length*100;
        console.log("toppings value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constructor function
      var newOrder = new getPizza(pizzaName, pizzaSize, pizzaCrust,pizzaTopping,total);

      $("#ordersMade").append('<tr><td id="pizzaName">'+newOrder.name +'</td><td id="pizzaSize">' + newOrder.size + '</td><td id="pizzaCrust">'+newOrder.crust + '</td><td id="pizzaTopping">'+newOrder.toppings+'</td><td id="total">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
		});
    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button#addPizza").hide();
      $("button#address").slideDown(1000);
      $("#addedPrice").slideDown(1000);
      console.log("Your total bill is sh. "+checkoutTotal);
      $("#pizzaTotal").append("Your bill is sh. "+checkoutTotal);
    });

    // home delivery button
    $("button#address").click(function(){
      $("#pizzaTable").hide();
      $("#choice h2").hide();
      $("#delivery").slideDown(1000);
      $("#addedPrice").hide();
      $("button#address").hide();
      $("#pizzaTotal").hide();
      let deliveryAmount = checkoutTotal+170;
      console.log("You will pay Ksh. "+deliveryAmount+" on delivery");
      $("#totalBill").append("Your bill plus delivery fee is: "+deliveryAmount);
    });

    // when one clicks place order button
    $("button#finalOrder").click(function(event){
      event.preventDefault();

      $("#pizzaTotal").hide();
      $("#delivery").hide();
      $("button#finalOrder").hide();
      let deliVeryAmount= checkoutTotal+150;
      console.log("Final Bill is: "+deliveryAmount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finalMessage").append(person+", We have received your order and it will be delivered to you at "+location+ ". Prepare Ksh. "+deliveryAmount);
        $("#totalBill").hide();
        $("#finalMessage").slideDown(1200);
      }
      else {
        alert("Please fill in your details for delivery!");
        $("#address").show();
        $("button#finalOrder").show();
      }
    });
   event.preventDefault();
  });
});
export default function About() {
    return (
      <div>
    <section id="overlay"/>
      <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg" alt="Davie's Burgers Logo" id="logo" width="500px" height="500px"/>
      <form/>
        <h1>Create a burger!</h1>
        <section class="protein">
          <label for="patty">What type of protein would you like?</label>
    			<input type="text" name="patty" id="patty"/>
        </section>
   
        <section class="patties">
          <label for="amount">How many patties would you like?</label>
          <input type="number" name="amount" id="amount"/>
        </section>
 
        <section class="cooked"/>
          <label for="doneness">How do you want your patty cooked</label>
          <br/>
          <span>Rare</span>
          <input type="range" name="doneness" id="doneness" value="3" min="1" max="5"/>
          <span>Well-Done</span>
  
 
        
        <section class="toppings"/>
          <span>What toppings would you like?</span>
          <br/>
            <input id="lettuce" name="topping" type="checkbox" value="lettuce"/>
					<label for="lettuce">Lettuce</label>

         
           <input id="tomato" name="topping" type="checkbox" value="tomato"/>
           <label for="tomato">Tomato</label>
          <input id="cheese" name="topping" type="checkbox" value="cheese"/>
          <label for="cheese">Cheese</label>
          <br/>
    
         <section class="spice"/>
          <label for="spiceLevel">How how would you like it</label>
          <br/>
          <span>Mild</span>
          <input type="range" name="spiceLevel" id="spiceLevel" value="3" min="1" max="5"/>
          <span>Hot</span>

      </div>
    );
  }
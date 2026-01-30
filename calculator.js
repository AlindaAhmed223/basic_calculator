        let screen = document.getElementById("screen");
        function display(num){
            screen.value += num;
        }   
        function dis(num){
            screen.value = screen.value/100;
        }
        function calculate(){
           if(screen.value === ""){
                screen.value = "Please enter a valid input";
           }
              else{
                try{
                    screen.value = eval(screen.value);
                }
                catch(err){
                    screen.value = "Error";
                }
              }
        }
        function clearScreen(){
            screen.value = "";
        }
        function del(){
            screen.value = screen.value.slice(0, -1);
        }
        

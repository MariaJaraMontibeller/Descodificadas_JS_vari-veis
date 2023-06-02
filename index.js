setTimeout(function(){
    alert('Página carregada com sucesso!');
},0); 

function add(){
    "use strict";
            var num1 = parseInt(document.getElementById("firstNumber").value);
            //You need to define your variable before use.
            var num2 = parseInt(document.getElementById("secondNumber").value);
            console.log(document.getElementById("firstNumber"));
            //this is a DOM object
            console.log(typeof document.getElementById("firstNumber").value);
            //this is a "string"
            console.log(typeof parseInt(document.getElementById("firstNumber").value));
            console.log(typeof +document.getElementById("firstNumber").value);
            //quickly  by use '+'
            document.getElementById("result").innerHTML =num1+num2;}


            function divide(){
                "use strict";
                        var num1 = parseInt(document.getElementById("firstNumber").value);
                        //You need to define your variable before use.
                        var num2 = parseInt(document.getElementById("secondNumber").value);
                        console.log(document.getElementById("firstNumber"));
                        //this is a DOM object
                        console.log(typeof document.getElementById("firstNumber").value);
                        //this is a "string"
                        console.log(typeof parseInt(document.getElementById("firstNumber").value));
                        console.log(typeof +document.getElementById("firstNumber").value);
                        //quickly  by use '+'
                        document.getElementById("result2").innerHTML =num1 / num2;}


                        function mult(){
                            "use strict";
                                    var num1 = parseInt(document.getElementById("firstNumber").value);
                                    //You need to define your variable before use.
                                    var num2 = parseInt(document.getElementById("secondNumber").value);
                                    console.log(document.getElementById("firstNumber"));
                                    //this is a DOM object
                                    console.log(typeof document.getElementById("firstNumber").value);
                                    //this is a "string"
                                    console.log(typeof parseInt(document.getElementById("firstNumber").value));
                                    console.log(typeof +document.getElementById("firstNumber").value);
                                    //quickly  by use '+'
                                    document.getElementById("result3").innerHTML =num1 * num2;}

                                    function comp(){
                                        "use strict";
                                                var num1 = parseInt(document.getElementById("firstNumber").value);
                                                //You need to define your variable before use.
                                                var num2 = parseInt(document.getElementById("secondNumber").value);
                                                console.log(document.getElementById("firstNumber"));
                                                //this is a DOM object
                                                console.log(typeof document.getElementById("firstNumber").value);
                                                //this is a "string"
                                                console.log(typeof parseInt(document.getElementById("firstNumber").value));
                                                console.log(typeof +document.getElementById("firstNumber").value);
                                                //quickly  by use '+'
                                                document.getElementById("result4").innerHTML =num1 == num2;}
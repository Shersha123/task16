setTimeout(()=>{
    console.log("Happy Independent day")
},6000)

function f10(){
    console.log("10")
    f9();
    function f9(){
        console.log("9")
        f8();
        function f8(){
            console.log("8")
            f7();
            function f7(){
                console.log("7")
                f6();
                function f6(){
                    console.log("6")
                    f5();
                    function f5(){
                        console.log("5")
                        f4();
                        function f4(){
                            console.log("4")
                            f3();
                            function f3(){
                                console.log("3")
                                f2();
                                function f2(){
                                    console.log("2")
                                    f1();
                                    function f1(){
                                        console.log(1)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
f10();
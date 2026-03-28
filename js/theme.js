list=[`--color: #007bff;        /* Replaces red */
--lightest: #d4e8ff;     /* Replaces lightest orange */
--light: #a9cdfc;        /* Replaces light orange */
--acent-color: #5b9dff;  /* Replaces accent orange */
--dark: #1945ad;         /* Replaces dark red */
--darkest: #142e5f;      /* Replaces darkest red */`,
`--color: #28a745;        /* Replaces red */
--lightest: #d4ffd9;     /* Replaces lightest orange */
--light: #a9fcb5;        /* Replaces light orange */
--acent-color: #5bff67;  /* Replaces accent orange */
--dark: #19ad2a;         /* Replaces dark red */
--darkest: #145f1b;      /* Replaces darkest red */`,
`--color: #ffc107;        /* Replaces red */
--lightest: #fff9e0;     /* Replaces lightest orange */
--light: #fff0a9;        /* Replaces light orange */
--acent-color: #ffd85b;  /* Replaces accent orange */
--dark: #ad8f19;         /* Replaces dark red */
--darkest: #5f4d14;      /* Replaces darkest red */`,`
--color: #ff6600;        /* Vibrant Orange */
--lightest: #fff0e6;     /* Soft Creamsicle */
--light: #ffc299;        /* Warm Peach */
--acent-color: #ff9955;  /* Sunset Accent */
--dark: #cc5200;         /* Deep Burnt Orange */
--darkest: #803300;`,
`--color: #8800ff;        
--lightest: #f0d4ff;
--light: #c7a9fc;
--acent-color: #a45bff;
--dark: #4d19ad;   
--darkest: #27145f;`,
`--color: #ff007f;
--lightest: #ffe0ef;
--light: #fca9d3;
--acent-color: #ff5baf;
--dark: #ad1964;
--darkest: #5f143a;`,
`
    --color:#f00;
    --lightest:#ffe2d4;
    --light:#fcb8a9;
    --acent-color:#ff675b;
    --dark:#AD2519;
    --darkest:#5f1914;
`

]
i=0

document.getElementById("d").addEventListener("click", ()=>{
    document.querySelector("body").style=list[i];
    i=(i+1)%list.length
});

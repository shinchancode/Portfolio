const exp=require("express");
const fs=require("fs");
const path=require("path");
const appl=exp();
const port=process.env.PORT || 8000;


// Express Specific stuff
appl.use('/static',exp.static('static'));
appl.use(exp.urlencoded());
// ******************************************************************

// Pug Specific stuff
appl.set('view engine', 'pug');
appl.set("views",path.join(__dirname,'views'))

// Endpoints
appl.get("/",(req,res)=>
{
    const con="Rathi you are the best, I hope you know that";
    const para={};
    res.status(200).render('home.pug');
});

appl.get("/certificate",(req,res)=>
{
    const con="Rathi you are the best, I hope you know that";
    const para={};
    res.status(200).render('cert.pug');
});

appl.post("/",(req,res)=>
{
    const name=req.body.Name;
    const email=req.body.Email;
    const phn=req.body.Mobile;
    const msg=req.body.Message;

    let outputData=`The name of Client is "${name}" \n Email : "${email}" \n Mobile no: "${phn}" \n Message from there : "${msg}"\n \n `;
    fs.writeFileSync("output.txt",outputData);

    console.log(req.body);
    const para={'message':"Yooh! Your form has been submitted successfully"};
    res.status(200).render('home.pug',para);
});

// Start the server
appl.listen(port,()=>
{
    console.log(`Successfully completed with port ${port}`);
});
module.exports = async function (context, req) 
{
    context.res = 
    {
        body: { text: "hello from the api"}
    };
            
}
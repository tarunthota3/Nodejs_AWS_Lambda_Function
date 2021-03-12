// function created using aws lambda and api gateway
exports.handler = async (event) => {
    // TODO implement
    console.log("keyword: ", event.keyword);
    const response = {
        statusCode: 200,
        body: JSON.stringify(event.keyword + ' says hello'),
    };
    return response;
};

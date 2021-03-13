// function created using aws lambda and api gateway
exports.handler = async (event) => {
    // TODO implement
    console.log("keyword: ", event.keyword);
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Tarun Thota says ${event.keyword}`),
    };
    return response;
};

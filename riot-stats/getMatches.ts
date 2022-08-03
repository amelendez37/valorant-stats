import { Handler } from "aws-lambda";

export const getMatches: Handler = (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };

  return new Promise((resolve) => {
    resolve(response);
  });
};

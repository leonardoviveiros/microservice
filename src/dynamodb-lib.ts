import AWS from "aws-sdk";

AWS.config.update({ region: "sa-east-1" });

export function call(action: string, params: any) {
  const dynamoDb: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient();
  return dynamoDb[action](params).promise();
}

import * as gcp from "@pulumi/gcp";

// デプロイしたい関数
const helloWorld: gcp.cloudfunctions.HttpCallback = (req, res) => {
    const message = "hello world";
    res.send(message);
};

// 上の関数のデプロイに関するインフラの設定
const helloWorldFunction = new gcp.cloudfunctions.HttpCallbackFunction(
    "helloWorldFunction",
    { runtime: "nodejs14", callback: helloWorld }
);

// デプロイ後に表示する情報
export const functionUrl = helloWorldFunction.httpsTriggerUrl;

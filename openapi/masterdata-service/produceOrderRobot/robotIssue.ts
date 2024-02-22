import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产订单全自动机器人相关/robotIssueUsingPOST
export function fetchMethod(data: number[], params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/produceOrderRobot/robotIssue",
      data,
      params,
    });
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}

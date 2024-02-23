import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产订单全自动机器人相关/scheduleDeleteAlreadyIssueSuccessUsingGET
export default function fetchMethod() {
    return get<IJSONResultobject>({
      url: "/masterdata-service/produceOrderRobot/scheduleDeleteAlreadyIssueSuccess",
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

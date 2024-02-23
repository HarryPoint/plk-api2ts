import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产订单全自动机器人相关/asynRobotIssueUsingPOST
export default function fetchMethod(data: IProduceOrderAutoVaguePlanIssueDTO[], params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceOrderRobot/asynRobotIssue",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// ProduceOrderAutoVaguePlanIssueDTO
export interface IProduceOrderAutoVaguePlanIssueDTO {
    // undefined
    id: number;
    // undefined
    code: string;
    // undefined
    beginTime: string;
    // undefined
    endTime: string;
    // undefined
    stepIds: number[];
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

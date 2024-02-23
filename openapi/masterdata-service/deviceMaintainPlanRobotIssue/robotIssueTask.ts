import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/设备保养计划自动下发相关/robotIssueTaskUsingPOST
export default function fetchMethod() {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/deviceMaintainPlanRobotIssue/robotIssueTask",
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

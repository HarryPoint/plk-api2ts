import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryYearlyGoalsUsingPOST
export default function fetchMethod(data: IAnnualTargetQueryRequest) {
    return post<IJSONResultListAnnualTargetQueryResponse['data']>({
      url: "/masterdata-service/hseDashboard/queryYearlyGoals",
      data,
    });
}
// 年度目标查询请求
export interface IAnnualTargetQueryRequest {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«年度目标查询响应»»
export interface IJSONResultListAnnualTargetQueryResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAnnualTargetQueryResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 年度目标查询响应
export interface IAnnualTargetQueryResponse {
    // 序号
    serialNumber: string;
    // 控制目标名称
    controlTargetName: string;
    // 目标
    targetValue: string;
    // 当前
    currentValue: string;
}

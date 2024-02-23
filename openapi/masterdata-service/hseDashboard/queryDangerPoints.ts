import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryDangerPointsUsingPOST
export default function fetchMethod(data: IDangerPointQueryRequest) {
    return post<IJSONResultListResponseToTheDangerPointQuery>({
      url: "/masterdata-service/hseDashboard/queryDangerPoints",
      data,
    });
}
// 危险点查询请求
export interface IDangerPointQueryRequest {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«危险点查询响应»»
export interface IJSONResultListResponseToTheDangerPointQuery {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDangerPointQueryResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 危险点查询响应
export interface IDangerPointQueryResponse {
    // 危险点等级Key
    dangerPointLevelKey: string;
    // 危险点等级名称
    dangerPointLevelName: string;
    // 危险点数量
    dangerPointQuantity: number;
}

import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/Hse大屏配置相关/getProductionStartDateUsingGET
export default function fetchMethod() {
    return get<IJSONResultResponseToTheProductionStartDateQuery>({
      url: "/masterdata-service/hseDashboardConfig/getProductionStartDate",
    });
}
// JSONResult«生产开始日期-查询响应»
export interface IJSONResultResponseToTheProductionStartDateQuery {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionStartDateQueryResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产开始日期-查询响应
export interface IProductionStartDateQueryResponse {
    // 生产开始日期
    productionStartDate: string;
}

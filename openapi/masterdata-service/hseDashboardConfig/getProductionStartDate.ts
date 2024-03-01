import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/Hse大屏配置相关/getProductionStartDateUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultResponseToTheProductionStartDateQuery>(
        {
            url: "/masterdata-service/hseDashboardConfig/getProductionStartDate",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产开始日期-查询响应» */
export interface IJSONResultResponseToTheProductionStartDateQuery {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionStartDateQueryResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产开始日期-查询响应 */
export interface IProductionStartDateQueryResponse {
    /** 生产开始日期 */
    productionStartDate?: number;
}

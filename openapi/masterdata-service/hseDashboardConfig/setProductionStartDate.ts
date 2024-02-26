import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/Hse大屏配置相关/setProductionStartDateUsingPOST
*/
export default function fetchMethod(options: { data: IProductionStartDateSetRequest }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/hseDashboardConfig/setProductionStartDate",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产开始日期-设置请求 */
export interface IProductionStartDateSetRequest {
    /** 生产开始日期 */
    productionStartDate?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

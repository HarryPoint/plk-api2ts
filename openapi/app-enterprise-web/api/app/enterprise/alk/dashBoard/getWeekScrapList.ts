import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/安利康大屏相关/getWeekScrapListUsingGET
*/
export default function fetchMethod(options: { params: { categoryCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListDiscardDataVOInTheLast7Days>(
        {
            url: "/app-enterprise-web/api/app/enterprise/alk/dashBoard/getWeekScrapList",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«近7天报废品数据VO»» */
export interface IJSONResultListDiscardDataVOInTheLast7Days {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ILast7DaysReportedWasteDataVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 近7天报废品数据VO */
export interface ILast7DaysReportedWasteDataVO {
    /** 类型 */
    categoryName?: string;
    /** 数量 */
    quantity?: number;
    /** 比例 */
    rate?: number;
}

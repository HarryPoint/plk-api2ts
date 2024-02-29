import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/安利康大屏相关/getDayPassListUsingGET
*/
export default function fetchMethod(options: { params: { categoryCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListTodaysGoodProductStatisticsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/alk/dashBoard/getDayPassList",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«今日良品统计VO»» */
export interface IJSONResultListTodaysGoodProductStatisticsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITodaysGoodProductStatisticsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 今日良品统计VO */
export interface ITodaysGoodProductStatisticsVO {
    /** 规格 */
    materialSpec?: string;
    /** 合格品数量 */
    passQuantity?: number;
    /** 良品率 */
    goodRate?: number;
}

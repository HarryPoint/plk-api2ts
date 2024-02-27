import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/费用分配相关/getFiscalPeriodSelectorUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListRespondsToTheObjectDuring>(
        {
            url: "/masterdata-service/produceFeeAssign/getFiscalPeriodSelector",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«期间响应对象»» */
export interface IJSONResultListRespondsToTheObjectDuring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDurationResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 期间响应对象 */
export interface IDurationResponseObject {
    /** 期间Id */
    id?: string;
    /** 期间 */
    period?: string;
    /** 开始日期 */
    startDate?: number;
    /** 结束日期 */
    endDate?: number;
    /** 是否当前期间 */
    isCurrentFiscalPeriod?: EDurationResponseObject_isCurrentFiscalPeriod;
}

export enum EDurationResponseObject_isCurrentFiscalPeriod {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

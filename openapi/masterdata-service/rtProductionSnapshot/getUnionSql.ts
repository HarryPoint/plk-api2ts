import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getUnionSqlUsingPOST
*/
export default function fetchMethod(options: { params: { BeginTime?: number; EndTime?: number; QueryQuantityCount?: number; TimeType?: ETimeType } }, extraOptions?: any) {
    return http<IJSONResultString>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getUnionSql",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string» */
export interface IJSONResultString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ETimeType {
    HOUR = "HOUR",
    DAY = "DAY",
    MONTH = "MONTH",
    YEAR = "YEAR"
}

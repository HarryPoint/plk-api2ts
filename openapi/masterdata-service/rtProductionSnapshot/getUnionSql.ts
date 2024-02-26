import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getUnionSqlUsingPOST
*/
export default function fetchMethod(options: { params: { beginTime?: string; endTime?: string; queryQuantityCount?: number; timeType?: EtimeType } }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getUnionSql",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EtimeType {
    HOUR = "HOUR",
    DAY = "DAY",
    MONTH = "MONTH",
    YEAR = "YEAR"
}

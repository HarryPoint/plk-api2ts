import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/tsk数采数据相关/queryTableColumnUsingGET_2
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListTskStatisticReportTableColumnBO>(
        {
            url: "/masterdata-service/tskStatistic/queryTableColumn",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«TskStatisticReportTableColumnBO»» */
export interface IJSONResultListTskStatisticReportTableColumnBO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITskStatisticReportTableColumnBO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** TskStatisticReportTableColumnBO */
export interface ITskStatisticReportTableColumnBO {
}

import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/tsk数采数据相关/queryTableColumnUsingGET_2
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListTskStatisticReportTableColumnBO>(
        {
            url: "/masterdata-service/tskStatistic/queryTableColumn",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«TskStatisticReportTableColumnBO»» */
export interface IJSONResultListTskStatisticReportTableColumnBO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITskStatisticReportTableColumnBO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** TskStatisticReportTableColumnBO */
export interface ITskStatisticReportTableColumnBO {
}

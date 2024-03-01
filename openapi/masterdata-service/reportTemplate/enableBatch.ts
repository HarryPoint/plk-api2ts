import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/报表模板/enableBatchUsingPOST
*/
export default function fetchMethod(options: { data: IReportTemplateEnableRequestDTO }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/reportTemplate/enableBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ReportTemplateEnableRequestDTO */
export interface IReportTemplateEnableRequestDTO {
    /** ID列表 */
    idList?: string[];
}
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}

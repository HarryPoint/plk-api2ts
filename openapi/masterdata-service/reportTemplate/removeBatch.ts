import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/报表模板/removeBatchUsingPOST
*/
export default function fetchMethod(data: IReportTemplateRemoveRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/reportTemplate/removeBatch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** ReportTemplateRemoveRequestDTO */
export interface IReportTemplateRemoveRequestDTO {
    /** ID列表 */
    idList: number[];
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}

import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/报表模板/enableBatchUsingPOST
export default function fetchMethod(data: IReportTemplateEnableRequestDTO) {
    return post<IJSONResultstring1['data']>({
      url: "/masterdata-service/reportTemplate/enableBatch",
      data,
    });
}
// ReportTemplateEnableRequestDTO
export interface IReportTemplateEnableRequestDTO {
    // ID列表
    idList: number[];
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}

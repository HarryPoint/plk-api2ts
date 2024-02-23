import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/导出相关/getProductionEntrustReportExportInfoByTicketUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IJSONResultExportInformationOutsourcingReportExportVO['data']>({
      url: "/masterdata-service/exportAuth/getProductionEntrustReportExportInfoByTicket",
      params,
    });
}
// JSONResult«导出信息«委外报表导出VO»»
export interface IJSONResultExportInformationOutsourcingReportExportVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationOutsourcingReportExportVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«委外报表导出VO»
export interface IExportInformationOutsourcingReportExportVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IOutsourcingReportExportVO[];
}
// 委外报表导出VO
export interface IOutsourcingReportExportVO {
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 数据时间
    dataTime: string;
    // 委外总数(委外发出)
    produceEntrustQuantity: number;
    // 委外返回数量(委外返回)
    produceEntrustBackTotalQuantity: number;
    // 委外返回数量(委外合格返回)
    produceEntrustBackQuantity: number;
    // 委外报废数量(委外报废)
    produceEntrustScrapQuantity: number;
}

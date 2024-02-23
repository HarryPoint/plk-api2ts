import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/导出相关/getProductionClassGroupReportExportInfoByTicketUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IJSONResultExportInformationOutputReportExportVO>({
      url: "/masterdata-service/exportAuth/getProductionClassGroupReportExportInfoByTicket",
      params,
    });
}
// JSONResult«导出信息«产出报表导出VO»»
export interface IJSONResultExportInformationOutputReportExportVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationOutputReportExportVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«产出报表导出VO»
export interface IExportInformationOutputReportExportVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IOutputReportExportVO[];
}
// 产出报表导出VO
export interface IOutputReportExportVO {
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 班组信息集
    classGroupList: string;
    // 工序信息集
    processList: string;
    // 物料信息集
    majorDataList: string;
    // 数据时间
    dataTime: string;
    // 总产出
    totalProduceQuantity: number;
    // 产出数量
    produceQuantity: number;
    // 报废数量
    scrapQuantity: number;
    // 返工产出
    backQuantity: number;
}

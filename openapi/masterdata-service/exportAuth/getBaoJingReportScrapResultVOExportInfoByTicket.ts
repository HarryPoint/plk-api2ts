import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/导出相关/getBaoJingReportScrapResultVOExportInfoByTicketUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IJSONResultExportInformationAboutBaojingReportScrapReturnedToVO>({
      url: "/masterdata-service/exportAuth/getBaoJingReportScrapResultVOExportInfoByTicket",
      params,
    });
}
// JSONResult«导出信息«宝晶报表(报废)相关返回VO»»
export interface IJSONResultExportInformationAboutBaojingReportScrapReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationBaojingReportScrapRelatedReturnToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«宝晶报表(报废)相关返回VO»
export interface IExportInformationBaojingReportScrapRelatedReturnToVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IBaojingReportScrapRelatedReturnToVO[];
}
// 宝晶报表(报废)相关返回VO
export interface IBaojingReportScrapRelatedReturnToVO {
    // 报废类型
    scrapType: string;
    // 物料id
    majorDataId: number;
    // 物料编码
    majorDataCode: string;
    // 物料名称
    majorDataName: string;
    // 物料规格
    spec: string;
    // 外部编码
    materialOutsideCode: string;
    // 仓库id
    storehouseId: number;
    // 仓库名称
    storehouseName: string;
    // 仓库用途
    storehousePurpose: string;
    // 报废数量
    scrapQuantity: number;
}

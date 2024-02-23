import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产快照相关/getAllProduceExportResultForProcessUsingPOST
export default function fetchMethod(data: IOutputClassReportSearchVO, params: { enterpriseId: number }) {
    return post<IJSONResultListExportVOFromTheOutputReport>({
      url: "/masterdata-service/rtProductionSnapshot/getAllProduceExportResultForProcess",
      data,
      params,
    });
}
// 产出类报表搜索VO
export interface IOutputClassReportSearchVO {
    // 班组id集
    classGroupIds: number[];
    // 物料id集
    materialIds: number[];
    // 工序id集
    processIds: number[];
    // 日期筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 日期筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 查询时间维度类型
    timeType: string;
}
// JSONResult«List«产出报表导出VO»»
export interface IJSONResultListExportVOFromTheOutputReport {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IOutputReportExportVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
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

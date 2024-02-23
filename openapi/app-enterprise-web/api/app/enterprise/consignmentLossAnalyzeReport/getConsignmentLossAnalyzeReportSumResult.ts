import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/宝晶寄售损耗报表相关/getConsignmentLossAnalyzeReportSumResultUsingPOST
export default function fetchMethod(data: IConsignmentLossAnalysisReportSearchVO) {
    return http<IJSONResultConsignmentLossAnalysisReportPaginatedReturnsVO>({
        url: "/app-enterprise-web/api/app/enterprise/consignmentLossAnalyzeReport/getConsignmentLossAnalyzeReportSumResult",
        method: "post",
        data,
    });
}
// 寄售损耗分析报表搜索VO
export interface IConsignmentLossAnalysisReportSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 仓库id
    warehouseId: number[];
    // 日期开始时间 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 排序字段集
    orders: IPagingSortVO[];
    // 日期结束时间 yyyy-MM-dd HH:mm:ss
    endDate: string;
    // 客户id
    customerId: number[];
    // 产品id
    majorDataIds: number[];
    // 外部编码产品id集
    outerCodeMajorDataIds: number[];
    // 产品名称
    productName: string;
    // 规格型号
    productSpec: string;
    // 业务员ID列表
    businessUserIdList: number[];
    // 物料类型
    materialTypes: string[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«寄售损耗分析报表分页返回VO»
export interface IJSONResultConsignmentLossAnalysisReportPaginatedReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IConsignmentLossAnalysisReportPagingBackToVO1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 寄售损耗分析报表分页返回VO_1
export interface IConsignmentLossAnalysisReportPagingBackToVO1 {
    // 期初数量
    numOfBeginningPeriodSum: number;
    // 送货数量
    sendQtySum: number;
    // 入库数量
    inboundQtySum: number;
    // 退货数量
    returnQtySum: number;
    // 损耗数量
    numOfLossSum: number;
    // 未结余量
    remainingQtySum: number;
    // 损耗率
    lossRatioSum: number;
}

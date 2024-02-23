import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/宝晶售后质量分析报表相关/getAfterSalesQualityReportSumResultUsingPOST
export default function fetchMethod(data: IAfterSalesQualityAnalysisReportSearchVO) {
    return post<IJSONResultAfterSalesQualityAnalysisReturnsVO1['data']>({
      url: "/app-enterprise-web/api/app/enterprise/afterSalesQualityReport/getAfterSalesQualityReportSumResult",
      data,
    });
}
// 售后质量分析报表搜索VO
export interface IAfterSalesQualityAnalysisReportSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 灌装日期开始时间 yyyy-MM-dd HH:mm:ss
    fillingBeginDate: string;
    // 排序字段集
    orders: IPagingSortVO[];
    // 灌装日期结束时间 yyyy-MM-dd HH:mm:ss
    fillingEndDate: string;
    // 客户id
    customerId: number[];
    // 生产日期开始时间 yyyy-MM-dd HH:mm:ss
    productionBeginDate: string;
    // 业务员id
    businessIds: number[];
    // 生产日期结束时间 yyyy-MM-dd HH:mm:ss
    productionEndDate: string;
    // 记录日期结束时间 yyyy-MM-dd HH:mm:ss
    endDate: string;
    // 记录日期开始时间 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 产品id
    majorDataIds: number[];
    // 外部编码产品id集
    outerCodeMajorDataIds: number[];
    // 灌装线
    fillingLine: string;
    // 责任单位
    responsibleUnit: string;
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
// JSONResult«售后质量分析返回VO»_1
export interface IJSONResultAfterSalesQualityAnalysisReturnsVO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAfterSalesQualityAnalysisReturnsVO2;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 售后质量分析返回VO_2
export interface IAfterSalesQualityAnalysisReturnsVO2 {
    // 数量
    quantitySum: number;
}

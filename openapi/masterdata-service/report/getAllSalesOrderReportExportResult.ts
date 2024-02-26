import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/报表相关/getAllSalesOrderReportExportResultUsingPOST
*/
export default function fetchMethod(data: IOrderProgressStatisticsQueryVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListExportOrderProgressStatisticsVO>(
        {
            url: "/masterdata-service/report/getAllSalesOrderReportExportResult",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 订单进度统计查询VO */
export interface IOrderProgressStatisticsQueryVO {
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 交付日期 - 开始 yyyy-MM-dd HH:mm:ss */
    deliveryDateBegin: string;
    /** 销售订单编号 */
    salesOrderCode: string;
    /** 物料id集 */
    materialIds: number[];
    /** 客户id集 */
    customerIds: number[];
    /** 交付日期 - 结束 yyyy-MM-dd HH:mm:ss */
    deliveryDateEnd: string;
    /** 物料编码 */
    materialCode: string;
    /** 销售订单状态 */
    salesOrderStatus: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«List«订单进度统计导出VO»» */
export interface IJSONResultListExportOrderProgressStatisticsVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IOrderProgressStatisticsAreDerivedVO2[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 订单进度统计导出VO_2 */
export interface IOrderProgressStatisticsAreDerivedVO2 {
    /** 销售订单编号 */
    salesOrderCode: string;
    /** 客户名称 */
    customerName: string;
    /** 销售订单状态 */
    salesOrderStatus: string;
    /** 销售订单状态字符串 */
    salesOrderStatusDesc: string;
    /** 销售订单明细 */
    salesOrderDetails: IOrderProgressStatisticsAreExportedVO1[];
    /** 销售订单中生产订单数量 */
    produceOrderCount: number;
    /** 销售订单创建时间 */
    salesOrderCreateTime: string;
}
/** 订单进度统计导出VO_1 */
export interface IOrderProgressStatisticsAreExportedVO1 {
    /** 物料id */
    materialId: number;
    /** 物料编码 */
    materialCode: string;
    /** 物料名称 */
    materialName: string;
    /** 物料规格型号 */
    spec: string;
    /** 交付数量 */
    totalQuantity: number;
    /** 交付日期 */
    deliveryDate: string;
    /** 交付日期字符串 */
    deliveryDateStr: string;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    minPlanBeginTime: string;
    /** 计划开始时间字符串 */
    minPlanBeginTimeStr: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    maxPlanEndTime: string;
    /** 计划结束时间字符串 */
    maxPlanEndTimeStr: string;
    /** 实际生产开始时间 */
    minActualBeginTime: string;
    /** 实际生产开始时间字符串 */
    minActualBeginTimeStr: string;
    /** 实际生产完成时间 */
    maxActualEndTime: string;
    /** 实际生产完成时间字符串 */
    maxActualEndTimeStr: string;
    /** 交付剩余天数 */
    deliveryRemainingDays: number;
    /** 已转换数量 */
    totalConvertQuantity: number;
    /** 转生产进度 */
    convertRatio: string;
    /** 订单完成进度 */
    completeRatio: string;
    /** 排产进度 */
    planRatio: string;
    /** 总合格产出数量 */
    totalProduceQuantity: number;
    /** 已排产数量 */
    totalPlanQuantity: number;
    /** 生产订单 */
    produceOrders: IOrderProgressStatisticsAreExportedToVO[];
}
/** 订单进度统计导出VO */
export interface IOrderProgressStatisticsAreExportedToVO {
    /** 生产订单编号 */
    produceOrderCode: string;
    /** 生产物料id */
    produceMaterialId: number;
    /** 生产物料编码 */
    produceMaterialCode: string;
    /** 生产物料名称 */
    produceMaterialName: string;
    /** 生产物料规格型号 */
    produceMaterialSpec: string;
    /** 生产数量 */
    convertQuantity: number;
    /** 生产订单状态 */
    produceOrderStatus: string;
    /** 生产订单状态描述 */
    produceOrderStatusStr: string;
    /** 排产状态 */
    produceOrderPlanStatus: string;
    /** 排产状态描述 */
    produceOrderPlanStatusStr: string;
    /** 计划生产开始时间 */
    planBeginTime: string;
    /** 计划生产结束时间 */
    planEndTime: string;
    /** 计划生产开始时间字符串 */
    planBeginTimeStr: string;
    /** 计划生产结束时间字符串 */
    planEndTimeStr: string;
    /** 计划生产数量 */
    planQuantity: number;
    /** 实际生产开始时间 */
    actualBeginTime: string;
    /** 实际生产结束时间 */
    actualEndTime: string;
    /** 实际生产开始时间字符串 */
    actualBeginTimeStr: string;
    /** 实际生产结束时间字符串 */
    actualEndTimeStr: string;
    /** 合格产出数量 */
    produceQuantity: number;
    /** 报废数量 */
    scrapQuantity: number;
    /** 委外数量 */
    entrustQuantity: number;
    /** 合格产出进度 */
    produceRatio: string;
}

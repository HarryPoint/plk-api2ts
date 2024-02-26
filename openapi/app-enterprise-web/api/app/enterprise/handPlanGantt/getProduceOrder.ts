import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/手动排产甘特图相关/getProduceOrderUsingPOST_1
*/
export default function fetchMethod(data: IGanttChartSearchVO, extraOptions?: any) {
    return http<IJSONResultPageInformationProductionOrderManualSchedulingGanttChartReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/handPlanGantt/getProduceOrder",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 甘特图搜索VO */
export interface IGanttChartSearchVO {
    /** 开始日期 yyyy-MM-dd */
    beginDate: string;
    /** 当前页面 */
    pageNo: number;
    /** 结束日期 yyyy-MM-dd */
    endDate: string;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 生产订单编码 */
    produceOrderCode: string;
    /** 工艺路径ID列表 */
    processIdList: number[];
    /** 销售订单编码 */
    salesOrderCode: string;
    /** 生产物料ID列表 */
    produceMaterialIdList: number[];
    /** 订单状态列表 */
    orderStatusList: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«分页信息«生产订单手动排产甘特图返回VO»» */
export interface IJSONResultPageInformationProductionOrderManualSchedulingGanttChartReturnsVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPageInformationProductionOrdersManualSchedulingGanttChartReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 分页信息«生产订单手动排产甘特图返回VO» */
export interface IPageInformationProductionOrdersManualSchedulingGanttChartReturnsVO {
    /** 当前页码 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 总页数 */
    totalPage: number;
    /** 总的记录数 */
    totalCount: number;
    /** 分页列表 */
    list: IProductionOrderManualSchedulingGanttChartBackToVO[];
    /** 最后页页码 */
    lastPage: number;
    /** 是否有上一页 */
    hasPreviousPage: string;
    /** 是否有下一页 */
    hasNextPage: string;
    /** 上一页页码 */
    previousPage: number;
    /** 下一页页码 */
    nextPage: number;
}
/** 生产订单手动排产甘特图返回VO */
export interface IProductionOrderManualSchedulingGanttChartBackToVO {
    /** 生产订单id */
    produceOrderId: number;
    /** 生产订单号 */
    produceOrderCode: string;
    /** 销售订单id */
    salesOrderId: number;
    /** 销售明细id */
    salesOrderDetailId: number;
    /** 物料id */
    materialId: number;
    /** 物料名称 */
    materialName: string;
    /** 物料编号 */
    materialCode: string;
    /** 交付数量 */
    totalCount: number;
    /** 已生产数量 */
    currentCount: number;
    /** 交付日期 */
    deliveryDate: string;
    /** 生产订单状态 */
    orderStatus: string;
    /** 计划开始日期 */
    beginTime: string;
    /** 计划结束日期 */
    endTime: string;
}

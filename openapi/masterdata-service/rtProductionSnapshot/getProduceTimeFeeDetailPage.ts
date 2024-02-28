import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getProduceTimeFeeDetailPageUsingPOST
*/
export default function fetchMethod(options: { data: IHourlyLaborRateReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheLaborCostReportReturnsVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getProduceTimeFeeDetailPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工时工费报表搜索VO */
export interface IHourlyLaborRateReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id集 */
    processIds?: string[];
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 员工id集 */
    userIds?: string[];
    /** 物料id集 */
    materialIds?: string[];
    /** 班组id集 */
    classGroupIds?: string[];
    /** 查询开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 查询结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 生产任务编码 */
    produceTaskNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«工时工费报表返回VO»» */
export interface IJSONResultPagingInformationTheLaborCostReportReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationTheTimeSpentReportReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«工时工费报表返回VO» */
export interface IPageInformationTheTimeSpentReportReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheManHourReportReturnsToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationTheTimeSpentReportReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationTheTimeSpentReportReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 工时工费报表返回VO */
export interface ITheManHourReportReturnsToVO {
    /** 创建时间 */
    createTime?: number;
    /** 员工id */
    userId?: string;
    /** 员工姓名 */
    username?: string;
    /** 班组id */
    classGroupId?: string;
    /** 班组名称 */
    classGroupName?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 订单id */
    produceOrderId?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 订单数量(工单数量) */
    produceOrderTotalCount?: number;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 合格产出数量 */
    produceQuantity?: number;
    /** 合格产出工费 */
    produceFee?: number;
    /** 返工数量 */
    backQuantity?: number;
    /** 返工产出工费 */
    backFee?: number;
    /** 销售订单id */
    salesOrderId?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 生产任务id */
    produceTaskId?: string;
    /** 生产任务编码 */
    produceTaskNo?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationTheTimeSpentReportReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationTheTimeSpentReportReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

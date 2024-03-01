import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产事件管理/getPageUsingPOST_15
*/
export default function fetchMethod(options: { data: IProduceObjectsThatHandlePagingQueries, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProductionHandlesPagingResponseObjects>(
        {
            url: "/masterdata-service/produceHandle/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理分页查询的对象 */
export interface IProduceObjectsThatHandlePagingQueries {
    /** 操作开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 提交人id */
    createUserId?: string;
    /** 操作结束时间 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 处理人id */
    handleUserId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产异常类型id */
    produceAbnormalCategoryId?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 状态 */
    status?: EProduceObjectsThatHandlePagingQueries_status;
    /** 异常分类 */
    type?: EProduceObjectsThatHandlePagingQueries_type;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«生产处理分页响应对象»» */
export interface IJSONResultPagingInformationProductionHandlesPagingResponseObjects {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationProductionHandlesPagingResponseObjects;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«生产处理分页响应对象» */
export interface IPagingInformationProductionHandlesPagingResponseObjects {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProductionHandlesPagingResponseObjects_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProductionHandlesPagingResponseObjects_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProductionHandlesPagingResponseObjects[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 生产处理分页响应对象 */
export interface IProductionHandlesPagingResponseObjects {
    /** 异常数量 */
    abnormalQuantity?: number;
    /** 返工工序编号 */
    backProcessCode?: string;
    /** 返工工序id */
    backProcessId?: string;
    /** 返工工序名称 */
    backProcessName?: string;
    /** 返工生产类型 */
    backProduceType?: EProductionHandlesPagingResponseObjects_backProduceType;
    /** 返工生产类型描述 */
    backProduceTypeDesc?: string;
    /** 返工数量 */
    backQuantity?: number;
    /** 返工工艺路径步骤 */
    backRoutingStep?: number;
    /** 返工工艺路径步骤id */
    backRoutingStepId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 描述 */
    description?: string;
    /** 是否启用启用批次 */
    enableLot?: EProductionHandlesPagingResponseObjects_enableLot;
    /** 是否启用质量追溯 */
    enableQualityTraceability?: EProductionHandlesPagingResponseObjects_enableQualityTraceability;
    /** 已处理数量 */
    handleQuantity?: number;
    /** 处理意见 */
    handleRemark?: string;
    /** 处理时间 */
    handleTime?: number;
    /** 处理人 */
    handleUserId?: string;
    /** 处理人姓名 */
    handleUsername?: string;
    /** id */
    id?: string;
    /** 上报图片key集合 */
    imageKeys?: string;
    /** 上报图片地址集合 */
    imageUrls?: string[];
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 对应批次订单id */
    lotOrderId?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 所属进出站记录id */
    moveInOutRecordId?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 生产异常类型id */
    produceAbnormalCategoryId?: string;
    /** 生产异常类型编号 */
    produceAbnormalCode?: string;
    /** 生产异常类型名称 */
    produceAbnormalName?: string;
    /** 对应生产订单号 */
    produceOrderCode?: string;
    /** 对应生产订单id */
    produceOrderId?: string;
    /** 所属生产任务id */
    produceTaskId?: string;
    /** 放行数量 */
    releaseQuantity?: number;
    /** 备注 */
    remark?: string;
    /** 对应工艺路径id */
    routingId?: string;
    /** 所属生产任务工艺路径步骤 */
    routingStep?: number;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 报废数量 */
    scrapQuantity?: number;
    /** 状态 */
    status?: EProductionHandlesPagingResponseObjects_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 标签集合 */
    tags?: string[];
    /** 异常分类 */
    type?: EProductionHandlesPagingResponseObjects_type;
    /** 异常分类描述 */
    typeDesc?: string;
    /** 待处理数量 */
    waitQuantity?: number;
}

export enum EProduceObjectsThatHandlePagingQueries_status {
    /** 待处理 */
    CREATED = "CREATED",
    /** 已确认 */
    SURE = "SURE",
    /** 已忽略 */
    IGNORE = "IGNORE",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 处理中 */
    HANDING = "HANDING",
    /** 处理完成 */
    ALL_HANDLE = "ALL_HANDLE",
    /** 批准 */
    APPROVAL = "APPROVAL",
    /** 拒绝 */
    REFUSE = "REFUSE",
    /** 撤销 */
    REVOKE = "REVOKE",
    /** 完成 */
    COMPLETE = "COMPLETE",
    /** 取消 */
    CANCEL = "CANCEL"
}

export enum EProduceObjectsThatHandlePagingQueries_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 申请质检 */
    QUALITY_APPLY = "QUALITY_APPLY",
    /** 任务下发 */
    TASK_ISSUE = "TASK_ISSUE",
    /** 委外加工 */
    PRODUCE_ENTRUST = "PRODUCE_ENTRUST",
    /** 任务分配 */
    TASK_ASSIGN = "TASK_ASSIGN"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationProductionHandlesPagingResponseObjects_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProductionHandlesPagingResponseObjects_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionHandlesPagingResponseObjects_backProduceType {
    /** 返回原工序 */
    RETURN = "RETURN",
    /** 顺序生产 */
    ORDER = "ORDER"
}

export enum EProductionHandlesPagingResponseObjects_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionHandlesPagingResponseObjects_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionHandlesPagingResponseObjects_status {
    /** 待处理 */
    CREATED = "CREATED",
    /** 已确认 */
    SURE = "SURE",
    /** 已忽略 */
    IGNORE = "IGNORE",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 处理中 */
    HANDING = "HANDING",
    /** 处理完成 */
    ALL_HANDLE = "ALL_HANDLE",
    /** 批准 */
    APPROVAL = "APPROVAL",
    /** 拒绝 */
    REFUSE = "REFUSE",
    /** 撤销 */
    REVOKE = "REVOKE",
    /** 完成 */
    COMPLETE = "COMPLETE",
    /** 取消 */
    CANCEL = "CANCEL"
}

export enum EProductionHandlesPagingResponseObjects_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 申请质检 */
    QUALITY_APPLY = "QUALITY_APPLY",
    /** 任务下发 */
    TASK_ISSUE = "TASK_ISSUE",
    /** 委外加工 */
    PRODUCE_ENTRUST = "PRODUCE_ENTRUST",
    /** 任务分配 */
    TASK_ASSIGN = "TASK_ASSIGN"
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产批次订单相关/getPageUsingPOST_7
*/
export default function fetchMethod(options: { data: IBatchOrderSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultPagingInformationBatchOrderReturnsVO>(
        {
            url: "/masterdata-service/lotOrder/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单搜索VO */
export interface IBatchOrderSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前流水类型(界面上的批次当前生产状态) */
    lastFlowType?: EBatchOrderSearchVO_lastFlowType;
    /** 批次订单号 */
    lotOrderNo?: string;
    /** 创建开始时间 yyyy-MM-dd HH:mm:ss */
    createBeginTime?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 创建结束时间 yyyy-MM-dd HH:mm:ss */
    createEndTime?: string;
    /** 对应物料id */
    materialId?: number;
    /** 来源类型 */
    sourceType?: EBatchOrderSearchVO_sourceType;
    /** 来源批次单号 */
    sourceLotNo?: string;
    /** 状态 */
    status?: EBatchOrderSearchVO_status;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«批次订单返回VO»» */
export interface IJSONResultPagingInformationBatchOrderReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationBatchOrderReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«批次订单返回VO» */
export interface IPagingInformationBatchOrderReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IBatchOrderIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationBatchOrderReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationBatchOrderReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 批次订单返回VO */
export interface IBatchOrderIsReturnedToVO {
    /** id */
    id?: number;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 来源批次号 */
    originalLotNo?: string;
    /** 对应生产订单id */
    produceOrderId?: string;
    /** 对应生产订单号 */
    produceOrderCode?: string;
    /** 对应销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 总数量 */
    totalCount?: number;
    /** 当前生产数量 */
    currentCount?: number;
    /** 总报废数量 */
    scrapTotalCount?: number;
    /** 实际剩余数量 */
    actualTotalCount?: number;
    /** 拆出数量 */
    changeTotalCount?: number;
    /** 生产工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 生产工艺路径名称 */
    produceTechnologyRoutingName?: string;
    /** 生产工艺路径编号 */
    produceTechnologyRoutingCode?: string;
    /** 当前流水类型(界面上的当前生产状态) */
    lastFlowType?: EBatchOrderIsReturnedToVO_lastFlowType;
    /** 当前流水类型描述 */
    lastFlowTypeDesc?: string;
    /** 当前对应工艺路径步骤id */
    lastProduceRoutingStepId?: number;
    /** 当前对应工序id */
    lastProcessId?: number;
    /** 当前对应工序名称 */
    lastProcessName?: string;
    /** 当前对应工序编号 */
    lastProcessCode?: string;
    /** 当前工艺步骤 - 用于展示工艺进度条 */
    lastRoutingStep?: number;
    /** 总工艺数 - 用于展示工艺进度条 */
    totalStepCount?: number;
    /** 状态 */
    status?: EBatchOrderIsReturnedToVO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 来源集 */
    sourceList?: IBatchOrderSourceReturnedToVO[];
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 批次订单二维码值 */
    lotOrderQrcode?: string;
}
/** 批次订单来源返回VO */
export interface IBatchOrderSourceReturnedToVO {
    /** 来源类型 */
    sourceType?: EBatchOrderSourceReturnedToVO_sourceType;
    /** 来源类型描述 */
    sourceTypeDesc?: string;
    /** 来源批次单号 */
    sourceLotNo?: string;
}

export enum EBatchOrderSearchVO_lastFlowType {
    /** 创建 */
    CREATED = "CREATED",
    /** 下发 */
    ISSUE = "ISSUE",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 报废 */
    SCRAP = "SCRAP",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 扣留 */
    HOLD = "HOLD",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 合并 */
    MARGE = "MARGE",
    /** 拆分 */
    SPLIT = "SPLIT",
    /** 转移 */
    TRANSFER = "TRANSFER",
    /** 切换工艺路径 */
    CHANGE_ROUTING = "CHANGE_ROUTING",
    /** 委外加工 */
    ENTRUST = "ENTRUST"
}

export enum EBatchOrderSearchVO_sourceType {
    /** 物料 */
    MAJOR_DATA = "MAJOR_DATA",
    /** 合并 */
    MARGE = "MARGE",
    /** 拆分 */
    SPLIT = "SPLIT",
    /** 转移 */
    TRANSFER = "TRANSFER"
}

export enum EBatchOrderSearchVO_status {
    /** 待生产 */
    CREATED = "CREATED",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 扣留中 */
    HOLD = "HOLD",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationBatchOrderReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationBatchOrderReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EBatchOrderIsReturnedToVO_lastFlowType {
    /** 创建 */
    CREATED = "CREATED",
    /** 下发 */
    ISSUE = "ISSUE",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 报废 */
    SCRAP = "SCRAP",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 扣留 */
    HOLD = "HOLD",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 合并 */
    MARGE = "MARGE",
    /** 拆分 */
    SPLIT = "SPLIT",
    /** 转移 */
    TRANSFER = "TRANSFER",
    /** 切换工艺路径 */
    CHANGE_ROUTING = "CHANGE_ROUTING",
    /** 委外加工 */
    ENTRUST = "ENTRUST"
}

export enum EBatchOrderIsReturnedToVO_status {
    /** 待生产 */
    CREATED = "CREATED",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 扣留中 */
    HOLD = "HOLD",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EBatchOrderSourceReturnedToVO_sourceType {
    /** 物料 */
    MAJOR_DATA = "MAJOR_DATA",
    /** 合并 */
    MARGE = "MARGE",
    /** 拆分 */
    SPLIT = "SPLIT",
    /** 转移 */
    TRANSFER = "TRANSFER"
}

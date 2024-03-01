import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产批次订单相关/getDetailByProduceOrderIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; produceOrderId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBatchOrderReturnsVO>(
        {
            url: "/masterdata-service/lotOrder/getDetailByProduceOrderId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«批次订单返回VO»» */
export interface IJSONResultListBatchOrderReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBatchOrderIsReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次订单返回VO */
export interface IBatchOrderIsReturnedToVO {
    /** 实际剩余数量 */
    actualTotalCount?: number;
    /** 拆出数量 */
    changeTotalCount?: number;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 当前生产数量 */
    currentCount?: number;
    /** id */
    id?: string;
    /** 当前流水类型(界面上的当前生产状态) */
    lastFlowType?: EBatchOrderIsReturnedToVO_lastFlowType;
    /** 当前流水类型描述 */
    lastFlowTypeDesc?: string;
    /** 当前对应工序编号 */
    lastProcessCode?: string;
    /** 当前对应工序id */
    lastProcessId?: string;
    /** 当前对应工序名称 */
    lastProcessName?: string;
    /** 当前对应工艺路径步骤id */
    lastProduceRoutingStepId?: string;
    /** 当前工艺步骤 - 用于展示工艺进度条 */
    lastRoutingStep?: number;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 批次订单二维码值 */
    lotOrderQrcode?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 来源批次号 */
    originalLotNo?: string;
    /** 对应生产订单号 */
    produceOrderCode?: string;
    /** 对应生产订单id */
    produceOrderId?: string;
    /** 生产工艺路径编号 */
    produceTechnologyRoutingCode?: string;
    /** 生产工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 生产工艺路径名称 */
    produceTechnologyRoutingName?: string;
    /** 对应销售订单号 */
    salesOrderCode?: string;
    /** 总报废数量 */
    scrapTotalCount?: number;
    /** 来源集 */
    sourceList?: IBatchOrderSourceReturnedToVO[];
    /** 状态 */
    status?: EBatchOrderIsReturnedToVO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 总数量 */
    totalCount?: number;
    /** 总工艺数 - 用于展示工艺进度条 */
    totalStepCount?: number;
}
/** 批次订单来源返回VO */
export interface IBatchOrderSourceReturnedToVO {
    /** 来源批次单号 */
    sourceLotNo?: string;
    /** 来源类型 */
    sourceType?: EBatchOrderSourceReturnedToVO_sourceType;
    /** 来源类型描述 */
    sourceTypeDesc?: string;
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

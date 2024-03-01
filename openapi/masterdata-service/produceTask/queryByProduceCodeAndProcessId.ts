import { http } from "@/api/http";

/**
* @author Tan peng
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/queryByProduceCodeAndProcessIdUsingGET
*/
export default function fetchMethod(options: { params: { processId?: string; produceOrderCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListProduceTaskVO>(
        {
            url: "/masterdata-service/produceTask/queryByProduceCodeAndProcessId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProduceTaskVO»» */
export interface IJSONResultListProduceTaskVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProduceTaskVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTaskVO */
export interface IProduceTaskVO {
    /** 实际开始时间 */
    actualBeginTime?: number;
    /** 实际结束时间 */
    actualEndTime?: number;
    /** 返工任务类型 */
    backType?: EProduceTaskVO_backType;
    /** 计划开始时间 */
    beginTime?: number;
    /** undefined */
    canMoveInQuantity?: number;
    /** undefined */
    canMoveOutQuantity?: number;
    /** undefined */
    canQualityQuantity?: number;
    /** 对应班组id */
    classGroupId?: string;
    /** 对应班次id */
    classShiftId?: string;
    /** 关闭原因 */
    closeRemark?: string;
    /** 关闭时间 */
    closeTime?: number;
    /** 关闭人 */
    closeUserId?: string;
    /** 当前完成数量 - 包含了产出 + 报废， */
    currentCompleteQuantity?: number;
    /** 当前生产数量 */
    currentProduceQuantity?: number;
    /** 当前报废数量 */
    currentScrapQuantity?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 所属企业id */
    enterpriseId?: string;
    /** 对应工厂日历id */
    factoryCalendarId?: string;
    /** id */
    id?: string;
    /** 任务下发方式 */
    issueType?: EProduceTaskVO_issueType;
    /** 对应物料bom库存详情 */
    materialBomDetails?: IProcessPathDetailsStepBomDetailsReturnToVO[];
    /** 对应物料id */
    materialId?: string;
    /** undefined */
    moveInKeyParameterFillNeeds?: EProduceTaskVO_moveInKeyParameterFillNeeds;
    /** undefined */
    moveOutKeyParameterFillNeeds?: EProduceTaskVO_moveOutKeyParameterFillNeeds;
    /** 计划生产数量 */
    planProduceQuantity?: number;
    /** 任务优先级，数值越大优先级越高 */
    priorityLevel?: number;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 对应生产处理id */
    produceHandleId?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 所属生产下发记录id */
    produceOrderIssueId?: string;
    /** 所属排产计划id */
    productionPlanId?: string;
    /** 备注 */
    remark?: string;
    /** 对应工艺路径编号 */
    routingCode?: string;
    /** 对应工艺路径id */
    routingId?: string;
    /** 对应工艺路径名称 */
    routingName?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 对应工艺路径步骤id */
    routingStepId?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 所属销售订单详情id */
    salesOrderDetailId?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 来源生产任务id */
    sourceProduceTaskId?: string;
    /** 状态 */
    status?: EProduceTaskVO_status;
    /** 任务号 */
    taskNo?: string;
    /** 任务类型 */
    type?: EProduceTaskVO_type;
}
/** 工艺路径详情步骤Bom明细返回VO */
export interface IProcessPathDetailsStepBomDetailsReturnToVO {
    /** 所属bom物料编号 */
    childMaterialCode?: string;
    /** 所属bom物料id */
    childMaterialId?: string;
    /** 所属bom物料名称 */
    childMaterialName?: string;
    /** id */
    id?: string;
    /** 所属主物料bom明细id */
    materialBomDetailId?: string;
    /** 总消耗 */
    totalConsumeCount?: number;
}

export enum EProduceTaskVO_backType {
    /** 接收方 */
    RECEIVE = "RECEIVE",
    /** 经过方 */
    PASS = "PASS"
}

export enum EProduceTaskVO_issueType {
    /** 排产下发 */
    PLAN = "PLAN",
    /** 直接下发 */
    DIRECT = "DIRECT"
}

export enum EProduceTaskVO_moveInKeyParameterFillNeeds {
    Y = "Y",
    N = "N"
}

export enum EProduceTaskVO_moveOutKeyParameterFillNeeds {
    Y = "Y",
    N = "N"
}

export enum EProduceTaskVO_status {
    /** 待处理 */
    WAIT = "WAIT",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 暂停中 */
    PAUSE = "PAUSE",
    /** 停止 */
    STOP = "STOP",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 已取消 */
    CANCEL = "CANCEL"
}

export enum EProduceTaskVO_type {
    /** 生产任务 */
    PRODUCE = "PRODUCE",
    /** 返工任务 */
    BACK = "BACK"
}

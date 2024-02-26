import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/queryByProduceCodeAndProcessIdUsingGET
*/
export default function fetchMethod(params: { processId: number; produceOrderCode: string }, extraOptions?: any) {
    return http<IJSONResultListProduceTaskVO>(
        {
            url: "/masterdata-service/produceTask/queryByProduceCodeAndProcessId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProduceTaskVO»» */
export interface IJSONResultListProduceTaskVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProduceTaskVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** ProduceTaskVO */
export interface IProduceTaskVO {
    /** id */
    id: number;
    /** 所属企业id */
    enterpriseId: number;
    /** 所属排产计划id */
    productionPlanId: number;
    /** 所属生产下发记录id */
    produceOrderIssueId: number;
    /** 来源生产任务id */
    sourceProduceTaskId: number;
    /** 任务号 */
    taskNo: string;
    /** 任务下发方式 */
    issueType: string;
    /** 任务类型 */
    type: string;
    /** 返工任务类型 */
    backType: string;
    /** 生产订单id */
    produceOrderId: number;
    /** 生产订单号 */
    produceOrderCode: string;
    /** 销售订单id */
    salesOrderId: number;
    /** 销售订单号 */
    salesOrderCode: string;
    /** 所属销售订单详情id */
    salesOrderDetailId: number;
    /** 对应物料id */
    materialId: number;
    /** 对应工艺路径id */
    routingId: number;
    /** 对应工艺路径名称 */
    routingName: string;
    /** 对应工艺路径编号 */
    routingCode: string;
    /** 对应工艺路径步骤id */
    routingStepId: number;
    /** 工艺路径步骤 */
    routingStep: number;
    /** 对应工序id */
    processId: number;
    /** 对应工序名称 */
    processName: string;
    /** 对应工序编号 */
    processCode: string;
    /** 对应工厂日历id */
    factoryCalendarId: number;
    /** 对应班组id */
    classGroupId: number;
    /** 对应班次id */
    classShiftId: number;
    /** 计划生产数量 */
    planProduceQuantity: number;
    /** 当前完成数量 - 包含了产出 + 报废， */
    currentCompleteQuantity: number;
    /** 当前生产数量 */
    currentProduceQuantity: number;
    /** 当前报废数量 */
    currentScrapQuantity: number;
    /** 计划开始时间 */
    beginTime: string;
    /** 计划结束时间 */
    endTime: string;
    /** 实际开始时间 */
    actualBeginTime: string;
    /** 实际结束时间 */
    actualEndTime: string;
    /** 备注 */
    remark: string;
    /** 状态 */
    status: string;
    /** 任务优先级，数值越大优先级越高 */
    priorityLevel: number;
    /** 对应生产处理id */
    produceHandleId: number;
    /** 关闭人 */
    closeUserId: number;
    /** 关闭时间 */
    closeTime: string;
    /** 关闭原因 */
    closeRemark: string;
    /** 对应物料bom库存详情 */
    materialBomDetails: IProcessPathDetailsStepBomDetailsReturnToVO[];
    /** undefined */
    canMoveInQuantity: number;
    /** undefined */
    canMoveOutQuantity: number;
    /** undefined */
    canQualityQuantity: number;
    /** undefined */
    moveInKeyParameterFillNeeds: string;
    /** undefined */
    moveOutKeyParameterFillNeeds: string;
}
/** 工艺路径详情步骤Bom明细返回VO */
export interface IProcessPathDetailsStepBomDetailsReturnToVO {
    /** id */
    id: number;
    /** 所属主物料bom明细id */
    materialBomDetailId: number;
    /** 所属bom物料id */
    childMaterialId: number;
    /** 所属bom物料名称 */
    childMaterialName: string;
    /** 所属bom物料编号 */
    childMaterialCode: string;
    /** 总消耗 */
    totalConsumeCount: number;
}

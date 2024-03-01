import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getScanProduceTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskQueryDTOForMobileEnd, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionTaskResponseDTOForMobile>(
        {
            url: "/masterdata-service/produceTask/getScanProduceTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务查询DTO(针对移动端) */
export interface IProductionTaskQueryDTOForMobileEnd {
    /** 开始时间 yyyy-MM-dd HH:mm:dd */
    beginTime?: string;
    /** 生产订单号/生产任务编号(扫码查询时默认为生产订单号) */
    codeSearch?: string;
    /** 结束时间 yyyy-MM-dd HH:mm:dd */
    endTime?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 物料id */
    materialIds?: string[];
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: EProductionTaskQueryDTOForMobileEnd_moveInKeyParameterFillNeeds;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: EProductionTaskQueryDTOForMobileEnd_moveOutKeyParameterFillNeeds;
    /** 生产任务可操作类型 */
    optTypes?: EProductionTaskQueryDTOForMobileEnd_optTypes_items[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 计划生产数量最高数量 */
    planProduceMaxQuantity?: number;
    /** 计划生产数量最低数量 */
    planProduceMinQuantity?: number;
    /** 工序id */
    processId: string;
    /** 工序id集合 */
    processIds?: string[];
    /** undefined */
    produceOrderIds?: string[];
    /** 生产订单字段搜索 */
    produceOrderSearchList?: IProcessDataDetailsSearchVO[];
    /** 查询类型 */
    queryType?: EProductionTaskQueryDTOForMobileEnd_queryType;
    /** 任务状态 */
    statusList?: EProductionTaskQueryDTOForMobileEnd_statusList_items[];
    /** 生产任务编号集合(扫码查询切换进出料查询时传参) */
    taskNos?: string[];
    /** 任务类型 */
    types?: EProductionTaskQueryDTOForMobileEnd_types_items[];
    /** undefined */
    userId?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索类型 */
    searchType: EProcessDataDetailsSearchVO_searchType;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
}
/** JSONResult«List«生产任务响应DTO(针对移动端)»» */
export interface IJSONResultListProductionTaskResponseDTOForMobile {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionTaskResponseDTOForMobile[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产任务响应DTO(针对移动端) */
export interface IProductionTaskResponseDTOForMobile {
    /** 实际开始时间 */
    actualBeginTime?: number;
    /** 实际结束时间 */
    actualEndTime?: number;
    /** 计划开始时间 */
    beginTime?: number;
    /** 可进料数量 */
    canMoveInQuantity?: number;
    /** 可出料数量 */
    canMoveOutQuantity?: number;
    /** 可操作项列表 */
    canOpItemList?: EProductionTaskResponseDTOForMobile_canOpItemList_items[];
    /** 可操作项列表拼接 */
    canOpItemListStr?: string;
    /** 可质检数量 */
    canQualityQuantity?: number;
    /** 可用数量 */
    canUseQuantity?: number;
    /** 对应班组编号 */
    classGroupCode?: string;
    /** 对应班组id */
    classGroupId?: string;
    /** 对应班组名称 */
    classGroupName?: string;
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 对应班次id */
    classShiftId?: string;
    /** 对应班次名称 */
    classShiftName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 当前完成数量 */
    currentCompleteQuantity?: number;
    /** 当前进料总数 */
    currentMoveInQuantity?: number;
    /** 当前生产数量 */
    currentProduceQuantity?: number;
    /** 当前报废数量 */
    currentScrapQuantity?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** id */
    id?: string;
    /** 当前任务WIP是否有物料 */
    isWip?: EProductionTaskResponseDTOForMobile_isWip;
    /** 对应上工序编号 */
    lastProcessCode?: string;
    /** 对应上工序id */
    lastProcessId?: string;
    /** 对应上工序名称 */
    lastProcessName?: string;
    /** 对应前生产工艺路径步骤id */
    lastProduceTechnologyRoutingStepId?: string;
    /** 对应上工序步骤 */
    lastRoutingStep?: number;
    /** 批次数量 */
    lotOrderNumber?: number;
    /** 批次信息 */
    lotOrders?: IProductionTaskBatchResponseDTOForMobileEnd[];
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: EProductionTaskResponseDTOForMobile_moveInKeyParameterFillNeeds;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: EProductionTaskResponseDTOForMobile_moveOutKeyParameterFillNeeds;
    /** 当前还需进料数 */
    needMoveInQuantity?: number;
    /** 计划生产数量 */
    planProduceQuantity?: number;
    /** 任务优先级 */
    priorityLevel?: number;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 生产订单 */
    produceOrder?: Record<string, Record<string, any>>;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 对应工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 对应工艺路径步骤id */
    produceTechnologyRoutingStepId?: string;
    /** 对应生产工艺路径编号 */
    routingCode?: string;
    /** 对应生产工艺路径名称 */
    routingName?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 状态 */
    status?: EProductionTaskResponseDTOForMobile_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 当前步骤配置信息 - 用于前端判断各种情况逻辑 */
    stepSetInfo?: IProductionProcessPathStepSettingsReturnVO;
    /** 任务号 */
    taskNo?: string;
    /** 任务类型 */
    type?: EProductionTaskResponseDTOForMobile_type;
    /** 任务类型描述 */
    typeDesc?: string;
}
/** 生产任务批次响应DTO(针对移动端) */
export interface IProductionTaskBatchResponseDTOForMobileEnd {
    /** 批次id */
    lotId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 批次总数量 */
    totalCount?: number;
}
/** 生产工艺路径步骤设置返回VO */
export interface IProductionProcessPathStepSettingsReturnVO {
    /** 是否允许直接出站 */
    allowDirectExit?: EProductionProcessPathStepSettingsReturnVO_allowDirectExit;
    /** 进料时是否允许拆分批次 */
    allowSplitLot?: EProductionProcessPathStepSettingsReturnVO_allowSplitLot;
    /** 进料时是否自动带入上一次录入消耗物料信息 */
    autoBringOutLastBomConsume?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastBomConsume;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastDevice?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastDevice;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastMold?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastMold;
    /** 是否有设备 */
    enableDevice?: EProductionProcessPathStepSettingsReturnVO_enableDevice;
    /** 启用外部码 */
    enableExternalCode?: EProductionProcessPathStepSettingsReturnVO_enableExternalCode;
    /** 启用批次 */
    enableLot?: EProductionProcessPathStepSettingsReturnVO_enableLot;
    /** 是否有模具 */
    enableMold?: EProductionProcessPathStepSettingsReturnVO_enableMold;
    /** 是否有进料bom消耗 */
    enableMoveInBomConsume?: EProductionProcessPathStepSettingsReturnVO_enableMoveInBomConsume;
    /** 是否有进站关键参数 */
    enableMoveInKeyParameter?: EProductionProcessPathStepSettingsReturnVO_enableMoveInKeyParameter;
    /** 是否有出料bom消耗 */
    enableMoveOutBomConsume?: EProductionProcessPathStepSettingsReturnVO_enableMoveOutBomConsume;
    /** 是否有出站关键参数 */
    enableMoveOutKeyParameter?: EProductionProcessPathStepSettingsReturnVO_enableMoveOutKeyParameter;
    /** 启用质量追溯 */
    enableQualityTraceability?: EProductionProcessPathStepSettingsReturnVO_enableQualityTraceability;
    /** 启用序列号 */
    enableSerialNo?: EProductionProcessPathStepSettingsReturnVO_enableSerialNo;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: string;
    /** 是否强制拆分批次 */
    forcedSplitLot?: EProductionProcessPathStepSettingsReturnVO_forcedSplitLot;
    /** id */
    id?: string;
    /** 进出站方式 */
    inOutType?: EProductionProcessPathStepSettingsReturnVO_inOutType;
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: EProductionProcessPathStepSettingsReturnVO_isGtPlannedQuantity;
    /** 进料时是否需要确认进料数量 */
    needConfirmMoveInQuantity?: EProductionProcessPathStepSettingsReturnVO_needConfirmMoveInQuantity;
}

export enum EProductionTaskQueryDTOForMobileEnd_moveInKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskQueryDTOForMobileEnd_moveOutKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskQueryDTOForMobileEnd_optTypes_items {
    CAN_MOVE_IN = "CAN_MOVE_IN",
    CAN_QUALITY = "CAN_QUALITY",
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EProductionTaskQueryDTOForMobileEnd_queryType {
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 设备 */
    DEVICE = "DEVICE",
    /** 模具 */
    MOLD = "MOLD"
}

export enum EProductionTaskQueryDTOForMobileEnd_statusList_items {
    WAIT = "WAIT",
    PRODUCE = "PRODUCE",
    PAUSE = "PAUSE",
    STOP = "STOP",
    CLOSE = "CLOSE",
    CANCEL = "CANCEL"
}

export enum EProductionTaskQueryDTOForMobileEnd_types_items {
    PRODUCE = "PRODUCE",
    BACK = "BACK"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessDataDetailsSearchVO_searchType {
    NONE = "NONE",
    EQ = "EQ",
    LIKE = "LIKE",
    RANGE = "RANGE",
    SELECTOR = "SELECTOR",
    IS_NULL = "IS_NULL",
    NOT_NULL = "NOT_NULL",
    NE = "NE",
    REGEXP = "REGEXP"
}

export enum EProductionTaskResponseDTOForMobile_canOpItemList_items {
    CAN_MOVE_IN = "CAN_MOVE_IN",
    CAN_QUALITY = "CAN_QUALITY",
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EProductionTaskResponseDTOForMobile_isWip {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskResponseDTOForMobile_moveInKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskResponseDTOForMobile_moveOutKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskResponseDTOForMobile_status {
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

export enum EProductionTaskResponseDTOForMobile_type {
    /** 生产任务 */
    PRODUCE = "PRODUCE",
    /** 返工任务 */
    BACK = "BACK"
}

export enum EProductionProcessPathStepSettingsReturnVO_allowDirectExit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_allowSplitLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastBomConsume {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastDevice {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastMold {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableDevice {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableExternalCode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMold {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveInBomConsume {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveInKeyParameter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveOutBomConsume {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveOutKeyParameter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_forcedSplitLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_inOutType {
    /** 部分进出 */
    PART = "PART",
    /** 整进整出 */
    ALL = "ALL"
}

export enum EProductionProcessPathStepSettingsReturnVO_isGtPlannedQuantity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_needConfirmMoveInQuantity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

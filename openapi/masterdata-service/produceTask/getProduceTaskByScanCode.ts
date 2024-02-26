import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/getProduceTaskByScanCodeUsingPOST
*/
export default function fetchMethod(data: IProductionTaskScanCodeQueryDtosForMobileTerminals, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultProductionTaskScanResponseDTOForMobileTerminals>(
        {
            url: "/masterdata-service/produceTask/getProduceTaskByScanCode",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 生产任务扫码查询DTO(针对移动端) */
export interface IProductionTaskScanCodeQueryDtosForMobileTerminals {
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys: string[];
    /** 任务类型 */
    types: string[];
    /** 导出字段集 */
    exportFields: string[];
    /** 扫描类型 */
    scanNoType: string;
    /** 生产任务可操作类型 */
    optTypes: string[];
    /** 工序id */
    processId: number;
    /** 生产订单号/生产任务编号(扫码查询时默认为生产订单号) */
    codeSearch: string;
    /** 物料id */
    materialIds: number[];
    /** 任务状态 */
    statusList: string[];
    /** 生产任务编号集合(扫码查询切换进出料查询时传参) */
    taskNos: string[];
    /** 工序id集合 */
    processIds: number[];
    /** 开始时间 yyyy-MM-dd HH:mm:dd */
    beginTime: string;
    /** 计划生产数量最低数量 */
    planProduceMinQuantity: number;
    /** 结束时间 yyyy-MM-dd HH:mm:dd */
    endTime: string;
    /** 计划生产数量最高数量 */
    planProduceMaxQuantity: number;
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds: string;
    /** 查询类型 */
    queryType: string;
    /** undefined */
    produceOrderIds: number[];
    /** undefined */
    userId: number;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds: string;
    /** 生产订单字段搜索 */
    produceOrderSearchList: IProcessDataDetailsSearchVO[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column: string;
    /** 是否正序排列，默认Y */
    isAsc: string;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: string;
    /** 搜索文本 - 针对文本搜索 */
    text: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors: Record<string, any>[];
    /** 表格编码 */
    tableCode: string;
}
/** JSONResult«生产任务扫码响应DTO(针对移动端)» */
export interface IJSONResultProductionTaskScanResponseDTOForMobileTerminals {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProductionTaskCodeScanResponseDTOForMobileTerminals;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 生产任务扫码响应DTO(针对移动端) */
export interface IProductionTaskCodeScanResponseDTOForMobileTerminals {
    /** 扫描编号 */
    scanNo: string;
    /** 识别任务号 */
    identifyTaskNo: string;
    /** 扫描编号类型 */
    scanNoTypes: string[];
    /** 是否扫描成功 */
    scanSuccess: string;
    /** 扫描失败类型 */
    scanFailType: string;
    /** 任务列表 */
    produceTasks: IProductionTaskResponseDTOForMobile[];
}
/** 生产任务响应DTO(针对移动端) */
export interface IProductionTaskResponseDTOForMobile {
    /** id */
    id: number;
    /** 任务号 */
    taskNo: string;
    /** 任务类型 */
    type: string;
    /** 任务类型描述 */
    typeDesc: string;
    /** 生产订单id */
    produceOrderId: number;
    /** 生产订单号 */
    produceOrderCode: string;
    /** 销售订单号 */
    salesOrderCode: string;
    /** 对应物料id */
    materialId: number;
    /** 对应物料名称 */
    materialName: string;
    /** 对应物料编号 */
    materialCode: string;
    /** 对应物料单位 */
    materialUnit: string;
    /** 对应工艺路径id */
    produceTechnologyRoutingId: number;
    /** 对应工艺路径步骤id */
    produceTechnologyRoutingStepId: number;
    /** 对应生产工艺路径名称 */
    routingName: string;
    /** 对应生产工艺路径编号 */
    routingCode: string;
    /** 工艺路径步骤 */
    routingStep: number;
    /** 对应工序id */
    processId: number;
    /** 对应工序名称 */
    processName: string;
    /** 对应工序编号 */
    processCode: string;
    /** 对应前生产工艺路径步骤id */
    lastProduceTechnologyRoutingStepId: number;
    /** 对应上工序步骤 */
    lastRoutingStep: number;
    /** 对应上工序id */
    lastProcessId: number;
    /** 对应上工序名称 */
    lastProcessName: string;
    /** 对应上工序编号 */
    lastProcessCode: string;
    /** 对应班次id */
    classShiftId: number;
    /** 对应班次名称 */
    classShiftName: string;
    /** 对应班次编号 */
    classShiftCode: string;
    /** 对应班组id */
    classGroupId: number;
    /** 对应班组名称 */
    classGroupName: string;
    /** 对应班组编号 */
    classGroupCode: string;
    /** 计划生产数量 */
    planProduceQuantity: number;
    /** 当前完成数量 */
    currentCompleteQuantity: number;
    /** 当前生产数量 */
    currentProduceQuantity: number;
    /** 当前报废数量 */
    currentScrapQuantity: number;
    /** 可用数量 */
    canUseQuantity: number;
    /** 计划开始时间 */
    beginTime: string;
    /** 计划结束时间 */
    endTime: string;
    /** 实际开始时间 */
    actualBeginTime: string;
    /** 实际结束时间 */
    actualEndTime: string;
    /** 状态 */
    status: string;
    /** 状态描述 */
    statusDesc: string;
    /** 任务优先级 */
    priorityLevel: number;
    /** 当前任务WIP是否有物料 */
    isWip: string;
    /** 可操作项列表 */
    canOpItemList: string[];
    /** 可操作项列表拼接 */
    canOpItemListStr: string;
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds: string;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds: string;
    /** 当前进料总数 */
    currentMoveInQuantity: number;
    /** 当前还需进料数 */
    needMoveInQuantity: number;
    /** 可进料数量 */
    canMoveInQuantity: number;
    /** 可出料数量 */
    canMoveOutQuantity: number;
    /** 可质检数量 */
    canQualityQuantity: number;
    /** 创建时间 */
    createTime: string;
    /** 生产订单 */
    produceOrder: Record<string, Record<string, any>>;
    /** 批次信息 */
    lotOrders: IProductionTaskBatchResponseDTOForMobileEnd[];
    /** 批次数量 */
    lotOrderNumber: number;
    /** 当前步骤配置信息 - 用于前端判断各种情况逻辑 */
    stepSetInfo: IProductionProcessPathStepSettingsReturnVO;
}
/** 生产任务批次响应DTO(针对移动端) */
export interface IProductionTaskBatchResponseDTOForMobileEnd {
    /** 批次id */
    lotId: number;
    /** 批次号 */
    lotNo: string;
    /** 批次总数量 */
    totalCount: number;
}
/** 生产工艺路径步骤设置返回VO */
export interface IProductionProcessPathStepSettingsReturnVO {
    /** id */
    id: number;
    /** 进出站方式 */
    inOutType: string;
    /** 是否允许直接出站 */
    allowDirectExit: string;
    /** 进料时是否需要确认进料数量 */
    needConfirmMoveInQuantity: string;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastMold: string;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastDevice: string;
    /** 进料时是否自动带入上一次录入消耗物料信息 */
    autoBringOutLastBomConsume: string;
    /** 进料时是否允许拆分批次 */
    allowSplitLot: string;
    /** 是否强制拆分批次 */
    forcedSplitLot: string;
    /** 启用质量追溯 */
    enableQualityTraceability: string;
    /** 启用批次 */
    enableLot: string;
    /** 启用序列号 */
    enableSerialNo: string;
    /** 启用外部码 */
    enableExternalCode: string;
    /** 外部码字段名称 */
    externalCodeFieldName: string;
    /** 外部码长度 */
    externalCodeLength: number;
    /** 是否有设备 */
    enableDevice: string;
    /** 是否有模具 */
    enableMold: string;
    /** 是否有进料bom消耗 */
    enableMoveInBomConsume: string;
    /** 是否有出料bom消耗 */
    enableMoveOutBomConsume: string;
    /** 是否有进站关键参数 */
    enableMoveInKeyParameter: string;
    /** 是否有出站关键参数 */
    enableMoveOutKeyParameter: string;
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity: string;
}

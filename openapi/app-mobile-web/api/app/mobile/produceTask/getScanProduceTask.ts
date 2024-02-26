import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产任务相关/getScanProduceTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskQueryDTOForMobileEnd }, extraOptions?: any) {
    return http<IJSONResultListProductionTaskResponseDTOForMobile>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/getScanProduceTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务查询DTO(针对移动端) */
export interface IProductionTaskQueryDTOForMobileEnd {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 任务类型 */
    types?: ('PRODUCE' | 'BACK')[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 生产任务可操作类型 */
    optTypes?: ('CAN_MOVE_IN' | 'CAN_QUALITY' | 'CAN_MOVE_OUT')[];
    /** 工序id */
    processId: number;
    /** 生产订单号/生产任务编号(扫码查询时默认为生产订单号) */
    codeSearch?: string;
    /** 物料id */
    materialIds?: number[];
    /** 任务状态 */
    statusList?: ('WAIT' | 'PRODUCE' | 'PAUSE' | 'STOP' | 'CLOSE' | 'CANCEL')[];
    /** 工序id集合 */
    processIds?: number[];
    /** 开始时间 yyyy-MM-dd HH:mm:dd */
    beginTime?: string;
    /** 结束时间 yyyy-MM-dd HH:mm:dd */
    endTime?: string;
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: ('Y' | 'N');
    /** 生产任务编号集合(扫码查询切换进出料查询时传参) */
    taskNos?: string[];
    /** 计划生产数量最低数量 */
    planProduceMinQuantity?: number;
    /** undefined */
    produceOrderIds?: number[];
    /** 计划生产数量最高数量 */
    planProduceMaxQuantity?: number;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: ('Y' | 'N');
    /** 生产订单字段搜索 */
    produceOrderSearchList?: IProcessDataDetailsSearchVO[];
    /** 查询类型 */
    queryType?: ('MOVE_IN' | 'MOVE_OUT' | 'DEVICE' | 'MOLD');
    /** undefined */
    userId?: number;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: ('Y' | 'N');
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: ('NONE' | 'EQ' | 'LIKE' | 'RANGE' | 'SELECTOR' | 'IS_NULL' | 'NOT_NULL' | 'NE' | 'REGEXP');
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** JSONResult«List«生产任务响应DTO(针对移动端)»» */
export interface IJSONResultListProductionTaskResponseDTOForMobile {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionTaskResponseDTOForMobile[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产任务响应DTO(针对移动端) */
export interface IProductionTaskResponseDTOForMobile {
    /** id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 任务类型 */
    type?: ('PRODUCE' | 'BACK');
    /** 任务类型描述 */
    typeDesc?: string;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 对应工艺路径步骤id */
    produceTechnologyRoutingStepId?: number;
    /** 对应生产工艺路径名称 */
    routingName?: string;
    /** 对应生产工艺路径编号 */
    routingCode?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 对应工序id */
    processId?: number;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应前生产工艺路径步骤id */
    lastProduceTechnologyRoutingStepId?: number;
    /** 对应上工序步骤 */
    lastRoutingStep?: number;
    /** 对应上工序id */
    lastProcessId?: number;
    /** 对应上工序名称 */
    lastProcessName?: string;
    /** 对应上工序编号 */
    lastProcessCode?: string;
    /** 对应班次id */
    classShiftId?: number;
    /** 对应班次名称 */
    classShiftName?: string;
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 对应班组id */
    classGroupId?: number;
    /** 对应班组名称 */
    classGroupName?: string;
    /** 对应班组编号 */
    classGroupCode?: string;
    /** 计划生产数量 */
    planProduceQuantity?: number;
    /** 当前完成数量 */
    currentCompleteQuantity?: number;
    /** 当前生产数量 */
    currentProduceQuantity?: number;
    /** 当前报废数量 */
    currentScrapQuantity?: number;
    /** 可用数量 */
    canUseQuantity?: number;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 实际开始时间 */
    actualBeginTime?: string;
    /** 实际结束时间 */
    actualEndTime?: string;
    /** 状态 */
    status?: ('WAIT' | 'PRODUCE' | 'PAUSE' | 'STOP' | 'CLOSE' | 'CANCEL');
    /** 状态描述 */
    statusDesc?: string;
    /** 任务优先级 */
    priorityLevel?: number;
    /** 当前任务WIP是否有物料 */
    isWip?: ('Y' | 'N');
    /** 可操作项列表 */
    canOpItemList?: ('CAN_MOVE_IN' | 'CAN_QUALITY' | 'CAN_MOVE_OUT')[];
    /** 可操作项列表拼接 */
    canOpItemListStr?: string;
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: ('Y' | 'N');
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: ('Y' | 'N');
    /** 当前进料总数 */
    currentMoveInQuantity?: number;
    /** 当前还需进料数 */
    needMoveInQuantity?: number;
    /** 可进料数量 */
    canMoveInQuantity?: number;
    /** 可出料数量 */
    canMoveOutQuantity?: number;
    /** 可质检数量 */
    canQualityQuantity?: number;
    /** 创建时间 */
    createTime?: string;
    /** 生产订单 */
    produceOrder?: Record<string, Record<string, any>>;
    /** 批次信息 */
    lotOrders?: IProductionTaskBatchResponseDTOForMobileEnd[];
    /** 批次数量 */
    lotOrderNumber?: number;
    /** 当前步骤配置信息 - 用于前端判断各种情况逻辑 */
    stepSetInfo?: IProductionProcessPathStepSettingsReturnVO;
}
/** 生产任务批次响应DTO(针对移动端) */
export interface IProductionTaskBatchResponseDTOForMobileEnd {
    /** 批次id */
    lotId?: number;
    /** 批次号 */
    lotNo?: string;
    /** 批次总数量 */
    totalCount?: number;
}
/** 生产工艺路径步骤设置返回VO */
export interface IProductionProcessPathStepSettingsReturnVO {
    /** id */
    id?: number;
    /** 进出站方式 */
    inOutType?: ('PART' | 'ALL');
    /** 是否允许直接出站 */
    allowDirectExit?: ('Y' | 'N');
    /** 进料时是否需要确认进料数量 */
    needConfirmMoveInQuantity?: ('Y' | 'N');
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastMold?: ('Y' | 'N');
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastDevice?: ('Y' | 'N');
    /** 进料时是否自动带入上一次录入消耗物料信息 */
    autoBringOutLastBomConsume?: ('Y' | 'N');
    /** 进料时是否允许拆分批次 */
    allowSplitLot?: ('Y' | 'N');
    /** 是否强制拆分批次 */
    forcedSplitLot?: ('Y' | 'N');
    /** 启用质量追溯 */
    enableQualityTraceability?: ('Y' | 'N');
    /** 启用批次 */
    enableLot?: ('Y' | 'N');
    /** 启用序列号 */
    enableSerialNo?: ('Y' | 'N');
    /** 启用外部码 */
    enableExternalCode?: ('Y' | 'N');
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: number;
    /** 是否有设备 */
    enableDevice?: ('Y' | 'N');
    /** 是否有模具 */
    enableMold?: ('Y' | 'N');
    /** 是否有进料bom消耗 */
    enableMoveInBomConsume?: ('Y' | 'N');
    /** 是否有出料bom消耗 */
    enableMoveOutBomConsume?: ('Y' | 'N');
    /** 是否有进站关键参数 */
    enableMoveInKeyParameter?: ('Y' | 'N');
    /** 是否有出站关键参数 */
    enableMoveOutKeyParameter?: ('Y' | 'N');
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: ('Y' | 'N');
}

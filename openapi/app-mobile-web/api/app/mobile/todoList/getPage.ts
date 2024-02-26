import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/待办相关/getPageUsingPOST_2
*/
export default function fetchMethod(options: { data: IToDoListSearchVO }, extraOptions?: any) {
    return http<IJSONResultPageInformationBacklogReturnsVO>(
        {
            url: "/app-mobile-web/api/app/mobile/todoList/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 待办事项搜索VO */
export interface IToDoListSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 创建时间 - 开始 yyyy-MM-dd HH:mm:ss */
    createBeginTime?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 查询状态 */
    queryStatus?: string;
    /** 创建时间 - 结束 yyyy-MM-dd HH:mm:ss */
    createEndTime?: string;
    /** 任务状态查询集合 */
    taskStatus?: string[];
    /** 应用名称或单据编号 */
    nameOrCode?: string;
    /** 应用ID */
    flowPathId?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«分页信息«待办事项返回VO»» */
export interface IJSONResultPageInformationBacklogReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationBacklogReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«待办事项返回VO» */
export interface IPageInformationBacklogReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IBacklogReturnsToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 待办事项返回VO */
export interface IBacklogReturnsToVO {
    /** id */
    id?: number;
    /** 所属用户id */
    userId?: number;
    /** 单据名称 */
    flowPathName?: string;
    /** 节点名称 */
    flowPathNodeName?: string;
    /** 待办编号 */
    code?: string;
    /** 类型 */
    type?: string;
    /** 单据id */
    flowPathWorkOrderId?: number;
    /** 单据编号 */
    flowPathWorkOrderCode?: string;
    /** 任务开始时间 */
    planBeginTime?: string;
    /** 预计结束时间（截止时间） */
    planEndTime?: string;
    /** 对应业务id */
    businessId?: number;
    /** 状态 */
    status?: string;
    /** 状态描述 */
    statusDesc?: string;
    /** 节点处理状态描述 */
    flowPathNodeHandleStatus?: string;
    /** 完成时间 */
    completeTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人名称 */
    createUsername?: string;
    /** 自定义字段 */
    customValues?: IWorkOrderDetailsReturnInformationVO[];
    /** 当前处理人集合 */
    currentHandleUsers?: IProcessNodeExecutorVO[];
    /** 是否超时 */
    isTimeout?: string;
    /** 待办业务类型 */
    businessType?: string;
    /** 生产任务是否为返工 */
    produceTaskIsBack?: string;
    /** 当前完成数量 */
    currentCompleteQuantity?: number;
    /** 计划数量 */
    planQuantity?: number;
    /** 物料名称 */
    materialName?: string;
    /** 盘点范围 */
    storageTakeCheckScope?: string;
    /** 是否能跳转 */
    canRedirect?: string;
    /** pc端跳转路径 */
    webPath?: string;
    /** 移动端跳转路径 */
    mobilePath?: string;
    /** 生产任务状态 */
    produceTaskStatus?: string;
    /** 生产任务状态描述 */
    produceTaskStatusDesc?: string;
    /** 质检任务状态 */
    qualityTaskStatus?: string;
    /** 质检任务状态描述 */
    qualityTaskStatusDesc?: string;
    /** 所属流程节点id */
    flowPathNodeId?: number;
    /** 流程id */
    flowPathId?: number;
    /** produceTask */
    produceTask?: ITheProductionTaskIsReturnedToTheDTOForTheBacklog;
    /** 标题 */
    title?: string;
    /** 表头 */
    tableHeaderList?: ITableheaderdto[];
    /** 表数据 */
    tableDataList?: ITabledatadto[];
}
/** 工单明细数据返回信息VO */
export interface IWorkOrderDetailsReturnInformationVO {
    /** 列code */
    code?: string;
    /** 列值 */
    value?: Record<string, any>;
}
/** 流程节点执行人VO */
export interface IProcessNodeExecutorVO {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 执行人id */
    executorId?: number;
    /** 执行人类型 */
    executorType?: string;
    /** 执行人系统控件类型 */
    executorSysType?: string;
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
    /** flowPathId */
    flowPathId?: number;
    /** 节点ID */
    flowPathNodeId?: number;
}
/** 生产任务针对待办返回DTO */
export interface ITheProductionTaskIsReturnedToTheDTOForTheBacklog {
    /** id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 任务类型 */
    type?: string;
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
    status?: string;
    /** 状态描述 */
    statusDesc?: string;
    /** 任务优先级 */
    priorityLevel?: number;
    /** 当前任务WIP是否有物料 */
    isWip?: string;
    /** 可操作项列表 */
    canOpItemList?: string[];
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: string;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: string;
    /** 当前进料总数 */
    currentMoveInQuantity?: number;
    /** 当前还需进料数 */
    needMoveInQuantity?: number;
    /** 可进料数量 */
    canMoveInQuantity?: number;
    /** 可出料数量 */
    canMoveOutQuantity?: number;
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
    inOutType?: string;
    /** 是否允许直接出站 */
    allowDirectExit?: string;
    /** 进料时是否需要确认进料数量 */
    needConfirmMoveInQuantity?: string;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastMold?: string;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastDevice?: string;
    /** 进料时是否自动带入上一次录入消耗物料信息 */
    autoBringOutLastBomConsume?: string;
    /** 进料时是否允许拆分批次 */
    allowSplitLot?: string;
    /** 是否强制拆分批次 */
    forcedSplitLot?: string;
    /** 启用质量追溯 */
    enableQualityTraceability?: string;
    /** 启用批次 */
    enableLot?: string;
    /** 启用序列号 */
    enableSerialNo?: string;
    /** 启用外部码 */
    enableExternalCode?: string;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: number;
    /** 是否有设备 */
    enableDevice?: string;
    /** 是否有模具 */
    enableMold?: string;
    /** 是否有进料bom消耗 */
    enableMoveInBomConsume?: string;
    /** 是否有出料bom消耗 */
    enableMoveOutBomConsume?: string;
    /** 是否有进站关键参数 */
    enableMoveInKeyParameter?: string;
    /** 是否有出站关键参数 */
    enableMoveOutKeyParameter?: string;
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: string;
}
/** TableHeaderDTO */
export interface ITableheaderdto {
    /** undefined */
    serialNo?: string;
    /** undefined */
    name?: string;
}
/** TableDataDTO */
export interface ITabledatadto {
    /** undefined */
    serialNo?: string;
    /** undefined */
    showValue?: string;
}

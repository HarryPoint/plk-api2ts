import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/getListForStaffUsingPOST
*/
export default function fetchMethod(options: { data: IToDoListSearchVO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultListMobileReturnToTheDTO>(
        {
            url: "/todo-service/todoList/getListForStaff",
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
    queryStatus?: EToDoListSearchVO_queryStatus;
    /** 创建时间 - 结束 yyyy-MM-dd HH:mm:ss */
    createEndTime?: string;
    /** 任务状态查询集合 */
    taskStatus?: string[];
    /** 应用名称或单据编号 */
    nameOrCode?: string;
    /** 应用ID */
    flowPathId?: string;
    /** 应用ID列表 */
    flowPathIdList?: string[];
    /** 忽略应用ID列表 */
    ignoreFlowPathIdList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«待办事项移动端返回DTO»» */
export interface IJSONResultListMobileReturnToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IToDoMobileReturnsDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 待办事项移动端返回DTO */
export interface IToDoMobileReturnsDTO {
    /** id */
    id?: string;
    /** 所属用户id */
    userId?: string;
    /** 单据名称 */
    flowPathName?: string;
    /** 节点名称 */
    flowPathNodeName?: string;
    /** 待办编号 */
    code?: string;
    /** 单据id */
    flowPathWorkOrderId?: string;
    /** 单据编号 */
    flowPathWorkOrderCode?: string;
    /** 任务开始时间 */
    planBeginTime?: number;
    /** 预计结束时间（截止时间） */
    planEndTime?: number;
    /** 对应业务id */
    businessId?: string;
    /** 状态 */
    status?: EToDoMobileReturnsDTO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 节点处理状态描述 */
    flowPathNodeHandleStatus?: string;
    /** 完成时间 */
    completeTime?: number;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 自定义字段 */
    customValues?: IWorkOrderDetailsReturnInformationVO[];
    /** 当前处理人集合 */
    currentHandleUsers?: IProcessNodeExecutorVO[];
    /** 是否超时 */
    isTimeout?: EToDoMobileReturnsDTO_isTimeout;
    /** 待办业务类型 */
    businessType?: EToDoMobileReturnsDTO_businessType;
    /** 生产任务是否为返工 */
    produceTaskIsBack?: EToDoMobileReturnsDTO_produceTaskIsBack;
    /** 当前完成数量 */
    currentCompleteQuantity?: number;
    /** 计划数量 */
    planQuantity?: number;
    /** 物料名称 */
    materialName?: string;
    /** 盘点范围 */
    storageTakeCheckScope?: string;
    /** 是否能跳转 */
    canRedirect?: EToDoMobileReturnsDTO_canRedirect;
    /** pc端跳转路径 */
    webPath?: string;
    /** 移动端跳转路径 */
    mobilePath?: string;
    /** 生产任务状态 */
    produceTaskStatus?: EToDoMobileReturnsDTO_produceTaskStatus;
    /** 生产任务状态描述 */
    produceTaskStatusDesc?: string;
    /** 质检任务状态 */
    qualityTaskStatus?: EToDoMobileReturnsDTO_qualityTaskStatus;
    /** 质检任务状态描述 */
    qualityTaskStatusDesc?: string;
    /** 所属流程节点id */
    flowPathNodeId?: string;
    /** 流程id */
    flowPathId?: string;
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
    id?: string;
    /** 名称 */
    name?: string;
    /** 执行人id */
    executorId?: string;
    /** 执行人类型 */
    executorType?: EProcessNodeExecutorVO_executorType;
    /** 执行人系统控件类型 */
    executorSysType?: EProcessNodeExecutorVO_executorSysType;
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
    /** flowPathId */
    flowPathId?: string;
    /** 节点ID */
    flowPathNodeId?: string;
}
/** 生产任务针对待办返回DTO */
export interface ITheProductionTaskIsReturnedToTheDTOForTheBacklog {
    /** id */
    id?: string;
    /** 任务号 */
    taskNo?: string;
    /** 任务类型 */
    type?: ETheProductionTaskIsReturnedToTheDTOForTheBacklog_type;
    /** 任务类型描述 */
    typeDesc?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 对应工艺路径步骤id */
    produceTechnologyRoutingStepId?: string;
    /** 对应生产工艺路径名称 */
    routingName?: string;
    /** 对应生产工艺路径编号 */
    routingCode?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应前生产工艺路径步骤id */
    lastProduceTechnologyRoutingStepId?: string;
    /** 对应上工序步骤 */
    lastRoutingStep?: number;
    /** 对应上工序id */
    lastProcessId?: string;
    /** 对应上工序名称 */
    lastProcessName?: string;
    /** 对应上工序编号 */
    lastProcessCode?: string;
    /** 对应班次id */
    classShiftId?: string;
    /** 对应班次名称 */
    classShiftName?: string;
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 对应班组id */
    classGroupId?: string;
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
    beginTime?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 实际开始时间 */
    actualBeginTime?: number;
    /** 实际结束时间 */
    actualEndTime?: number;
    /** 状态 */
    status?: ETheProductionTaskIsReturnedToTheDTOForTheBacklog_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 任务优先级 */
    priorityLevel?: number;
    /** 当前任务WIP是否有物料 */
    isWip?: ETheProductionTaskIsReturnedToTheDTOForTheBacklog_isWip;
    /** 可操作项列表 */
    canOpItemList?: string[];
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: ETheProductionTaskIsReturnedToTheDTOForTheBacklog_moveInKeyParameterFillNeeds;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: ETheProductionTaskIsReturnedToTheDTOForTheBacklog_moveOutKeyParameterFillNeeds;
    /** 当前进料总数 */
    currentMoveInQuantity?: number;
    /** 当前还需进料数 */
    needMoveInQuantity?: number;
    /** 可进料数量 */
    canMoveInQuantity?: number;
    /** 可出料数量 */
    canMoveOutQuantity?: number;
    /** 创建时间 */
    createTime?: number;
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
    lotId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 批次总数量 */
    totalCount?: number;
}
/** 生产工艺路径步骤设置返回VO */
export interface IProductionProcessPathStepSettingsReturnVO {
    /** id */
    id?: string;
    /** 进出站方式 */
    inOutType?: EProductionProcessPathStepSettingsReturnVO_inOutType;
    /** 是否允许直接出站 */
    allowDirectExit?: EProductionProcessPathStepSettingsReturnVO_allowDirectExit;
    /** 进料时是否需要确认进料数量 */
    needConfirmMoveInQuantity?: EProductionProcessPathStepSettingsReturnVO_needConfirmMoveInQuantity;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastMold?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastMold;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastDevice?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastDevice;
    /** 进料时是否自动带入上一次录入消耗物料信息 */
    autoBringOutLastBomConsume?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastBomConsume;
    /** 进料时是否允许拆分批次 */
    allowSplitLot?: EProductionProcessPathStepSettingsReturnVO_allowSplitLot;
    /** 是否强制拆分批次 */
    forcedSplitLot?: EProductionProcessPathStepSettingsReturnVO_forcedSplitLot;
    /** 启用质量追溯 */
    enableQualityTraceability?: EProductionProcessPathStepSettingsReturnVO_enableQualityTraceability;
    /** 启用批次 */
    enableLot?: EProductionProcessPathStepSettingsReturnVO_enableLot;
    /** 启用序列号 */
    enableSerialNo?: EProductionProcessPathStepSettingsReturnVO_enableSerialNo;
    /** 启用外部码 */
    enableExternalCode?: EProductionProcessPathStepSettingsReturnVO_enableExternalCode;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: string;
    /** 是否有设备 */
    enableDevice?: EProductionProcessPathStepSettingsReturnVO_enableDevice;
    /** 是否有模具 */
    enableMold?: EProductionProcessPathStepSettingsReturnVO_enableMold;
    /** 是否有进料bom消耗 */
    enableMoveInBomConsume?: EProductionProcessPathStepSettingsReturnVO_enableMoveInBomConsume;
    /** 是否有出料bom消耗 */
    enableMoveOutBomConsume?: EProductionProcessPathStepSettingsReturnVO_enableMoveOutBomConsume;
    /** 是否有进站关键参数 */
    enableMoveInKeyParameter?: EProductionProcessPathStepSettingsReturnVO_enableMoveInKeyParameter;
    /** 是否有出站关键参数 */
    enableMoveOutKeyParameter?: EProductionProcessPathStepSettingsReturnVO_enableMoveOutKeyParameter;
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: EProductionProcessPathStepSettingsReturnVO_isGtPlannedQuantity;
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

export enum EToDoListSearchVO_queryStatus {
    /** 待处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 已逾期 */
    OVERDUE = "OVERDUE",
    /** 已完成 */
    HANDLED = "HANDLED",
    /** 我发起的 */
    CREATED_BY_ME = "CREATED_BY_ME",
    /** 抄送我的 */
    CARBON_COPY_TO_ME = "CARBON_COPY_TO_ME",
    /** 未读 */
    NOT_READ = "NOT_READ",
    /** 进行中的 */
    IN_PROGRESS = "IN_PROGRESS",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    FAILED = "FAILED"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EToDoMobileReturnsDTO_status {
    /** 待处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 未读 */
    NOT_READ = "NOT_READ",
    /** 已完成 */
    HANDLED = "HANDLED",
    /** 已读 */
    READ = "READ"
}

export enum EToDoMobileReturnsDTO_isTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EToDoMobileReturnsDTO_businessType {
    /** 待办 */
    TODO = "TODO",
    /** 生产任务 */
    PRODUCE_TASK = "PRODUCE_TASK",
    /** 生产质检任务 */
    QUALITY_PRODUCE_TASK = "QUALITY_PRODUCE_TASK",
    /** 库存质检任务 */
    QUALITY_STORAGE_TASK = "QUALITY_STORAGE_TASK",
    /** 盘点任务 */
    STORAGE_TAKE_CHECK_TASK = "STORAGE_TAKE_CHECK_TASK"
}

export enum EToDoMobileReturnsDTO_produceTaskIsBack {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EToDoMobileReturnsDTO_canRedirect {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EToDoMobileReturnsDTO_produceTaskStatus {
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

export enum EToDoMobileReturnsDTO_qualityTaskStatus {
    /** 待质检 */
    WAIT = "WAIT",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已撤销 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EProcessNodeExecutorVO_executorType {
    /** 员工 */
    USER = "USER",
    /** 角色 */
    ROLE = "ROLE",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 系统控件 */
    SYS_CONTROL = "SYS_CONTROL"
}

export enum EProcessNodeExecutorVO_executorSysType {
    /** 创建人 */
    CREATE_BY = "CREATE_BY",
    /** 创建部门 */
    CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
    /** 任务方案 */
    FLOW_PATH_TASK_PLAN = "FLOW_PATH_TASK_PLAN"
}

export enum ETheProductionTaskIsReturnedToTheDTOForTheBacklog_type {
    /** 生产任务 */
    PRODUCE = "PRODUCE",
    /** 返工任务 */
    BACK = "BACK"
}

export enum ETheProductionTaskIsReturnedToTheDTOForTheBacklog_status {
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

export enum ETheProductionTaskIsReturnedToTheDTOForTheBacklog_isWip {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProductionTaskIsReturnedToTheDTOForTheBacklog_moveInKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProductionTaskIsReturnedToTheDTOForTheBacklog_moveOutKeyParameterFillNeeds {
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

export enum EProductionProcessPathStepSettingsReturnVO_allowDirectExit {
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

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastMold {
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

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastBomConsume {
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

export enum EProductionProcessPathStepSettingsReturnVO_forcedSplitLot {
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

export enum EProductionProcessPathStepSettingsReturnVO_enableLot {
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

export enum EProductionProcessPathStepSettingsReturnVO_enableExternalCode {
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

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveOutBomConsume {
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

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveOutKeyParameter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_isGtPlannedQuantity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

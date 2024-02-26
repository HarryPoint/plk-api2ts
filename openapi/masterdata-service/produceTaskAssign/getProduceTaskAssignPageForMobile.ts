import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务分配相关/getProduceTaskAssignPageForMobileUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskAssignmentQueryVOForMobileparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultPageInformationProductionTaskAssignmentVOForMobile>(
        {
            url: "/masterdata-service/produceTaskAssign/getProduceTaskAssignPageForMobile",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务分配查询VO -- 针对mobile */
export interface IProductionTaskAssignmentQueryVOForMobile {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 任务类型 */
    types?: ('PRODUCE' | 'BACK')[];
    /** 工序id */
    processId: number;
    /** 物料id */
    materialIds?: number[];
    /** 生产任务可操作类型 */
    optTypes?: ('CAN_MOVE_IN' | 'CAN_QUALITY' | 'CAN_MOVE_OUT')[];
    /** 任务状态 */
    statusList?: ('WAIT' | 'PRODUCE' | 'PAUSE' | 'STOP' | 'CLOSE' | 'CANCEL')[];
    /** 生产订单号/生产任务编号(扫码查询时默认为生产订单号) */
    codeSearch?: string;
    /** 开始时间 yyyy-MM-dd HH:mm:dd */
    beginTime?: string;
    /** 结束时间 yyyy-MM-dd HH:mm:dd */
    endTime?: string;
    /** 工序id集合 */
    processIds?: number[];
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: ('Y' | 'N');
    /** 生产任务编号集合(扫码查询切换进出料查询时传参) */
    taskNos?: string[];
    /** 是否已分配 */
    isAssign?: ('Y' | 'N');
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: ('Y' | 'N');
    /** 操作员id列表 */
    assignUserIds?: number[];
    /** 计划生产数量最低数量 */
    planProduceMinQuantity?: number;
    /** 计划生产数量最高数量 */
    planProduceMaxQuantity?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«生产任务分配VO -- 针对mobile»» */
export interface IJSONResultPageInformationProductionTaskAssignmentVOForMobile {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationProductionTaskAssignmentVOForMobile;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«生产任务分配VO -- 针对mobile» */
export interface IPagingInformationProductionTaskAssignmentVOForMobile {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProductionTaskAssignmentVOForMobile[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 生产任务分配VO -- 针对mobile */
export interface IProductionTaskAssignmentVOForMobile {
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
    lastRoutingStepId?: number;
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
    /** 操作员列表 */
    assignUserList?: IIdNameNumberVO[];
    /** 是否已分配 */
    isAssign?: ('Y' | 'N');
    /** 生产订单 */
    produceOrder?: Record<string, Record<string, any>>;
    /** 批次信息 */
    lotOrders?: IProductionTaskBatchResponseDTOForMobileEnd[];
    /** 批次数量 */
    lotOrderNumber?: number;
    /** 当前步骤配置信息 - 用于前端判断各种情况逻辑 */
    stepSetInfo?: IProductionProcessPathStepSettingsReturnVO;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
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

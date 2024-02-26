import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产任务相关/getByIdUsingGET_13
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionTaskDetailsReturnToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTask/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产任务详情返回VO» */
export interface IJSONResultProductionTaskDetailsReturnToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionTaskDetailsReturnToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产任务详情返回VO */
export interface IProductionTaskDetailsReturnToVO {
    /** id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 任务下发方式 */
    issueType?: EProductionTaskDetailsReturnToVO_issueType;
    /** 任务下发方式描述 */
    issueTypeDesc?: string;
    /** 任务类型 */
    type?: EProductionTaskDetailsReturnToVO_type;
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
    /** 对应物料版次号 */
    materialIssueCode?: string;
    /** 对应生产工艺路径名称 */
    routingName?: string;
    /** 对应生产工艺路径编号 */
    routingCode?: string;
    /** 对应工艺路径步骤 */
    routingStep?: string;
    /** 对应工序id */
    processId?: number;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应班次id */
    classShiftId?: number;
    /** 对应班次名称 */
    classShiftName?: string;
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 补单来源生产任务id */
    supplementSourceProduceTaskId?: number;
    /** 计划生产数量 - 任务进度分母 */
    planProduceQuantity?: number;
    /** 当前完成数量 - 任务进度分子(合格数量) */
    currentCompleteQuantity?: number;
    /** 任务进度分子(补单数量) */
    supplementCompleteQuantity?: number;
    /** 当前生产数量 */
    currentProduceQuantity?: number;
    /** 当前报废数量 */
    currentScrapQuantity?: number;
    /** 可进料数量 */
    canMoveInQuantity?: number;
    /** 可出料数量 */
    canMoveOutQuantity?: number;
    /** 可质检数量 */
    canQualityQuantity?: number;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 实际开始时间 */
    actualBeginTime?: string;
    /** 实际结束时间 */
    actualEndTime?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    status?: EProductionTaskDetailsReturnToVO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 任务优先级 */
    priorityLevel?: number;
    /** 关闭人 */
    closeUserId?: number;
    /** 关闭人姓名 */
    closeUsername?: string;
    /** 关闭时间 */
    closeTime?: string;
    /** 关闭原因 */
    closeRemark?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 可操作项列表 */
    canOpItemList?: EProductionTaskDetailsReturnToVO_canOpItemList_items[];
    /** 可操作项列表拼接 */
    canOpItemListStr?: string;
    /** 生产任务记录 */
    produceHandles?: IProductionProcessingBasicInformationRespondsToDTO[];
}
/** 生产处理基础信息响应DTO */
export interface IProductionProcessingBasicInformationRespondsToDTO {
    /** id */
    id?: number;
    /** 所属生产任务id */
    produceTaskId?: number;
    /** 任务号 */
    produceTaskNo?: string;
    /** 业务类型 */
    businessType?: EProductionProcessingBasicInformationRespondsToDTO_businessType;
    /** 异常分类 */
    type?: EProductionProcessingBasicInformationRespondsToDTO_type;
    /** 异常分类描述 */
    typeDesc?: string;
    /** 所属进出站记录id */
    moveInOutRecordId?: number;
    /** 生产异常类型名称 */
    produceAbnormalName?: string;
    /** 生产异常类型编号 */
    produceAbnormalCode?: string;
    /** 报废数量 */
    abnormalQuantity?: number;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 备注 */
    remark?: string;
    /** 对应生产委外id */
    produceEntrustId?: number;
    /** 状态 */
    status?: EProductionProcessingBasicInformationRespondsToDTO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 图片上传key集合 */
    imageKeys?: string;
    /** 图片Url集合 */
    imageUrls?: string[];
    /** 工艺卡录入信息 - 仅已进出站有工艺卡信息时有值 */
    inputList?: IKeyParametersInAndOutOfTheStationDetailResponseDTO[];
    /** 异常描述 */
    desc?: string;
    /** 处理人id */
    handleUserId?: number;
    /** 处理人 */
    handleUsername?: string;
    /** 处理时间 */
    handleTime?: string;
    /** 销售订单编码 */
    salesOrderCode?: string;
    /** 对应工序id */
    processId?: number;
    /** 对应工序 */
    processName?: string;
    /** undefined */
    materialId?: number;
}
/** 进出站关键参数明细响应DTO */
export interface IKeyParametersInAndOutOfTheStationDetailResponseDTO {
    /** 明细id */
    id?: number;
    /** 明细名称/标题 */
    name: string;
    /** 录入类型 */
    inputType?: EKeyParametersInAndOutOfTheStationDetailResponseDTO_inputType;
    /** 录入值 - 明细录入类型不是图片时，有值 */
    inputValue?: string;
    /** 图片上传key集合 - 明细录入类型是图片时，有值 */
    imageKeys?: string[];
    /** 图片Url集合 - 明细录入类型是图片时，有值 */
    imageUrls?: string[];
}

export enum EProductionTaskDetailsReturnToVO_issueType {
    /** 排产下发 */
    PLAN = "PLAN",
    /** 直接下发 */
    DIRECT = "DIRECT"
}

export enum EProductionTaskDetailsReturnToVO_type {
    /** 生产任务 */
    PRODUCE = "PRODUCE",
    /** 返工任务 */
    BACK = "BACK"
}

export enum EProductionTaskDetailsReturnToVO_status {
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

export enum EProductionTaskDetailsReturnToVO_canOpItemList_items {
    CAN_MOVE_IN = "CAN_MOVE_IN",
    CAN_QUALITY = "CAN_QUALITY",
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EProductionProcessingBasicInformationRespondsToDTO_businessType {
    /** 进出站 */
    IN_OUT = "IN_OUT",
    /** 质检 */
    QUALITY = "QUALITY",
    /** 异常 */
    ABNORMAL = "ABNORMAL",
    /** 系统 */
    SYSTEM = "SYSTEM"
}

export enum EProductionProcessingBasicInformationRespondsToDTO_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 申请质检 */
    QUALITY_APPLY = "QUALITY_APPLY",
    /** 任务下发 */
    TASK_ISSUE = "TASK_ISSUE",
    /** 委外加工 */
    PRODUCE_ENTRUST = "PRODUCE_ENTRUST",
    /** 任务分配 */
    TASK_ASSIGN = "TASK_ASSIGN"
}

export enum EProductionProcessingBasicInformationRespondsToDTO_status {
    /** 待处理 */
    CREATED = "CREATED",
    /** 已确认 */
    SURE = "SURE",
    /** 已忽略 */
    IGNORE = "IGNORE",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 处理中 */
    HANDING = "HANDING",
    /** 处理完成 */
    ALL_HANDLE = "ALL_HANDLE",
    /** 批准 */
    APPROVAL = "APPROVAL",
    /** 拒绝 */
    REFUSE = "REFUSE",
    /** 撤销 */
    REVOKE = "REVOKE",
    /** 完成 */
    COMPLETE = "COMPLETE",
    /** 取消 */
    CANCEL = "CANCEL"
}

export enum EKeyParametersInAndOutOfTheStationDetailResponseDTO_inputType {
    /** 文本 */
    TEXT = "TEXT",
    /** 单选框 */
    SELECTOR = "SELECTOR",
    /** 多选框 */
    CHECKBOX = "CHECKBOX",
    /** 数值 */
    NUMBER = "NUMBER",
    /** 上传图片 */
    IMAGE = "IMAGE"
}

import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/getFlowForTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProductionProcessingQueryVOForProductionOrders, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListRespondsToTheDTOForProductionProcessingBasicInformation>(
        {
            url: "/masterdata-service/produceOrder/getFlowForTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理查询VO - 针对生产订单 */
export interface IProductionProcessingQueryVOForProductionOrders {
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产任务id */
    produceTaskId?: string;
    /** 异常分类 */
    type?: EProductionProcessingQueryVOForProductionOrders_type;
}
/** JSONResult«List«生产处理基础信息响应DTO»» */
export interface IJSONResultListRespondsToTheDTOForProductionProcessingBasicInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionProcessingBasicInformationRespondsToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产处理基础信息响应DTO */
export interface IProductionProcessingBasicInformationRespondsToDTO {
    /** id */
    id?: string;
    /** 所属生产任务id */
    produceTaskId?: string;
    /** 任务号 */
    produceTaskNo?: string;
    /** 业务类型 */
    businessType?: EProductionProcessingBasicInformationRespondsToDTO_businessType;
    /** 异常分类 */
    type?: EProductionProcessingBasicInformationRespondsToDTO_type;
    /** 异常分类描述 */
    typeDesc?: string;
    /** 所属进出站记录id */
    moveInOutRecordId?: string;
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
    produceEntrustId?: string;
    /** 状态 */
    status?: EProductionProcessingBasicInformationRespondsToDTO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 创建人id */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 图片上传key集合 */
    imageKeys?: string;
    /** 图片Url集合 */
    imageUrls?: string[];
    /** 工艺卡录入信息 - 仅已进出站有工艺卡信息时有值 */
    inputList?: IKeyParametersInAndOutOfTheStationDetailResponseDTO[];
    /** 异常描述 */
    desc?: string;
    /** 处理人id */
    handleUserId?: string;
    /** 处理人 */
    handleUsername?: string;
    /** 处理时间 */
    handleTime?: number;
    /** 销售订单编码 */
    salesOrderCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序 */
    processName?: string;
    /** undefined */
    materialId?: string;
}
/** 进出站关键参数明细响应DTO */
export interface IKeyParametersInAndOutOfTheStationDetailResponseDTO {
    /** 明细id */
    id?: string;
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

export enum EProductionProcessingQueryVOForProductionOrders_type {
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

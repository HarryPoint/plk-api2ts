import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产事件管理/getReportHistoryDetailUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionProcessingBasicInformationDetailsAreReturnedToVO>(
        {
            url: "/masterdata-service/produceHandle/getReportHistoryDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产处理基础信息详情返回VO» */
export interface IJSONResultProductionProcessingBasicInformationDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionProcessingBasicInformationDetailsReturnToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产处理基础信息详情返回VO */
export interface IProductionProcessingBasicInformationDetailsReturnToVO {
    /** id */
    id?: string;
    /** 所属生产任务id */
    produceTaskId?: string;
    /** 任务号 */
    produceTaskNo?: string;
    /** 业务类型 */
    businessType?: EProductionProcessingBasicInformationDetailsReturnToVO_businessType;
    /** 异常分类 */
    type?: EProductionProcessingBasicInformationDetailsReturnToVO_type;
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
    status?: EProductionProcessingBasicInformationDetailsReturnToVO_status;
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
    inputList?: IProcessCardDetailsReturnVOWithInformationFilledIn[];
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
    /** 对应工艺路径id */
    routingId?: string;
    /** 所属生产任务工艺路径步骤 */
    routingStep?: number;
    /** 标签集合 */
    tags?: string[];
    /** 对应生产订单id */
    produceOrderId?: string;
    /** 对应生产订单号 */
    produceOrderCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 已处理数量 */
    handleQuantity?: number;
    /** 待处理数量 */
    waitQuantity?: number;
    /** 返工数量 */
    backQuantity?: number;
    /** 报废数量 */
    scrapQuantity?: number;
    /** 放行数量 */
    releaseQuantity?: number;
    /** 返工工艺路径步骤id */
    backRoutingStepId?: string;
    /** 返工工艺路径步骤 */
    backRoutingStep?: number;
    /** 返工工序id */
    backProcessId?: string;
    /** 返工工序名称 */
    backProcessName?: string;
    /** 返工工序编号 */
    backProcessCode?: string;
    /** 返工生产类型 */
    backProduceType?: EProductionProcessingBasicInformationDetailsReturnToVO_backProduceType;
    /** 返工生产类型描述 */
    backProduceTypeDesc?: string;
    /** 处理意见 */
    handleRemark?: string;
}
/** 工艺卡明细返回VO(含填写的信息) */
export interface IProcessCardDetailsReturnVOWithInformationFilledIn {
    /** 明细id */
    id?: string;
    /** 明细类型 */
    type?: EProcessCardDetailsReturnVOWithInformationFilledIn_type;
    /** 明细名称/标题 */
    name: string;
    /** 明细编号 */
    code: string;
    /** 描述内容/备注 */
    remark?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件key */
    fileKey?: string;
    /** 文件完整url */
    fileUrl?: string;
    /** 录入类型 */
    inputType?: EProcessCardDetailsReturnVOWithInformationFilledIn_inputType;
    /** 文本类型 */
    textType?: EProcessCardDetailsReturnVOWithInformationFilledIn_textType;
    /** 文本比较值集 */
    textCompareValueList?: string[];
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 图片最大上传量 */
    imageTotalCount?: number;
    /** 选项集 */
    selectorList?: string[];
    /** 录入值 - 明细录入类型不是图片时，有值 */
    inputValue?: string;
    /** 图片上传key集合 - 明细录入类型是图片时，有值 */
    imageKeys?: string[];
    /** 图片Url集合 - 明细录入类型是图片时，有值 */
    imageUrls?: string[];
}

export enum EProductionProcessingBasicInformationDetailsReturnToVO_businessType {
    /** 进出站 */
    IN_OUT = "IN_OUT",
    /** 质检 */
    QUALITY = "QUALITY",
    /** 异常 */
    ABNORMAL = "ABNORMAL",
    /** 系统 */
    SYSTEM = "SYSTEM"
}

export enum EProductionProcessingBasicInformationDetailsReturnToVO_type {
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

export enum EProductionProcessingBasicInformationDetailsReturnToVO_status {
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

export enum EProductionProcessingBasicInformationDetailsReturnToVO_backProduceType {
    /** 返回原工序 */
    RETURN = "RETURN",
    /** 顺序生产 */
    ORDER = "ORDER"
}

export enum EProcessCardDetailsReturnVOWithInformationFilledIn_type {
    /** 文件 */
    FILE = "FILE",
    /** 描述 */
    TEXT = "TEXT",
    /** 录入 */
    INPUT = "INPUT"
}

export enum EProcessCardDetailsReturnVOWithInformationFilledIn_inputType {
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

export enum EProcessCardDetailsReturnVOWithInformationFilledIn_textType {
    /** 输入 */
    INPUT = "INPUT",
    /** 比较 */
    COMPARE = "COMPARE"
}

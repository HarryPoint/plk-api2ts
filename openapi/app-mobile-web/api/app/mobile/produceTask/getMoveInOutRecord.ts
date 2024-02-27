import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产任务相关/getMoveInOutRecordUsingPOST
*/
export default function fetchMethod(options: { data: IEntryAndExitRecordsSearchVO }, extraOptions?: any) {
    return http<IJSONResultListInboundAndOutboundRecordsReturnVO>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/getMoveInOutRecord",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 进出站记录搜索VO */
export interface IEntryAndExitRecordsSearchVO {
    /** 任务id */
    produceTaskId: string;
    /** 进出站记录状态 */
    statusList?: EEntryAndExitRecordsSearchVO_statusList_items[];
}
/** JSONResult«List«进出站记录返回VO»» */
export interface IJSONResultListInboundAndOutboundRecordsReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IInboundAndOutboundLogsReturnToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进出站记录返回VO */
export interface IInboundAndOutboundLogsReturnToVO {
    /** 记录id */
    id?: string;
    /** 进出站类型 */
    type?: EInboundAndOutboundLogsReturnToVO_type;
    /** 状态 */
    status?: EInboundAndOutboundLogsReturnToVO_status;
    /** 对应物料id */
    materialId?: string;
    /** 对应产出物料来料数 */
    materialIncomingQuantity?: number;
    /** 对应产出物料实际数 */
    materialActualQuantity?: number;
    /** 批次id */
    lotId?: string;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 关键参数录入信息 - 仅已进出站有工艺卡信息时有值 */
    inputList?: IProduceTechnologyKeyParameterDetailResponseDTO[];
    /** 对应生产任务id */
    produceTaskId?: string;
    /** 对应工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 对应工艺路径步骤id */
    produceTechnologyRoutingStepId?: string;
}
/** ProduceTechnologyKeyParameterDetailResponseDTO */
export interface IProduceTechnologyKeyParameterDetailResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 生产工艺关键参数id */
    produceTechnologyKeyParameterId?: string;
    /** 对应关键参数id */
    keyParameterId?: string;
    /** 字段名称 */
    name?: string;
    /** 字段编号 */
    code?: string;
    /** 步骤 */
    step?: number;
    /** 帮助提示 */
    remark?: string;
    /** 录入类型 */
    inputType?: EProduceTechnologyKeyParameterDetailResponseDTO_inputType;
    /** 文本类型 */
    textType?: EProduceTechnologyKeyParameterDetailResponseDTO_textType;
    /** 文本比较值，多个英文逗号,分割 */
    textCompareValue?: string;
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
    /** 选项集，多个英文逗号,分割 */
    selector?: string;
    /** 选项集 */
    selectorList?: string[];
    /** 录入值 - 明细录入类型不是图片时，有值 */
    inputValue?: string;
    /** 图片上传key集合 - 明细录入类型是图片时，有值 */
    imageKeys?: string[];
    /** 图片Url集合 - 明细录入类型是图片时，有值 */
    imageUrls?: string[];
}

export enum EEntryAndExitRecordsSearchVO_statusList_items {
    STAGING = "STAGING",
    MOVE_IN = "MOVE_IN",
    MOVE_OUT = "MOVE_OUT"
}

export enum EInboundAndOutboundLogsReturnToVO_type {
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT"
}

export enum EInboundAndOutboundLogsReturnToVO_status {
    /** 暂存 */
    STAGING = "STAGING",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT"
}

export enum EProduceTechnologyKeyParameterDetailResponseDTO_inputType {
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

export enum EProduceTechnologyKeyParameterDetailResponseDTO_textType {
    /** 输入 */
    INPUT = "INPUT",
    /** 比较 */
    COMPARE = "COMPARE"
}

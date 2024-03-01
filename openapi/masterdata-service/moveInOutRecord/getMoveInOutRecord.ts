import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/进出料记录管理/getMoveInOutRecordUsingPOST
*/
export default function fetchMethod(options: { data: IEntryAndExitRecordsSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListInboundAndOutboundRecordsReturnVO>(
        {
            url: "/masterdata-service/moveInOutRecord/getMoveInOutRecord",
            method: "POST",
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
    /** 响应结果 */
    data?: IInboundAndOutboundLogsReturnToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进出站记录返回VO */
export interface IInboundAndOutboundLogsReturnToVO {
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 记录id */
    id?: string;
    /** 关键参数录入信息 - 仅已进出站有工艺卡信息时有值 */
    inputList?: IProduceTechnologyKeyParameterDetailResponseDTO[];
    /** 批次id */
    lotId?: string;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 对应产出物料实际数 */
    materialActualQuantity?: number;
    /** 对应物料id */
    materialId?: string;
    /** 对应产出物料来料数 */
    materialIncomingQuantity?: number;
    /** 对应生产任务id */
    produceTaskId?: string;
    /** 对应工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 对应工艺路径步骤id */
    produceTechnologyRoutingStepId?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    status?: EInboundAndOutboundLogsReturnToVO_status;
    /** 进出站类型 */
    type?: EInboundAndOutboundLogsReturnToVO_type;
}
/** ProduceTechnologyKeyParameterDetailResponseDTO */
export interface IProduceTechnologyKeyParameterDetailResponseDTO {
    /** 字段编号 */
    code?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 图片上传key集合 - 明细录入类型是图片时，有值 */
    imageKeys?: string[];
    /** 图片最大上传量 */
    imageTotalCount?: number;
    /** 图片Url集合 - 明细录入类型是图片时，有值 */
    imageUrls?: string[];
    /** 录入类型 */
    inputType?: EProduceTechnologyKeyParameterDetailResponseDTO_inputType;
    /** 录入值 - 明细录入类型不是图片时，有值 */
    inputValue?: string;
    /** 对应关键参数id */
    keyParameterId?: string;
    /** 下限 */
    lowerLimit?: number;
    /** 字段名称 */
    name?: string;
    /** 数值单位 */
    numberUnit?: string;
    /** 生产工艺关键参数id */
    produceTechnologyKeyParameterId?: string;
    /** 帮助提示 */
    remark?: string;
    /** 选项集，多个英文逗号,分割 */
    selector?: string;
    /** 选项集 */
    selectorList?: string[];
    /** 步骤 */
    step?: number;
    /** 文本比较值，多个英文逗号,分割 */
    textCompareValue?: string;
    /** 文本比较值集 */
    textCompareValueList?: string[];
    /** 文本类型 */
    textType?: EProduceTechnologyKeyParameterDetailResponseDTO_textType;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 上限 */
    upperLimit?: number;
}

export enum EEntryAndExitRecordsSearchVO_statusList_items {
    STAGING = "STAGING",
    MOVE_IN = "MOVE_IN",
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

export enum EInboundAndOutboundLogsReturnToVO_type {
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

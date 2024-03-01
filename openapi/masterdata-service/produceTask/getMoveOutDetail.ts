import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getMoveOutDetailUsingPOST
*/
export default function fetchMethod(options: { data: IQueryDTOForIncomingAndOutgoingMaterialInformation, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultIncomingAndOutgoingMaterialInformationResponseObject>(
        {
            url: "/masterdata-service/produceTask/getMoveOutDetail",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进出料信息查询DTO */
export interface IQueryDTOForIncomingAndOutgoingMaterialInformation {
    /** 任务id */
    taskId: string;
}
/** JSONResult«进出料信息响应对象» */
export interface IJSONResultIncomingAndOutgoingMaterialInformationResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIncomingAndOutgoingMaterialInformationResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进出料信息响应对象 */
export interface IIncomingAndOutgoingMaterialInformationResponseObject {
    /** 进出站bom消耗列表 */
    bomMaterials?: IIncomingAndOutgoingBomConsumptionRespondsToDTO[];
    /** 成品物料信息 */
    finishedMaterial?: IFinishedMaterialInformationRespondsToDTO;
    /** 关键参数信息 */
    keyParametersInfo?: IProduceTechnologyKeyParameterResponseDTO;
    /** 进出站记录id */
    moveInOutRecordId?: string;
    /** 工序信息 */
    processInfo?: IUpperAndLowerProcessInformationRespondsToTheDTO;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 任务id */
    produceTaskId?: string;
    /** 任务号 */
    produceTaskNo?: string;
    /** 当前步骤配置信息 - 用于前端判断各种情况逻辑 */
    stepSetInfo?: IProductionProcessPathStepSettingsReturnVO;
}
/** 进出bom消耗响应DTO */
export interface IIncomingAndOutgoingBomConsumptionRespondsToDTO {
    /** 实际数 */
    actualQuantity?: number;
    /** 启用外部码 */
    enableExternalCode?: EIncomingAndOutgoingBomConsumptionRespondsToDTO_enableExternalCode;
    /** 启用批次 */
    enableLot?: EIncomingAndOutgoingBomConsumptionRespondsToDTO_enableLot;
    /** 启用质量追溯 */
    enableQualityTraceability?: EIncomingAndOutgoingBomConsumptionRespondsToDTO_enableQualityTraceability;
    /** 启用序列号 */
    enableSerialNo?: EIncomingAndOutgoingBomConsumptionRespondsToDTO_enableSerialNo;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: string;
    /** 生产工艺路径步骤bom明细关联id */
    id?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 单位消耗 */
    totalConsumeCount?: number;
}
/** 成品物料信息响应DTO */
export interface IFinishedMaterialInformationRespondsToDTO {
    /** 实际数 */
    actualQuantity?: number;
    /** 来料数(可用数量)/待检数 */
    incomingQuantity?: number;
    /** 质检不合格数量 */
    inspectionNotPassQuantity?: number;
    /** 物料号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 需生产数量 */
    needProduceQuantity?: number;
}
/** ProduceTechnologyKeyParameterResponseDTO */
export interface IProduceTechnologyKeyParameterResponseDTO {
    /** BOM编码 */
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
    /** 关键参数明细 */
    keyParameterDetailList?: IProduceTechnologyKeyParameterDetailResponseDTO[];
    /** 关键参数id */
    keyParameterId?: string;
    /** BOM名称 */
    name?: string;
    /** 生产工艺id */
    produceTechnologyId?: string;
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
/** 上下工序信息响应DTO */
export interface IUpperAndLowerProcessInformationRespondsToTheDTO {
    /** 对应上工序编号 */
    lastProcessCode?: string;
    /** 对应上工序id */
    lastProcessId?: string;
    /** 对应上工序名称 */
    lastProcessName?: string;
    /** 对应上工序步骤 */
    lastRoutingStep?: number;
    /** 对应下工序编号 */
    nextProcessCode?: string;
    /** 对应下工序id */
    nextProcessId?: string;
    /** 对应下工序名称 */
    nextProcessName?: string;
    /** 对应下工序步骤 */
    nextRoutingStep?: number;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
}
/** 生产工艺路径步骤设置返回VO */
export interface IProductionProcessPathStepSettingsReturnVO {
    /** 是否允许直接出站 */
    allowDirectExit?: EProductionProcessPathStepSettingsReturnVO_allowDirectExit;
    /** 进料时是否允许拆分批次 */
    allowSplitLot?: EProductionProcessPathStepSettingsReturnVO_allowSplitLot;
    /** 进料时是否自动带入上一次录入消耗物料信息 */
    autoBringOutLastBomConsume?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastBomConsume;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastDevice?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastDevice;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastMold?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastMold;
    /** 是否有设备 */
    enableDevice?: EProductionProcessPathStepSettingsReturnVO_enableDevice;
    /** 启用外部码 */
    enableExternalCode?: EProductionProcessPathStepSettingsReturnVO_enableExternalCode;
    /** 启用批次 */
    enableLot?: EProductionProcessPathStepSettingsReturnVO_enableLot;
    /** 是否有模具 */
    enableMold?: EProductionProcessPathStepSettingsReturnVO_enableMold;
    /** 是否有进料bom消耗 */
    enableMoveInBomConsume?: EProductionProcessPathStepSettingsReturnVO_enableMoveInBomConsume;
    /** 是否有进站关键参数 */
    enableMoveInKeyParameter?: EProductionProcessPathStepSettingsReturnVO_enableMoveInKeyParameter;
    /** 是否有出料bom消耗 */
    enableMoveOutBomConsume?: EProductionProcessPathStepSettingsReturnVO_enableMoveOutBomConsume;
    /** 是否有出站关键参数 */
    enableMoveOutKeyParameter?: EProductionProcessPathStepSettingsReturnVO_enableMoveOutKeyParameter;
    /** 启用质量追溯 */
    enableQualityTraceability?: EProductionProcessPathStepSettingsReturnVO_enableQualityTraceability;
    /** 启用序列号 */
    enableSerialNo?: EProductionProcessPathStepSettingsReturnVO_enableSerialNo;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: string;
    /** 是否强制拆分批次 */
    forcedSplitLot?: EProductionProcessPathStepSettingsReturnVO_forcedSplitLot;
    /** id */
    id?: string;
    /** 进出站方式 */
    inOutType?: EProductionProcessPathStepSettingsReturnVO_inOutType;
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: EProductionProcessPathStepSettingsReturnVO_isGtPlannedQuantity;
    /** 进料时是否需要确认进料数量 */
    needConfirmMoveInQuantity?: EProductionProcessPathStepSettingsReturnVO_needConfirmMoveInQuantity;
}

export enum EIncomingAndOutgoingBomConsumptionRespondsToDTO_enableExternalCode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EIncomingAndOutgoingBomConsumptionRespondsToDTO_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EIncomingAndOutgoingBomConsumptionRespondsToDTO_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EIncomingAndOutgoingBomConsumptionRespondsToDTO_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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

export enum EProductionProcessPathStepSettingsReturnVO_allowDirectExit {
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

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastBomConsume {
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

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastMold {
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

export enum EProductionProcessPathStepSettingsReturnVO_enableExternalCode {
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

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveInKeyParameter {
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

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveOutKeyParameter {
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

export enum EProductionProcessPathStepSettingsReturnVO_enableSerialNo {
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

export enum EProductionProcessPathStepSettingsReturnVO_inOutType {
    /** 部分进出 */
    PART = "PART",
    /** 整进整出 */
    ALL = "ALL"
}

export enum EProductionProcessPathStepSettingsReturnVO_isGtPlannedQuantity {
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

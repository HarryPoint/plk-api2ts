import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺路径相关/getStepsByRoutingIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessPathDetailsStepVO>(
        {
            url: "/masterdata-service/routing/getStepsByRoutingId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺路径详情步骤VO»» */
export interface IJSONResultListProcessPathDetailsStepVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessPathDetailsStepsVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺路径详情步骤VO */
export interface IProcessPathDetailsStepsVO {
    /** 是否允许直接出站 */
    allowDirectExit?: EProcessPathDetailsStepsVO_allowDirectExit;
    /** 返工产出工费 */
    backProducePrice?: number;
    /** BOM物料消耗确认类型 */
    bomConsumeSureType?: EProcessPathDetailsStepsVO_bomConsumeSureType;
    /** BOM物料消耗确认类型描述 */
    bomConsumeSureTypeDesc?: string;
    /** 产能-生产数量 */
    capacityProduceQuantity?: number;
    /** 产能-生产时间 */
    capacityProduceTime?: number;
    /** 产能-时间类型 */
    capacityTimeType?: EProcessPathDetailsStepsVO_capacityTimeType;
    /** 工艺路径步骤id */
    id?: string;
    /** 进出站方式 */
    inOutType?: EProcessPathDetailsStepsVO_inOutType;
    /** 进出站方式描述 */
    inOutTypeDesc?: string;
    /** 质检方案集 */
    plans?: ITheDetailsOfTheInspectionSchemeAreReturnedToVO[];
    /** 所属工序编号 */
    processCode?: string;
    /** 所属工序id */
    processId?: string;
    /** 所属工序名称 */
    processName?: string;
    /** 所属出站工艺卡编号 */
    processSheetAfterCode?: string;
    /** 所属出站工艺卡id */
    processSheetAfterId?: string;
    /** 所属出站工艺卡名称 */
    processSheetAfterName?: string;
    /** 所属进站工艺卡编号 */
    processSheetBeforeCode?: string;
    /** 所属进站工艺卡id */
    processSheetBeforeId?: string;
    /** 所属进站工艺卡名称 */
    processSheetBeforeName?: string;
    /** 合格产出工费 */
    producePrice?: number;
    /** 准备工费（元） */
    readyPrice?: number;
    /** 准备耗时(分钟) */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProcessPathDetailsStepsVO_readyTimeUnit;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 步骤对应bom详情 */
    stepBomDetails?: IProcessPathDetailsStepBomDetailsReturnToVO[];
}
/** 质检方案明细返回VO */
export interface ITheDetailsOfTheInspectionSchemeAreReturnedToVO {
    /** 附件文件id */
    attachedFileId?: string;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件名 */
    attachedFileName?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 质检方案编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 版次号 */
    issueCode?: string;
    /** 质检项 */
    itemList?: IQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO[];
    /** 适用物料集合 */
    materialList?: IMaterialMasterDataBasicInformationIsReturnedToVO[];
    /** 质检方案名称 */
    name?: string;
    /** 质检分类编号 */
    qualityInspectionCategoryCode?: string;
    /** 质检分类id */
    qualityInspectionCategoryId?: string;
    /** 质检分类名称 */
    qualityInspectionCategoryName?: string;
    /** 质检数量 */
    qualityInspectionQuantity?: number;
    /** 质检比例 */
    qualityInspectionRatio?: number;
    /** 备注 */
    remark?: string;
    /** 质检方式 */
    type?: ETheDetailsOfTheInspectionSchemeAreReturnedToVO_type;
    /** 质检方式描述 */
    typeDesc?: string;
}
/** 质检方案质检项关联信息返回VO */
export interface IQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO {
    /** 比较数值 */
    compareNumber?: number;
    /** 关联id */
    id?: string;
    /** 下限 */
    lowerLimit?: number;
    /** 数值质检标准 */
    numberStandard?: EQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO_numberStandard;
    /** 数值质检标准描述 */
    numberStandardDesc?: string;
    /** 数值单位 */
    numberUnit?: string;
    /** 所属质检项编号 */
    qualityInspectionItemCode?: string;
    /** 所属质检项id */
    qualityInspectionItemId?: string;
    /** 所属质检项名称 */
    qualityInspectionItemName?: string;
    /** 所属质检方案 */
    qualityInspectionPlanId?: string;
    /** 质检方式 */
    qualityMethod?: EQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO_qualityMethod;
    /** 质检方式描述 */
    qualityMethodDesc?: string;
    /** 选择方式 */
    selectType?: EQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO_selectType;
    /** 选择描述 */
    selectTypeDesc?: string;
    /** 选择项 */
    selectorList?: ITheInspectionItemOptionReturnsVO[];
    /** 质检标准说明 */
    standardDesc?: string;
    /** 上限 */
    upperLimit?: number;
}
/** 质检项选择项返回VO */
export interface ITheInspectionItemOptionReturnsVO {
    /** 选择项名称 */
    name?: string;
}
/** 物料主数据基础信息返回VO */
export interface IMaterialMasterDataBasicInformationIsReturnedToVO {
    /** 物料编号 */
    code?: string;
    /** 物料id */
    id?: string;
    /** 版次号 */
    issueCode?: string;
    /** 物料名称 */
    name?: string;
    /** 物料规格 */
    spec?: string;
    /** 库存可使用数 */
    storageUseQuantity?: number;
    /** 物料单位 */
    unit?: string;
    /** 计量单位id */
    unitId?: string;
}
/** 工艺路径详情步骤Bom明细返回VO */
export interface IProcessPathDetailsStepBomDetailsReturnToVO {
    /** 所属bom物料编号 */
    childMaterialCode?: string;
    /** 所属bom物料id */
    childMaterialId?: string;
    /** 所属bom物料名称 */
    childMaterialName?: string;
    /** id */
    id?: string;
    /** 所属主物料bom明细id */
    materialBomDetailId?: string;
    /** 总消耗 */
    totalConsumeCount?: number;
}

export enum EProcessPathDetailsStepsVO_allowDirectExit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessPathDetailsStepsVO_bomConsumeSureType {
    /** 在进站时确认 */
    MOVE_IN = "MOVE_IN",
    /** 在出站时确认 */
    MOVE_OUT = "MOVE_OUT"
}

export enum EProcessPathDetailsStepsVO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProcessPathDetailsStepsVO_inOutType {
    /** 部分进出 */
    PART = "PART",
    /** 整进整出 */
    ALL = "ALL"
}

export enum EProcessPathDetailsStepsVO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum ETheDetailsOfTheInspectionSchemeAreReturnedToVO_type {
    /** 全检 */
    ALL = "ALL",
    /** 比例抽检 */
    RADIO_SPOT_CHECK = "RADIO_SPOT_CHECK",
    /** 固定抽检 */
    FIX_SPOT_CHECK = "FIX_SPOT_CHECK"
}

export enum EQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO_numberStandard {
    /** 数值区间 */
    BETWEEN = "BETWEEN",
    /** 数值大于 */
    GT = "GT",
    /** 数值大于等于 */
    GE = "GE",
    /** 数值小于 */
    LT = "LT",
    /** 数值小于等于 */
    LE = "LE"
}

export enum EQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO_qualityMethod {
    /** 数值比对 */
    NUMBER_COMPARE = "NUMBER_COMPARE",
    /** 人工判断 */
    ARTIFICIAL = "ARTIFICIAL"
}

export enum EQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO_selectType {
    /** 单选 */
    SELECTOR = "SELECTOR",
    /** 多选 */
    CHECKBOX = "CHECKBOX"
}

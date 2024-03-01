import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检方案/getByIdUsingGET_16
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultCheckSolutionDetailsAreReturnedToVO>(
        {
            url: "/masterdata-service/qualityInspectionPlan/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«质检方案明细返回VO» */
export interface IJSONResultCheckSolutionDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheDetailsOfTheInspectionSchemeAreReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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

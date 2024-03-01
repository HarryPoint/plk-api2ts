import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检方案/editUsingPOST_18
*/
export default function fetchMethod(options: { data: IEditTheQualityInspectionSchemeDTO, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qualityInspectionPlan/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 编辑质检方案 DTO */
export interface IEditTheQualityInspectionSchemeDTO {
    /** 附件文件key */
    attachedFileKey?: string;
    /** 质检方案编码 */
    code?: string;
    /** id，如果不传就是新增 */
    id?: string;
    /** 是否应用编码规则 */
    isCodeRule: EEditTheQualityInspectionSchemeDTO_isCodeRule;
    /** 版次号 */
    issueCode?: string;
    /** 质检项清单 */
    itemList?: IQualityInspectionSolutionQualityInspectionItemAssociationInformationEditTheDTO[];
    /** 质检方案名 */
    name: string;
    /** 所属质检分类id */
    qualityInspectionCategoryId?: string;
    /** 质检数量 */
    qualityInspectionQuantity?: number;
    /** 质检比例（填多少传多少） */
    qualityInspectionRatio?: number;
    /** 备注 */
    remark?: string;
    /** 质检方式 */
    type?: EEditTheQualityInspectionSchemeDTO_type;
}
/** 质检方案质检项关联信息编辑DTO */
export interface IQualityInspectionSolutionQualityInspectionItemAssociationInformationEditTheDTO {
    /** 比较数值 */
    compareNumber?: number;
    /** 关联id */
    id?: string;
    /** 下限 */
    lowerLimit?: number;
    /** 数值质检标准 */
    numberStandard?: EQualityInspectionSolutionQualityInspectionItemAssociationInformationEditTheDTO_numberStandard;
    /** 数值单位 */
    numberUnit?: string;
    /** 所属质检项id */
    qualityInspectionItemId?: string;
    /** 上限 */
    upperLimit?: number;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EEditTheQualityInspectionSchemeDTO_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEditTheQualityInspectionSchemeDTO_type {
    /** 全检 */
    ALL = "ALL",
    /** 比例抽检 */
    RADIO_SPOT_CHECK = "RADIO_SPOT_CHECK",
    /** 固定抽检 */
    FIX_SPOT_CHECK = "FIX_SPOT_CHECK"
}

export enum EQualityInspectionSolutionQualityInspectionItemAssociationInformationEditTheDTO_numberStandard {
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

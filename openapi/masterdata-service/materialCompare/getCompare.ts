import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料主数据比对相关/getMaterialCompareUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialMasterDataBomIdCollectionVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnVOForMaterialMasterDataComparison>(
        {
            url: "/masterdata-service/materialCompare/getCompare",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料主数据bom id集合VO */
export interface IMaterialMasterDataBomIdCollectionVO {
    /** bomId集合 */
    bomIds?: string[];
}
/** JSONResult«List«物料主数据比对返回VO»» */
export interface IJSONResultListReturnVOForMaterialMasterDataComparison {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialMasterDataComparisonReturnsVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料主数据比对返回VO */
export interface IMaterialMasterDataComparisonReturnsVO {
    /** 比对物料编号 */
    compareMaterialCode?: string;
    /** 比对物料id */
    compareMaterialId?: string;
    /** 比对物料版次号 */
    compareMaterialIssueCode?: string;
    /** 比对物料名 */
    compareMaterialName?: string;
    /** 比对内容集 */
    details?: IMaterialMasterDataComparisonDetailsReturnedToVO[];
    /** 比对物料状态描述 */
    statusDesc?: string;
}
/** 物料主数据比对详情返回VO */
export interface IMaterialMasterDataComparisonDetailsReturnedToVO {
    /** 对应bomId */
    bomId?: string;
    /** 对应bom名称 */
    bomName?: string;
    /** 对应工艺路径集 */
    routings?: IProductionProcessPathBasicInformationVO[];
    /** 计算消耗 */
    totalConsumeCount?: number;
}
/** 生产工艺路径基础信息VO */
export interface IProductionProcessPathBasicInformationVO {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 是否默认 */
    isDefault?: EProductionProcessPathBasicInformationVO_isDefault;
    /** 是否可用 */
    isValid?: EProductionProcessPathBasicInformationVO_isValid;
    /** 名称 */
    name?: string;
}

export enum EProductionProcessPathBasicInformationVO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathBasicInformationVO_isValid {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

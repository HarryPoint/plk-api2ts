import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料相关/getMaterialSelectorByIdsUsingPOST
*/
export default function fetchMethod(options: { data: IIdCollectionInformation, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnVOToTheMaterialMasterDataSelection>(
        {
            url: "/masterdata-service/material/getMaterialSelectorByIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: string[];
}
/** JSONResult«List«物料主数据选择返回VO»» */
export interface IJSONResultListReturnVOToTheMaterialMasterDataSelection {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialMasterDataSelectionIsReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料主数据选择返回VO */
export interface IMaterialMasterDataSelectionIsReturnedToVO {
    /** 物料编号 */
    code?: string;
    /** 是否有bom */
    hasBom?: EMaterialMasterDataSelectionIsReturnedToVO_hasBom;
    /** 物料id */
    id?: string;
    /** 版次号 */
    issueCode?: string;
    /** 物料名称 */
    name?: string;
    /** 规格 */
    spec?: string;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 物料类型 */
    type?: string;
    /** 物料类型描述 */
    typeDesc?: string;
    /** 单位 */
    unit?: string;
}

export enum EMaterialMasterDataSelectionIsReturnedToVO_hasBom {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

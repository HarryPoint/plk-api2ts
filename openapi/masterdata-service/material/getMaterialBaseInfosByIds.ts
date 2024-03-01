import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料相关/getMaterialBaseInfosByIdsUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnBasicInformationAboutTheMaterialMasterDataToVO>(
        {
            url: "/masterdata-service/material/getMaterialBaseInfosByIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«物料主数据基础信息返回VO»» */
export interface IJSONResultListReturnBasicInformationAboutTheMaterialMasterDataToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialMasterDataBasicInformationIsReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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

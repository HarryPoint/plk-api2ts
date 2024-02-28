import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料相关/getByCodeAndCheckUsingPOST
*/
export default function fetchMethod(options: { params: { code?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBasicInformationAboutTheMaterialMasterDataIsReturnedToVO>(
        {
            url: "/masterdata-service/material/getByCodeAndCheck",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«物料主数据基础信息返回VO» */
export interface IJSONResultBasicInformationAboutTheMaterialMasterDataIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialMasterDataBasicInformationIsReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料主数据基础信息返回VO */
export interface IMaterialMasterDataBasicInformationIsReturnedToVO {
    /** 物料id */
    id?: string;
    /** 物料名称 */
    name?: string;
    /** 物料编号 */
    code?: string;
    /** 物料单位 */
    unit?: string;
    /** 版次号 */
    issueCode?: string;
    /** 物料规格 */
    spec?: string;
    /** 计量单位id */
    unitId?: string;
    /** 库存可使用数 */
    storageUseQuantity?: number;
}

import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料Bom相关/getBomDetailsByBomIdUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; Id?: string } }, extraOptions?: any) {
    return http<IJSONResultListBomDetailsSelectBasicInformationDTO>(
        {
            url: "/masterdata-service/materialBom/getBomDetailsByBomId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«物料主数据Bom详情选择基础信息DTO»» */
export interface IJSONResultListBomDetailsSelectBasicInformationDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBomDetailsSelectBasicInformationDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料主数据Bom详情选择基础信息DTO */
export interface IBomDetailsSelectBasicInformationDTO {
    /** 子物料编号 */
    childMaterialCode?: string;
    /** 子物料id */
    childMaterialId?: string;
    /** 子物料名称 */
    childMaterialName?: string;
    /** Bom详情id */
    id?: string;
    /** 消耗数量 */
    totalConsumeCount?: number;
}

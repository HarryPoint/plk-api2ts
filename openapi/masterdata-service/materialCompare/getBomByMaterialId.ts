import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料主数据比对相关/getBomByMaterialIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; materialId?: string } }, extraOptions?: any) {
    return http<IJSONResultListMaterialBomBaseVo>(
        {
            url: "/masterdata-service/materialCompare/getBomByMaterialId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«MaterialBomBaseVo»» */
export interface IJSONResultListMaterialBomBaseVo {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialBomBaseVo[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** MaterialBomBaseVo */
export interface IMaterialBomBaseVo {
    /** 物料ID */
    materialId?: string;
    /** 物料编码 */
    materialCode?: string;
    /** ID */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
}

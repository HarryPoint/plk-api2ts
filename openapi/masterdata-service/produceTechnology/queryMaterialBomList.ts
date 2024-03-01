import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/生产工艺相关/queryMaterialBomListUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListProduceTechnologyMaterialBomDTO>(
        {
            url: "/masterdata-service/produceTechnology/queryMaterialBomList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProduceTechnologyMaterialBomDTO»» */
export interface IJSONResultListProduceTechnologyMaterialBomDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProduceTechnologyMaterialBomDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyMaterialBomDTO */
export interface IProduceTechnologyMaterialBomDTO {
    /** undefined */
    code?: string;
    /** undefined */
    id?: string;
    /** undefined */
    materialBomId?: string;
    /** undefined */
    materialId?: string;
    /** undefined */
    name?: string;
    /** undefined */
    produceTechnologyId?: string;
}

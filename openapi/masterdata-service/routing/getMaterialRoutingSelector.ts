import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺路径相关/getMaterialRoutingSelectorUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; MaterialId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessPathSelectVO>(
        {
            url: "/masterdata-service/routing/getMaterialRoutingSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺路径选择VO»» */
export interface IJSONResultListProcessPathSelectVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessPathSelectionVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺路径选择VO */
export interface IProcessPathSelectionVO {
    /** 工艺路径编号 */
    code?: string;
    /** id */
    id?: string;
    /** 是否物料默认 */
    isDefault?: EProcessPathSelectionVO_isDefault;
    /** 物料bom编号 */
    materialBomCode?: string;
    /** 物料bomId */
    materialBomId?: string;
    /** 物料bom名称 */
    materialBomName?: string;
    /** 物料ID */
    materialId?: string;
    /** 工艺路径名称 */
    name?: string;
}

export enum EProcessPathSelectionVO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

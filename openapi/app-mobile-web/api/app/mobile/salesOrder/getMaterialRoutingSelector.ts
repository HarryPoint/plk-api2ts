import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/销售订单相关/getMaterialRoutingSelectorUsingGET
*/
export default function fetchMethod(options: { params: { materialId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessPathSelectVO>(
        {
            url: "/app-mobile-web/api/app/mobile/salesOrder/getMaterialRoutingSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺路径选择VO»» */
export interface IJSONResultListProcessPathSelectVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessPathSelectionVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺路径选择VO */
export interface IProcessPathSelectionVO {
    /** id */
    id?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 工艺路径编号 */
    code?: string;
    /** 是否物料默认 */
    isDefault?: EProcessPathSelectionVO_isDefault;
    /** 物料bomId */
    materialBomId?: string;
    /** 物料bom名称 */
    materialBomName?: string;
    /** 物料bom编号 */
    materialBomCode?: string;
    /** 物料ID */
    materialId?: string;
}

export enum EProcessPathSelectionVO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

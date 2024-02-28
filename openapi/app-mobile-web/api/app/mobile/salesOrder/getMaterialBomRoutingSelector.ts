import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/销售订单相关/getMaterialBomRoutingSelectorUsingGET
*/
export default function fetchMethod(options: { params: { materialId?: string } }, extraOptions?: any) {
    return http<IJSONResultListMaterialBomRoutingVO>(
        {
            url: "/app-mobile-web/api/app/mobile/salesOrder/getMaterialBomRoutingSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«MaterialBomRoutingVO»» */
export interface IJSONResultListMaterialBomRoutingVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialBomRoutingVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** MaterialBomRoutingVO */
export interface IMaterialBomRoutingVO {
    /** id */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 工艺路径id */
    routingId?: string;
    /** 工艺路径名称 */
    routingName?: string;
    /** 工艺路径编码 */
    routingCode?: string;
}

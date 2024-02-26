import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/销售订单相关/getMaterialBomRoutingSelectorUsingGET
*/
export default function fetchMethod(params: { materialId: number }, extraOptions?: any) {
    return http<IJSONResultListMaterialBomRoutingVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesOrder/getMaterialBomRoutingSelector",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«MaterialBomRoutingVO»» */
export interface IJSONResultListMaterialBomRoutingVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IMaterialBomRoutingVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** MaterialBomRoutingVO */
export interface IMaterialBomRoutingVO {
    /** id */
    id: number;
    /** 编码 */
    code: string;
    /** 名称 */
    name: string;
    /** 工艺路径id */
    routingId: number;
    /** 工艺路径名称 */
    routingName: string;
    /** 工艺路径编码 */
    routingCode: string;
}

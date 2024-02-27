import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/批次跟踪报表相关/getBillFlowPathCodeListUsingGET_1
*/
export default function fetchMethod(options: { params: { masterDataFlowPathCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/warehouseStorageLotNoTrackReport/getBillFlowPathCodeList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id Code Name 通用传输对象»» */
export interface IJSONResultListIdCodeNameACommonTransferObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdCodeNameGenericTransportObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: string;
    /** code */
    code?: string;
    /** name */
    name?: string;
}

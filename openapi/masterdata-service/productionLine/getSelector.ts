import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/产线相关/getSelectorUsingPOST_1
*/
export default function fetchMethod(options: { data: INameNumberVO }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/productionLine/getSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 名称、编号VO */
export interface INameNumberVO {
    /** 名称or编号 */
    nameOrCode?: string;
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
